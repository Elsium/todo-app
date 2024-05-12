import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Title from '@/components/UI/Title'
import '@testing-library/jest-dom'

const MockIcon = () => <div>Icon</div>

describe('Title Component', () => {
    it('renders the title', () => {
        render(<Title title="Test Title" Icon={null} />)
        const titleElement = screen.getByText('Test Title')
        expect(titleElement).toBeInTheDocument()
    })

    it('does not render the icon if Icon is null', () => {
        render(<Title title="Test Title" Icon={null} />)
        const iconElement = screen.queryByText('Icon')
        expect(iconElement).not.toBeInTheDocument()
    })

    it('renders the icon and button if Icon is provided', () => {
        render(<Title title="Test Title" Icon={MockIcon} onClick={() => {}} />)
        const iconElement = screen.getByText('Icon')
        expect(iconElement).toBeInTheDocument()
        const buttonElement = screen.getByRole('button')
        expect(buttonElement).toBeInTheDocument()
    })

    it('calls onClick when the button is clicked', () => {
        const mockOnClick = jest.fn()
        render(<Title title="Test Title" Icon={MockIcon} onClick={mockOnClick} />)
        const buttonElement = screen.getByRole('button')
        fireEvent.click(buttonElement)
        expect(mockOnClick).toHaveBeenCalledWith(false)
    })
})