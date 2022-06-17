import React from "react";
import '@testing-library/jest-dom/extend-expect'
import {  render, screen} from "@testing-library/react";
import {BrowserRouter as Router} from 'react-router-dom';
import {Welcome} from "./welcome";

beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(<Router><Welcome/></Router>)
})

test('Render tittle', () =>{
    const title = screen.getByText(/Welcome to the Trivial Challenge!/i)
    expect(title).toBeInTheDocument();
})

test('Render instructions', () =>{
    const firstInstructions = screen.getByText(/You will be presented with 10 True or False questions./i)
    const secondInstructions = screen.getByText(/Can you score 100%?/i)
    expect(firstInstructions).toBeInTheDocument()
    expect(secondInstructions).toBeInTheDocument()
})

test('Render button', () =>{
    const button = screen.getByRole('link', /BEGIN/i)
    expect(button).toBeInTheDocument()
})