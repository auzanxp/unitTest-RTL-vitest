import React from 'react'
import { describe, test } from 'vitest'
import { screen, render } from '@testing-library/react'
import Button from '../src/components/Button'

describe('Button Components', () => {
    test('should render label correctly', () => {
        const label = 'test'

        render(<Button label={label} />)

        const buttonElement = screen.getByRole('button')
        expect(buttonElement).toHaveTextContent('test')
    })
})