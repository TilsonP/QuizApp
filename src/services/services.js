import {Question} from "../models/question";

export class Services{

    URL= "https://opentdb.com/api.php"

    async find_questions(amount, difficulty,type){
        let response = await fetch(`${this.URL}?amount=${amount}&difficulty=${difficulty}&type=${type}`)
            .then(response => response.json())

        let questions = response["results"]

        if(questions){
            let questionsList = []
            for ( const [key] of Object.entries(questions)){
                const question = new Question()

                question.question = questions[key]["question"]
                question.answer = null
                question.correct_answer = questions[key]["correct_answer"]
                question.category = questions[key]["category"]

                questionsList.push(question)
            }

            return questionsList
        }
    }
}