import React from "react";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, test } from "vitest";
import App from '../src/App';


describe('App Component', () => {
    test('when form is empty, button should disable', () => {
        render(<App />)

        const buttonElement = screen.getByRole('button', { name: /login/i })
        expect(buttonElement).toBeDisabled()
    })

    test('when form is fill, button should not disable', async () => {
        render(<App />)

        const inputEmail = screen.getByRole('textbox')
        const inputPassword = screen.getByPlaceholderText(/enter password/i)
        const buttonElement = screen.getByRole('button', { name: /login/i })

        await userEvent.type(inputEmail, 'saya')
        await userEvent.type(inputPassword, '123')
        expect(buttonElement).not.toBeDisabled()
    })

    test('when email format wrong, should show error message', async () => {
        render(<App />)

        const inputEmail = screen.getByRole('textbox')
        const inputPassword = screen.getByPlaceholderText(/enter password/i)
        const buttonElement = screen.getByRole('button', { name: /login/i })

        await userEvent.type(inputEmail, 'saya')
        await userEvent.type(inputPassword, '123')
        await userEvent.click(buttonElement)

        expect(inputEmail).toBeInvalid()
    })

    test('when user not register, should show error message', async () => {
        render(<App />)

        const inputEmail = screen.getByRole('textbox')
        const inputPassword = screen.getByPlaceholderText(/enter password/i)
        const buttonElement = screen.getByRole('button', { name: /login/i })

        await userEvent.type(inputEmail, 'kamu@mail.com')
        await userEvent.type(inputPassword, '123')
        await userEvent.click(buttonElement)

        const spanElement = screen.getByText(/user not register/i)

        expect(spanElement).toBeInTheDocument()
    })

    test('when login succes, should not show error message', async () => {
        render(<App />)

        const inputEmail = screen.getByRole('textbox')
        const inputPassword = screen.getByPlaceholderText(/enter password/i)
        const buttonElement = screen.getByRole('button', { name: /login/i })

        await userEvent.type(inputEmail, 'test@mail.com')
        await userEvent.type(inputPassword, '123')
        await userEvent.click(buttonElement)

        const spanElement = screen.getByRole('alert')
        expect(spanElement).toHaveTextContent('')
    })
})