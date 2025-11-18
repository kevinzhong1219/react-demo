import { render, screen, fireEvent } from '@testing-library/react'
import Home from '../Home'

test('renders Home page with Counter and increments', () => {
    render(<Home />)

    // Check page title
    expect(screen.getByText('Home Page')).toBeInTheDocument()

    // Counter initial value
    expect(screen.getByTestId('count-value')).toHaveTextContent('Count: 10')

    // Increment
    fireEvent.click(screen.getByText('Increment'))
    expect(screen.getByTestId('count-value')).toHaveTextContent('Count: 11')
})
