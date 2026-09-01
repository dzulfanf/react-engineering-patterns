# [Pattern Name]

> [One-sentence description of the pattern and the problem it addresses.]

## 1. Problem

### Context

[Describe the situation or requirement that leads to the problem.]

### Problem Statement

[Clearly define the problem we are trying to solve.]

### Constraints

- [Constraint 1]
- [Constraint 2]
- [Constraint 3]

---

## 2. Baseline / Naive Approach

[Start with the simplest reasonable implementation.]

### Implementation

[Describe or link to the baseline implementation.]

### Example

```tsx
// Example implementation
```

### What Works

- [Advantage]
- [Advantage]

### What Starts to Hurt

- [Problem]
- [Problem]
- [Problem]

---

## 3. Why It Doesn't Scale

[Explain what changes when requirements grow.]

Consider:

- Increasing component complexity
- Increasing number of props
- State ownership
- Component communication
- Reusability
- API complexity
- Testing complexity
- Accessibility
- Performance

The important question is:

> [What fundamental problem becomes difficult to solve with the baseline approach?]

---

## 4. Pattern

### Definition

[Define the pattern in your own words.]

### Core Idea

[Explain the underlying principle.]

### Mental Model

```text
[Visualize how the pattern works.]
```

### What Problem Does It Solve?

[Connect the pattern directly to the original problem.]

---

## 5. Evolution

Show how the implementation evolves from the baseline to the pattern.

```text
Baseline
   ↓
Requirement
   ↓
New Constraint
   ↓
Intermediate Solution
   ↓
Pattern
```

### Step 1 — [Evolution Step]

[Explain what changed and why.]

### Step 2 — [Evolution Step]

[Explain what changed and why.]

### Step 3 — [Evolution Step]

[Explain what changed and why.]

### Final Evolution

[Explain why the final implementation represents the pattern.]

---

## 6. Implementation

### Minimal Implementation

[Implement the smallest version that demonstrates the core pattern.]

### TypeScript Implementation

[Show how the pattern can be expressed safely with TypeScript.]

### Production-Oriented Implementation

[Discuss additional considerations required in a realistic application.]

Potential considerations:

- Error handling
- API design
- Accessibility
- State management
- Extensibility
- Developer experience
- Testing
- Performance

---

## 7. API Design

### Public API

```tsx
// Example API
```

### Why This API?

[Explain the design decisions behind the API.]

### Alternative API

```tsx
// Alternative API
```

### Comparison

[Explain why one API may be preferable depending on the use case.]

---

## 8. Trade-offs

### Advantages

- [Advantage]
- [Advantage]
- [Advantage]

### Disadvantages

- [Disadvantage]
- [Disadvantage]
- [Disadvantage]

### Complexity

[Explain whether the pattern reduces or increases conceptual and implementation complexity.]

---

## 9. When to Use

Use this pattern when:

- [Situation]
- [Situation]
- [Situation]

---

## 10. When NOT to Use

Avoid this pattern when:

- [Situation]
- [Situation]
- [Situation]

> A pattern is not automatically a best practice simply because it is reusable or flexible.

---

## 11. Alternatives

| Approach     | Strengths  | Weaknesses | Best Fit   |
| ------------ | ---------- | ---------- | ---------- |
| [Approach A] | [Strength] | [Weakness] | [Use case] |
| [Approach B] | [Strength] | [Weakness] | [Use case] |
| [Pattern]    | [Strength] | [Weakness] | [Use case] |

### Why Choose This Pattern?

[Explain the decision relative to the alternatives.]

---

## 12. Testing

### What Should Be Tested?

- [Behavior]
- [Behavior]
- [Contract]
- [Edge case]

### Testing Strategy

[Explain the testing approach.]

### Example

```tsx
// Test example
```

### Testing Considerations

[Discuss what should and should not be tested.]

---

## 13. Accessibility

[Discuss accessibility considerations relevant to this pattern.]

Consider:

- Semantic HTML
- Keyboard interaction
- Focus management
- ARIA
- Screen readers
- Accessible state

### Accessibility Testing

[Explain how accessibility should be verified.]

---

## 14. Performance

[Discuss relevant performance characteristics.]

Consider:

- Rendering behavior
- Re-renders
- State subscriptions
- Context propagation
- Memoization
- Component boundaries
- Bundle impact

### Performance Trade-offs

[Explain when optimization is useful and when it would be premature.]

---

## 15. Failure Modes

[Describe common ways this pattern can be misused or implemented incorrectly.]

### Failure Mode 1

[Description and mitigation.]

### Failure Mode 2

[Description and mitigation.]

---

## 16. Engineering Decisions

Document important decisions made during the implementation.

| Decision   | Reason   | Trade-off   |
| ---------- | -------- | ----------- |
| [Decision] | [Reason] | [Trade-off] |

For decisions that have significant architectural impact, create a separate ADR.

---

## 17. Key Takeaways

### The Problem

[What problem were we solving?]

### The Insight

[What fundamental insight did the pattern provide?]

### The Trade-off

[What did we gain and what did we give up?]

### The Rule of Thumb

> [A concise practical guideline.]

---

## 18. References

- [Reference]
- [Reference]
- [Reference]

---

## Status

- [ ] Problem defined
- [ ] Baseline implemented
- [ ] Evolution documented
- [ ] Pattern implemented
- [ ] TypeScript considerations documented
- [ ] API design documented
- [ ] Trade-offs documented
- [ ] Alternatives compared
- [ ] Tests implemented
- [ ] Accessibility reviewed
- [ ] Performance reviewed
- [ ] Failure modes documented
- [ ] Final review completed
- [ ] Deep dive complete
