import { useState } from 'react'
import type { TabsProps } from './types'

export function Tabs({ tabs, defaultActiveTab }: TabsProps) {
  const firstEnabledTab = tabs.find((tab) => !tab.disabled)

  const initialActiveTab =
    tabs.find((tab) => tab.id === defaultActiveTab && !tab.disabled)?.id ??
    firstEnabledTab?.id ??
    null

  const [activeTab, setActiveTab] = useState(initialActiveTab)

  const activeTabContent = tabs.find((tab) => tab.id === activeTab)?.content

  return (
    <div>
      <div>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            disabled={tab.disabled}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div>{activeTabContent}</div>
    </div>
  )
}
