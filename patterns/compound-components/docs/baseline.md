# Compound Components — Baseline Specification

## Purpose

This document defines the baseline implementation for the Compound Components deep dive.

The goal is to start with the simplest reasonable Tabs implementation before introducing composition, shared state, Context, or Compound Components.

The baseline should solve the current problem well.

It should not be intentionally designed poorly just to justify a more advanced pattern later.

---

## Problem

We need a reusable Tabs component that can:

* Display a list of tabs.
* Maintain one active tab.
* Allow users to switch between tabs.
* Display content for the active tab.
* Support disabled tabs.

The component should provide a simple configuration-based API.

---

## Scope

### Included

The baseline implementation must support:

* A list of tabs.
* One active tab at a time.
* Internal state management.
* Switching between enabled tabs.
* Disabled tabs.
* Tab content using `ReactNode`.
* TypeScript.
* Unit and component tests.

---

### Explicitly Excluded

The baseline implementation will not include:

* Compound Components.
* React Context.
* Controlled state.
* `value` / `onValueChange` APIs.
* Keyboard navigation.
* Complete ARIA implementation.
* Focus management.
* Advanced composition.
* Custom trigger rendering.
* Custom panel rendering.
* Performance optimization.
* Advanced extensibility.

These features are intentionally excluded because they are not required to solve the baseline problem.

They will be introduced only when new requirements justify additional complexity.

---

## Proposed Public API

The initial API should be configuration-based.

```tsx
type Tab = {
  id: string
  label: string
  content: ReactNode
  disabled?: boolean
}

type TabsProps = {
  tabs: Tab[]
  defaultActiveTab?: string
}
```

Example usage:

```tsx
<Tabs
  defaultActiveTab="overview"
  tabs={[
    {
      id: 'overview',
      label: 'Overview',
      content: <Overview />,
    },
    {
      id: 'settings',
      label: 'Settings',
      content: <Settings />,
    },
  ]}
/>
```

---

## State Ownership

The baseline component owns its active state internally.

Conceptually:

```text
Tabs
 │
 └── activeTab
       │
       ├── Tab triggers
       │
       └── Active panel
```

The consumer provides configuration.

The component manages interaction state.

---

## Expected Behavior

### Initial State

When the component renders:

1. One tab should be active.
2. The corresponding panel should be displayed.

### Default Active Tab

If `defaultActiveTab` is provided and matches an enabled tab:

```tsx
<Tabs
  defaultActiveTab="settings"
  tabs={tabs}
/>
```

That tab should be active initially.

### Fallback Behavior

If `defaultActiveTab` is not provided, the component should select the first enabled tab.

### Switching Tabs

When a user selects an enabled tab:

1. The active state should update.
2. The previously active panel should no longer be displayed.
3. The selected tab's panel should be displayed.

### Disabled Tabs

A disabled tab:

* Should be visually distinguishable.
* Should not become active through pointer interaction.
* Should not change the currently active panel.

---

## Data Contract

Each tab requires:

```tsx
type Tab = {
  id: string
  label: string
  content: ReactNode
  disabled?: boolean
}
```

### ID

`id` identifies the tab and connects:

* Trigger state
* Active state
* Panel content

For the baseline implementation, uniqueness is assumed.

Validation strategies may be explored later.

---

## Non-Goals

The baseline is not intended to become a production-ready Tabs component.

Its purpose is to establish a clear starting point for evolution.

We are intentionally not solving future problems yet.

For example:

> We do not need Context until multiple independently rendered components need shared state.

> We do not need a controlled API until consumers need to own the active state.

> We do not need Compound Components until configuration becomes insufficient for structural flexibility.

---

## Testing Requirements

The baseline implementation should test observable behavior.

### Required Tests

* Renders all tab labels.
* Displays the initial active panel.
* Uses `defaultActiveTab` when valid.
* Falls back to the first enabled tab when appropriate.
* Changes the active panel when an enabled tab is selected.
* Does not activate disabled tabs.

### Testing Principle

Tests should interact with the component through its public behavior.

Avoid testing:

* Internal state variables.
* Implementation-specific function calls.
* Internal component structure.

The goal is to verify:

> What does the user observe?

not:

> How does React internally implement it?

---

## Accessibility

Accessibility is intentionally not fully implemented in the baseline.

However, the implementation should avoid unnecessarily creating an accessibility-hostile structure.

The baseline will use reasonable HTML elements where possible.

Full accessibility requirements, including keyboard navigation and ARIA relationships, will be introduced as a dedicated evolution step.

---

## Success Criteria

The baseline is complete when:

* [ ] Tabs render correctly.
* [ ] One tab is active.
* [ ] The correct panel is displayed.
* [ ] Users can switch enabled tabs.
* [ ] Disabled tabs cannot be activated.
* [ ] `defaultActiveTab` works.
* [ ] Fallback behavior works.
* [ ] TypeScript types are defined.
* [ ] Tests pass.
* [ ] Lint passes.
* [ ] Type checking passes.
* [ ] Build passes.

---

## What Comes Next?

After completing the baseline, we will introduce new requirements.

The key question will be:

> What requirement makes the current configuration-based API start to hurt?

We will not introduce Compound Components until we can clearly identify the problem they solve.

```text
Baseline
   ↓
New requirement
   ↓
Constraint
   ↓
Current API starts to hurt
   ↓
Explore composition
   ↓
Compound Components
```

This evolution is the core purpose of the deep dive.
