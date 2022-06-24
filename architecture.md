# Celigo UI Architecture proposal - early draft

## History

- June 17, _Dave Riedl_, Initial Draft
- June 24, _Dave Riedl_, More details added on Approach / Steps

## Intro

Currently the integrator.io UI uses a single monolithic React app. With our complex and feature rich UI, our single UI project has become a true behemoth. As the UI team grows, development and product resources will be silo'd into teams responsible for distinct "feature-spaces". As such, we need a more modern and flexible front-end architecture that will enable each of these teams to build/test and deploy their respective features independently of the remaining teams.

### Considerations

#### Web Framework

Bleeding edge web frameworks should be avoided in favour of time-tested and community supported options. We need to select technologies that our current developer pool is proficient in, and those that potential new developers already have familiarity with.

As such, this proposal assumes all MFEs / packages will use React as the web framework. The 3rd party ecosystem and support are second to none, and the current thriving developer community will be present for years to come.

#### State Management

We currently use Redux, complemented by Redux-saga for async and transactional logic. It's solid and easily testable, but with redux's style of explicitly defining all actions, selectors, action types, etc, it is an incredibly verbose coding style.

In the state management domain, we do have some for flexibility to adopt more modern libraries. State management is a not a complex problem, state management libraries are small, and don't require an ecosystem of extensions.

Redux was written back in 2015. There are many compelling alternatives with wide adoption and support. React itself is not the same as in 2015, and we now also need to consider shared state across MFEs. As such, we should not consider Redux as the defacto choice going forward.

#### Timeline

Transitioning from one architecture to another, without sacrificing elegance of design, takes time. As such, constraints to timelines during this period typically lead to lost opportunities. As such we should employ a phased approach which continuously provides platform improvements, while at the same time, support the development of ongoing product feature enhancements.

The timeline thus, must be broken down into target milestones for specific refactoring efforts that target key parts of of our current architecture for refactoring.

## Approach

Phased approach, broken down into:

### Prerequisite steps to enable feature-centric MFEs

These steps are needed in order to provide the necessary shared building blocks on any MFE. These steps should be applied against the current architecture prior to attempting to building an MFE.

1. Extract core Celigo components into a separate package, but keep it build-time dependent.
2. Extract DynaForms into separate package, build-time dependency is fine. When major re-work is planned, move to run-time dependency.
3. Extract authentication logic into a separate package. Possibly bundle permissions / preferences in this package.
4. Extract client store (data-layer) into separate package. Keep interface identical (all selectors, and action methods)
5. All remaining data-layer logic into package. This will be a build-time dependency until MFEs are created and relevant feature-specific logic is moved to each MFE in the steps below

### Federate current architecture

1. Extract global search (simple feature, ripe for improvement, (good exercise to test above steps)
2. Iterate on prerequisite steps if needed prior to next MFE extraction
3. Dashboard / All other non-?
4. Extract AFE as a no-state-dependant component library. Same pattern as the Celigo component library in step 1 above. Almost every feature uses an AFE.
5. Extract FlowBuilder
6. Extract Mapping
7. Error Management?

## File Structure

### React apps/libraries

We should use the "barrel" file structure pattern
example:

- components
  - MyComponent
    - index.ts
    - MyComponent.tsx
    - MyComponent.test.ts
    - MyComponent.stories.tsx
    - ChildComponent.tsx

## Technologies

### [Typescript](https://www.typescriptlang.org/)

- Allows us to enforce contracts at build time.
- Because contract (interface) changes require code changes to the Typescript type definitions, it is easy to know if a new feature preserves or breaks the current contract. This is vital stable runtime dependency architecture to reduce the chance of deployments of individual MFEs breaking dependant features in the composite app.
- we need to configure **strict** linting rules to ensure no breaking changes are made by accidental interface changes.

### [Turborepo](https://turborepo.org/docs)

- CLI for generating the scaffolding for a Typescript mono-repo
- Generates starter workspace for next.js web apps, but is easily converted to supporting a React stack frontend architecture
- includes workspace-wide eslint and prettier configurations
- built with CI in mind.

### [zustand](https://github.com/pmndrs/zustand)

- Manages global state
- Tiny footprint, 1k gzipped.
- Great for small MFEs to manage internal state
- Inspired by Redux, but without all the boilerplate code.
- Easy to adopt.
