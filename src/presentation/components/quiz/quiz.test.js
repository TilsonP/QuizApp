import React from "react";
import '@testing-library/jest-dom/extend-expect'
import {fireEvent, render, screen} from "@testing-library/react";
import {BrowserRouter as Router} from 'react-router-dom';
import {Quiz} from "./quiz";

beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(<Router><Quiz/></Router>)
})

test('Render tittles', async () =>{
    const title = await screen.findByText(/Question 1/i)
    const category = await screen.findByText(/Category:/i)
    expect(title).toBeInTheDocument();
    expect(category).toBeInTheDocument();
})

test('Next question after true', async () =>{
    const button = await screen.findByRole('button', {name: /True/i})

    fireEvent.click(button)

    const title = await screen.findByText(/Question 2/i)
    expect(title).toBeInTheDocument();
})

test('Next question after false', async () =>{
    const button = await screen.findByRole('button', {name: /False/i})

    fireEvent.click(button)

    const title = await screen.findByText(/Question 2/i)
    expect(title).toBeInTheDocument();
})

test('Show Result', async () =>{
    const button = await screen.findByRole('button', {name: /False/i})

    for (let i = 0; i < 10; i++) {
        fireEvent.click(button)
    }

    const result = await screen.findByText(/You scored/i)
    expect(result).toBeInTheDocument();
})

