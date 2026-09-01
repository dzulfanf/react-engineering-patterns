# Compound Components

> A React composition pattern for building flexible component APIs where multiple components work together as a cohesive unit.

## 1. Problem

### Context

As a component grows, its API can become increasingly difficult to maintain.

A component may start with a simple interface:

```tsx
<Tabs
  activeTab="overview"
  onTabChange={setActiveTab}
  tabs={[
    { id: 'overview', label: 'Overview' },
    { id: 'settings', label: 'Settings' },
  ]}
/>
```

This approach works well while the component is simple.

However, as requirements grow, the component may need to support:

- Custom tab layouts
- Custom triggers
- Custom panels
- Additional actions
- Icons
- Loading states
- Disabled states
- Different visual structures
- Shared state between related components

The API can gradually become configuration-heavy.

### Problem Statement

How can we design a component API that allows consumers to **compose the structure of a component** while keeping the related components coordinated through shared state and behavior?

### Constraints

The solution should:

- Preserve a clear and readable component API.
- Allow consumers to control component composition.
- Keep related components coordinated.
- Avoid excessive configuration props.
- Maintain type safety.
- Support both reusable logic and flexible presentation.
- Remain testable.
- Allow the abstraction to evolve without unnecessary complexity.

---

## 2. Baseline / Naive Approach

The baseline implementation starts with a single component whose behavior is controlled primarily through props.

### Implementation

A simplified example:

```tsx
<Tabs
  activeTab="overview"
  onTabChange={setActiveTab}
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

The component owns the relationship between:

- Tabs
- Tab triggers
- Tab panels
- Active state

### What Works

The baseline approach has several advantages:

- Simple to understand.
- Small public API.
- Easy to implement initially.
- Easy to render from configuration.
- Straightforward to test.

For simple use cases, this may be the better solution.

### What Starts to Hurt

As customization requirements increase, the API can become increasingly configuration-heavy.

For example:

```tsx
<Tabs
  tabs={tabs}
  activeTab={activeTab}
  onTabChange={onTabChange}
  renderTrigger={renderTrigger}
  renderPanel={renderPanel}
  renderIcon={renderIcon}
  renderAction={renderAction}
  ...
/>
```

The component becomes responsible for understanding many presentation decisions that could instead belong to the consumer.

---

## 3. Why It Doesn't Scale

The fundamental problem is not the number of props by itself.

The deeper problem is that **structure and behavior become tightly coupled inside one component API**.

As the number of customization requirements grows:

```text
Simple Configuration
        ↓
More Props
        ↓
More Conditional Logic
        ↓
More API Surface
        ↓
Harder Composition
```

The consumer can configure the component, but has limited control over its internal structure.

This creates tension between:

- Reusability
- Flexibility
- API simplicity
- Component ownership

The key question becomes:

> What if consumers could compose the component themselves while the component still coordinated the shared behavior?

---

## 4. Pattern

### Definition

The **Compound Components pattern** groups multiple related components under a shared conceptual API.

Instead of configuring one large component, consumers compose several components that work together:

```tsx
<Tabs>
  <Tabs.List>
    <Tabs.Trigger />
    <Tabs.Trigger />
  </Tabs.List>

  <Tabs.Panel />
  <Tabs.Panel />
</Tabs>
```

Each component has a focused responsibility while participating in the same component system.

### Core Idea

The pattern separates:

**Structure**

from:

**Shared behavior and state**

The consumer controls the structure through composition while the parent component provides the context required for the children to coordinate.

### Mental Model

```text
                    Tabs
                     │
              Shared State
                     │
              ┌──────┴──────┐
              ↓             ↓
           Tabs.List     Tabs.Panel
              │
        ┌─────┴─────┐
        ↓           ↓
   Tabs.Trigger  Tabs.Trigger
```

The exact implementation mechanism is explored throughout this deep dive.

### What Problem Does It Solve?

Compound Components provide a way to expose a flexible component API without requiring the parent component to know every possible layout or presentation requirement in advance.

---

## 5. Evolution

The implementation will evolve progressively rather than jumping directly to the final pattern.

```text
Configuration-based Tabs
          ↓
Growing customization requirements
          ↓
Composition
          ↓
Compound Components
          ↓
Shared State
          ↓
Context
          ↓
Controlled / Uncontrolled State
          ↓
Accessibility
          ↓
Testing & Refinement
```

### Step 1 — Baseline

Start with a simple configuration-driven component.

Goal:

> Establish the simplest reasonable solution before introducing abstraction.

### Step 2 — Composition

Explore what happens when the consumer needs more control over the component structure.

Goal:

> Move from configuration toward composition.

### Step 3 — Compound Components

Introduce related components that form a single conceptual API.

Goal:

> Allow consumers to compose the component while preserving coordination.

### Step 4 — Shared State

Multiple child components need access to shared state.

Goal:

> Determine how related components can communicate without excessive prop drilling.

### Step 5 — Context

Explore React Context as a mechanism for sharing the compound component's state and behavior.

Goal:

> Understand what Context solves and what new trade-offs it introduces.

### Step 6 — Controlled State

Allow consumers to optionally own the state.

Goal:

> Explore controlled and uncontrolled component APIs.

### Step 7 — Production Considerations

Evaluate the pattern beyond the basic implementation.

Areas include:

- Accessibility
- TypeScript
- Testing
- Performance
- API design
- Error handling
- Developer experience

---

## 6. Implementation

### Minimal Implementation

_To be implemented._

The minimal implementation should demonstrate the core Compound Components mechanism without introducing unnecessary abstractions.

### TypeScript Implementation

_To be implemented._

The implementation should explore how TypeScript can model the public component API and shared component contracts.

### Production-Oriented Implementation

_To be implemented._

Production considerations will be added after the core pattern has been established.

---

## 7. API Design

### Public API

The intended API will evolve toward a compositional interface similar to:

```tsx
<Tabs defaultValue="overview">
  <Tabs.List>
    <Tabs.Trigger value="overview">Overview</Tabs.Trigger>

    <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
  </Tabs.List>

  <Tabs.Panel value="overview">Overview content</Tabs.Panel>

  <Tabs.Panel value="settings">Settings content</Tabs.Panel>
</Tabs>
```

This API is intentionally presented as a target for exploration rather than the final implementation.

### Why This API?

The API should allow consumers to control:

- Component structure
- Content
- Presentation
- Composition

while the component system controls:

- Shared state
- Coordination
- Behavioral contracts

### Alternative API

The configuration-based alternative remains valid:

```tsx
<Tabs tabs={tabs} activeTab={activeTab} onTabChange={onTabChange} />
```

### Comparison

The deep dive will compare configuration and composition rather than assuming that Compound Components are always superior.

---

## 8. Trade-offs

### Advantages

Potential benefits include:

- Flexible composition
- More expressive APIs
- Separation of structure and behavior
- Better control over component layout
- Related components can share behavior

### Disadvantages

Potential costs include:

- More components
- More conceptual complexity
- Implicit relationships between components
- Context-related complexity
- More complex TypeScript types
- Potential misuse of the abstraction

### Complexity

The pattern may reduce configuration complexity while increasing conceptual complexity.

The goal of this deep dive is to determine **when that trade-off is worthwhile**.

---

## 9. When to Use

The pattern may be appropriate when:

- Several components form a cohesive conceptual unit.
- Consumers need meaningful control over structure.
- Related components need to share state or behavior.
- A configuration-based API is becoming difficult to extend.
- The component needs multiple valid compositions.

---

## 10. When NOT to Use

Avoid introducing Compound Components when:

- The component has a simple API.
- There is little need for structural customization.
- A few props solve the problem cleanly.
- The abstraction introduces more complexity than value.
- The relationship between child components is not meaningful.

> Composition is not automatically better than configuration.

---

## 11. Alternatives

| Approach            | Strengths                       | Weaknesses                          | Best Fit                   |
| ------------------- | ------------------------------- | ----------------------------------- | -------------------------- |
| Configuration Props | Simple API, easy to start       | Can become configuration-heavy      | Simple components          |
| Render Props        | Flexible rendering and behavior | More complex API                    | Dynamic rendering          |
| Custom Hooks        | Reusable behavior               | Does not define component structure | Logic reuse                |
| Compound Components | Flexible composition            | Higher conceptual complexity        | Cohesive component systems |

### Why Choose This Pattern?

The final decision should be based on the specific problem being solved rather than pattern preference.

---

## 12. Testing

### What Should Be Tested?

The implementation should verify:

- Components render correctly.
- Related components coordinate correctly.
- State changes produce the expected behavior.
- Invalid usage is handled appropriately.
- Controlled and uncontrolled behavior work as intended.
- Public component contracts remain stable.

### Testing Strategy

Tests should focus primarily on **observable behavior** rather than implementation details.

### Example

_To be implemented._

### Testing Considerations

Avoid tests that depend unnecessarily on internal implementation details such as:

- Specific Context implementation
- Internal state variables
- Private component structure

The goal is to test the behavior exposed by the public API.

---

## 13. Accessibility

The Compound Components implementation should consider accessibility from the beginning rather than treating it as a final enhancement.

For the Tabs example, this includes:

- Appropriate semantic roles
- Keyboard interaction
- Focus management
- Active state communication
- Accessible relationships between triggers and panels
- Appropriate ARIA attributes where necessary

### Accessibility Testing

Accessibility behavior should be verified through user-facing interactions and, where appropriate, automated accessibility testing.

---

## 14. Performance

Performance considerations include:

- Context propagation
- Component re-renders
- State ownership
- Component boundaries
- Memoization
- Subscription granularity

A key question is:

> Does the flexibility introduced by Compound Components create unnecessary rendering work?

Optimization should be based on measured behavior rather than assumptions.

---

## 15. Failure Modes

### Failure Mode 1 — Over-Abstraction

Introducing Compound Components when simple props would be sufficient.

**Mitigation:** Start with the simplest reasonable implementation.

### Failure Mode 2 — Hidden Component Contracts

Child components may depend on being rendered inside a specific parent.

**Mitigation:** Make the relationship clear through documentation and runtime/type-level contracts where appropriate.

### Failure Mode 3 — Context Overuse

Using Context simply because the pattern commonly uses it.

**Mitigation:** Understand the state-sharing problem first, then determine whether Context is appropriate.

### Failure Mode 4 — Excessive Flexibility

Making every aspect of the component configurable.

**Mitigation:** Define intentional composition boundaries.

---

## 16. Engineering Decisions

Important implementation decisions will be documented as the deep dive progresses.

| Decision                                                  | Reason                                     | Trade-off                            |
| --------------------------------------------------------- | ------------------------------------------ | ------------------------------------ |
| Start with a configuration-based baseline                 | Establish the simplest reasonable solution | Less structural flexibility          |
| Evolve toward composition                                 | Address growing customization requirements | More API surface                     |
| Explore Context only after shared state becomes a problem | Avoid premature abstraction                | Additional implementation complexity |

For decisions with broader architectural impact, a separate ADR may be created.

---

## 17. Key Takeaways

### The Problem

Configuration-based components can become difficult to extend when consumers need increasing control over structure and presentation.

### The Insight

Compound Components allow related components to form a cohesive API while giving consumers more control through composition.

### The Trade-off

The pattern can reduce configuration complexity but introduces additional conceptual and implementation complexity.

### The Rule of Thumb

> **Use Compound Components when composition itself is part of the component's API—not simply because the pattern is flexible.**

---

## 18. References

_To be added as the implementation and research progress._

---

## Status

- [x] Problem defined
- [x] Baseline defined
- [x] Evolution documented
- [x] Pattern concept documented
- [ ] Baseline implemented
- [ ] Pattern implemented
- [ ] TypeScript considerations documented
- [ ] API design finalized
- [ ] Trade-offs validated
- [ ] Alternatives compared
- [ ] Tests implemented
- [ ] Accessibility reviewed
- [ ] Performance reviewed
- [ ] Failure modes validated
- [ ] Final review completed
- [ ] Deep dive complete
