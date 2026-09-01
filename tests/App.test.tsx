import { render, screen } from '@testing-library/react'
import App from '../src/App'

describe('App', () => {
  it('renders the baseline compound components example', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', {
        name: 'Compound Components — Baseline',
      }),
    ).toBeInTheDocument()
  })
})