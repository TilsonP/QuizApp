import React from "react";
import "./quiz.css";
import {Services} from "../../../services/services";
import {Link} from "react-router-dom";

export class Quiz extends React.Component{

    constructor(props) {
        super(props);
        this.state={
            questions: null,
            current_question: 0,
            punctuation: 0,
            finish: false,
            answers: null
        }
    }

    componentWillMount() {
        this.findQuestions().then()
    }

    render() {
        if (this.state.finish === false){
            return (
                this.state.questions ?
                    <div id="container" className="questions animation">
                        <div className="category number">Question {this.state.current_question+1}</div>
                        <div className="info">Category:</div>
                        <div className="category">{this.state.questions[this.state.current_question].category}</div>
                        <div className="question">{this.state.questions[this.state.current_question].question}</div>
                        <div className="info">Choose an answer</div>
                        <div className="container_button">
                            <div onClick={() =>this.answer("True")} id="button" className="button true">True</div>
                            <div onClick={() =>this.answer("False")} id="button" className="button false">False</div>
                        </div>
                    </div> : <div className="questions"><div className="loader"/></div>
            );
        }else{
            return (
                this.state.answers ?
                    <div className="finish">
                        <div className="score">You scored</div>
                        <div className="score">{this.state.punctuation}/10</div>
                        <div className="answers">{this.state.answers}</div>
                        <Link className="begin" to={'/'}><div>Play again?</div></Link>
                    </div> : <div className="questions"><div className="loader"/></div>
            )
        }
    }

    /*Trae las preguntas y las envia al estado*/
    async findQuestions(){
        const service = new Services()
        const questions = Object.values(await service.find_questions("10","hard", "boolean"))

        this.setState({questions:questions})
    }

    /*Guarda las respestas a cada pregunta y finaliza el quiz*/
    answer(response) {
        const questions = this.state.questions

        questions[this.state.current_question].answer = response

        if (questions[this.state.current_question].correct_answer === response){
            this.setState({punctuation:this.state.punctuation+1})
        }

        this.setState({questions: questions})

        let animation = document.getElementById('container');
        animation.addEventListener('click', () => {
            animation.classList.remove('animation')
            setTimeout(() => animation.classList.add('animation'), 0)
        });

        this.setState({current_question: this.state.current_question + 1})

        if (this.state.current_question === 9){
            this.setState({finish:true})
            this.showResponse()
        }

    }


    /*Visualiza puntuacion*/
    showResponse() {
        const questions = this.state.questions

        let answersList = []

        questions.forEach(question =>{
            answersList.push(
                <div className="answer">
                    <div>{question.question}</div>
                    <div>Correct answer: {question.correct_answer}</div>
                    <div>Your answer: {question.answer}</div>
                    <div className="separate"/>
                </div>)
        })

        this.setState({answers:answersList})

        return answersList
    }

}