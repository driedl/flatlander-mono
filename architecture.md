# Celigo UI Architecture proposal - early draft

## History

- June 17, Dave Riedl, Initial Draft

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

Transitioning from one architecture to another, without sacrificing elegance of design, takes time. Refactoring code along Furthermore, constraints to timelines during this period typically lead to lost opportunities . As such

## Approach

To

## Technologies

### [Typescript](https://www.typescriptlang.org/)

- Allows us to enforce contracts ar build time.
- Because contract (interface) changes require code changes to the Typescript type definitions, it is east to know if a new feature preserves or breaks the current contract. This is vital stable runtime dependency architecture to reduce the chance of deployments of individual MFEs breaking dependant features in the composite app.

### [Turborepo](https://turborepo.org/)

- CLI for generating the scaffolding for a Typescript mono-repo
- Generates starter workspace for next.js web apps, but is easily converted to supporting a React stack frontend architecture
- includes workspace-wide eslint and prettier configurations

### [zustand](https://github.com/pmndrs/zustand)

- Manages global state
- Tiny footprint, 1-2k gzipped.
- Great for small MFEs to manage internal state
- Inspired by Redux, but without all the boilerplate code.
- Easy to adopt.
