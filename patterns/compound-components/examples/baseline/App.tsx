import { Tabs } from '../../src/baseline/Tabs'

export function BaselineExample() {
  return (
    <main>
      <h1>Compound Components — Baseline</h1>

      <p>A simple configuration-based Tabs component with internal state.</p>

      <Tabs
        defaultActiveTab="overview"
        tabs={[
          {
            id: 'overview',
            label: 'Overview',
            content: (
              <div>
                <h2>Overview</h2>
                <p>This is the overview panel.</p>
              </div>
            ),
          },
          {
            id: 'settings',
            label: 'Settings',
            content: (
              <div>
                <h2>Settings</h2>
                <p>This is the settings panel.</p>
              </div>
            ),
          },
          {
            id: 'disabled',
            label: 'Disabled',
            content: (
              <div>
                <h2>Disabled</h2>
                <p>This panel should not be accessible.</p>
              </div>
            ),
            disabled: true,
          },
        ]}
      />
    </main>
  )
}
