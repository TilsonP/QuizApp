import React from "react";
import {Link} from "react-router-dom";
import "./welcome.css"

export class Welcome extends React.Component{

    render() {
        return (
            <nav className="welcome">
                <div className="tittle">Welcome to the Trivial Challenge!</div>
                <div className="instructions">You will be presented with 10 True or False questions.</div>
                <div className="instructions">Can you score 100%?</div>
                <Link className="begin" to={'question'}>BEGIN</Link>
            </nav>
        )
    }
}