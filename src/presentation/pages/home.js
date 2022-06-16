import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import "./home.css"
import {Welcome} from "../components/welcome/welcome";
import {Quiz} from "../components/quiz/quiz";

export class Home extends React.Component{

    render() {
        return (
            <div className="background">
                <div className="container">
                    <BrowserRouter>
                        <Routes>
                            <Route index element={<Welcome/>}/>
                            <Route path="question" element={<Quiz/>}/>
                        </Routes>
                    </BrowserRouter>
                </div>
            </div>
        );
    }
}