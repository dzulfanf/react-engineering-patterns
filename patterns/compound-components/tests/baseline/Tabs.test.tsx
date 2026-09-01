import { fireEvent, render, screen } from '@testing-library/react'
import { Tabs } from '../../src/baseline/Tabs'

describe('Tabs', () => {
  const tabs = [
    {
      id: 'overview',
      label: 'Overview',
      content: <div>Overview content</div>,
    },
    {
      id: 'settings',
      label: 'Settings',
      content: <div>Settings content</div>,
    },
    {
      id: 'disabled',
      label: 'Disabled',
      content: <div>Disabled content</div>,
      disabled: true,
    },
  ]

  it('renders all tab labels', () => {
    render(<Tabs tabs={tabs} />)

    expect(screen.getByRole('button', { name: 'Overview' })).toBeInTheDocument()

    expect(screen.getByRole('button', { name: 'Settings' })).toBeInTheDocument()

    expect(screen.getByRole('button', { name: 'Disabled' })).toBeInTheDocument()
  })

  it('displays the first enabled tab by default', () => {
    render(<Tabs tabs={tabs} />)

    expect(screen.getByText('Overview content')).toBeInTheDocument()
    expect(screen.queryByText('Settings content')).not.toBeInTheDocument()
  })

  it('uses defaultActiveTab when it is valid and enabled', () => {
    render(<Tabs tabs={tabs} defaultActiveTab="settings" />)

    expect(screen.getByText('Settings content')).toBeInTheDocument()
    expect(screen.queryByText('Overview content')).not.toBeInTheDocument()
  })

  it('falls back to the first enabled tab when defaultActiveTab is disabled', () => {
    render(<Tabs tabs={tabs} defaultActiveTab="disabled" />)

    expect(screen.getByText('Overview content')).toBeInTheDocument()
    expect(screen.queryByText('Disabled content')).not.toBeInTheDocument()
  })

  it('changes the active panel when an enabled tab is selected', () => {
    render(<Tabs tabs={tabs} />)

    fireEvent.click(screen.getByRole('button', { name: 'Settings' }))

    expect(screen.getByText('Settings content')).toBeInTheDocument()
    expect(screen.queryByText('Overview content')).not.toBeInTheDocument()
  })

  it('does not activate disabled tabs', () => {
    render(<Tabs tabs={tabs} />)

    const disabledTab = screen.getByRole('button', {
      name: 'Disabled',
    })

    fireEvent.click(disabledTab)

    expect(screen.getByText('Overview content')).toBeInTheDocument()
    expect(screen.queryByText('Disabled content')).not.toBeInTheDocument()
  })
})
