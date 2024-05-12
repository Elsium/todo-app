import React from 'react'
import { render, screen } from '@testing-library/react'
import TableTitle from '@/components/UI/TableTitle'
import '@testing-library/jest-dom'

describe('TableTitle component', () => {
    it('renders title correctly', () => {
        render(<TableTitle title="Test Title" count={0} />)
        expect(screen.getByText('Test Title')).toBeInTheDocument()
    })

    it('does not render count when count is zero', () => {
        render(<TableTitle title="Test Title" count={0} />)
        expect(screen.queryByText('0')).toBeNull()
    })

    it('renders count correctly when count is more than zero', () => {
        render(<TableTitle title="Test Title" count={5} />)
        expect(screen.getByText('5')).toBeInTheDocument()
    })
})