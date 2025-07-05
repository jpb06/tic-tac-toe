# tic-tac-toe

[![Open in Visual Studio Code](https://img.shields.io/static/v1?logo=visualstudiocode&label=&message=Open%20in%20Visual%20Studio%20Code&labelColor=2c2c32&color=007acc&logoColor=007acc)](https://github.dev/jpb06/tic-tac-toe)
[![Front deployment](https://img.shields.io/github/deployments/jpb06/tic-tac-toe/production?label=front%20deploy&logo=vercel&logoColor=white)](https://tic-tac-toe-jpb06.vercel.app)
![Github workflow](https://img.shields.io/github/actions/workflow/status/jpb06/tic-tac-toe/tests-scan.yml?branch=main&logo=github-actions&label=last%20workflow)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=jpb06_tic-tac-toe&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=jpb06_tic-tac-toe)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=jpb06_tic-tac-toe&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=jpb06_tic-tac-toe)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=jpb06_tic-tac-toe&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=jpb06_tic-tac-toe)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=jpb06_tic-tac-toe&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=jpb06_tic-tac-toe)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=jpb06_tic-tac-toe&metric=coverage)](https://sonarcloud.io/summary/new_code?id=jpb06_tic-tac-toe)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=jpb06_tic-tac-toe&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=jpb06_tic-tac-toe)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=jpb06_tic-tac-toe&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=jpb06_tic-tac-toe)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=jpb06_tic-tac-toe&metric=bugs)](https://sonarcloud.io/summary/new_code?id=jpb06_tic-tac-toe)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=jpb06_tic-tac-toe&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=jpb06_tic-tac-toe)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=jpb06_tic-tac-toe&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=jpb06_tic-tac-toe)
![Last commit](https://img.shields.io/github/last-commit/jpb06/tic-tac-toe?logo=git)

Toying again with this simple subject, using tailwind.

<!-- readme-package-icons start -->

<p align="left"><a href="https://docs.github.com/en/actions" target="_blank"><img height="50" width="50" src="https://raw.githubusercontent.com/jpb06/jpb06/master/icons/GithubActions-Dark.svg" /></a>&nbsp;<a href="https://www.typescriptlang.org/docs/" target="_blank"><img height="50" width="50" src="https://raw.githubusercontent.com/jpb06/jpb06/master/icons/TypeScript.svg" /></a>&nbsp;<a href="https://nodejs.org/en/docs/" target="_blank"><img height="50" width="50" src="https://raw.githubusercontent.com/jpb06/jpb06/master/icons/NodeJS-Dark.svg" /></a>&nbsp;<a href="https://bun.sh/docs" target="_blank"><img height="50" width="50" src="https://raw.githubusercontent.com/jpb06/jpb06/master/icons/Bun-Dark.svg" /></a>&nbsp;<a href="https://biomejs.dev/guides/getting-started/" target="_blank"><img height="50" width="50" src="https://raw.githubusercontent.com/jpb06/jpb06/master/icons/Biome-Dark.svg" /></a>&nbsp;<a href="https://nextjs.org/docs/getting-started" target="_blank"><img height="50" width="50" src="https://raw.githubusercontent.com/jpb06/jpb06/master/icons/NextJS-Dark.svg" /></a>&nbsp;<a href="https://reactjs.org/docs/getting-started.html" target="_blank"><img height="50" width="50" src="https://raw.githubusercontent.com/jpb06/jpb06/master/icons/React-Dark.svg" /></a>&nbsp;<a href="https://swc.rs/docs/getting-started" target="_blank"><img height="50" width="50" src="https://raw.githubusercontent.com/jpb06/jpb06/master/icons/Swc-Dark.svg" /></a>&nbsp;<a href="https://tailwindcss.com/docs/installation" target="_blank"><img height="50" width="50" src="https://raw.githubusercontent.com/jpb06/jpb06/master/icons/TailwindCSS-Dark.svg" /></a>&nbsp;<a href="https://testing-library.com/docs/" target="_blank"><img height="50" width="50" src="https://raw.githubusercontent.com/jpb06/jpb06/master/icons/TestingLibrary-Dark.svg" /></a>&nbsp;<a href="https://vitest.dev/guide/" target="_blank"><img height="50" width="50" src="https://raw.githubusercontent.com/jpb06/jpb06/master/icons/Vitest-Dark.svg" /></a></p>

<!-- readme-package-icons end -->

## ⚡ Components tree

![Diagram](./docs/components-tree.png)

We segregate here simple from complex components. We can adopt distinct testing strategies depending on the complexity of a component: unit tests for simple components and integration tests for complex ones.

## ⚡ Complexity

So what makes a component complex? In the end, this is all about how hard it is to understand. A few factors that may influence this:

### 🔶 Local state

Is the component owning local state? This is the most common to distinguish components: stateless vs stateful. Historically, stateful components were called containers and were class components while stateless ones could be FCs. Of course React 16 changed all this but a lot of projects still use this containers vs components approach.

Do note this includes owning state through its hooks.

### 🔶 Server / Global state

Is the component using external state?

- By server state we mean cache that is reflecting interaction with our backend(s), managed by dedicated libraries. Take a look at [react-query](https://react-query.tanstack.com) or [swr](https://swr.vercel.app).
- About global state, in most projects this will mean "Is it connected to a redux store?". On modern approaches this could mean stuff like "Is it using jotai atoms?". Redux is still widely used but I would not advise using it unless you **really** don't have another choice. More details [here](https://github.com/jpb06/workshop-react-front/blob/master/docs/bp-frontend-guidelines.md#-lets-avoid-redux-if-we-can).

### 🔶 Rendering complexity

- Is there a convoluted rendering workflow? Conditional rendering?
- Is there side effects?
- Is the component containing complex logic?

### 🔶 Testability

Simply put, how easy is the component to test?

## ⚡ Guidelines

### 🔶 Use FCs and hooks

No brainer here. Class components are done for!

### 🔶 KISS : Keep It Simple, Stupid

Between two solution, the simplest one will always be better. Complexity means higher maintainability costs. Please. Do not overengineer stuffs 🥲.

A source of complexity often comes from the tools we choose to answer a problem. For example, using redux middlewares like thunk/saga to deal with server state. There is better choices like swr or react-query for this!

### 🔶 DRY : Don't Repeat Yourself

We hear that one every day as developers. Generally a good advice; use it rationally though. Functionnally divergent code is not a good candidate for factorization.

### 🔶 YAGNI : You Ain't Gonna Need It

Again. Do not overengineer stuffs 🥲. Add only to the codebase what is strictly necessary to answer your need. The more code you add, the more code you will have to maintain.

### 🔶 SSOT : Single Source Of Truth

Parts of the codebase can benefit from being centralized. Relates to DRY.

### 🔶 Do one thing, do it well (Single Responsibility Principle)

Components / hooks / modules should have as few responsibilities as possible. Less responsibilities means less complexity and easier testing. Easier understanding for our next readers as well.

### 🔶 Make it fit to the screen

By limiting the number of lines each unit of code can have, we mechanically enforce SRP. We make sure each unit is easy to understand.

### 🔶 Maximize signal to noise ratio / convey intent

Our goal is to maximize signal to noise radio to help our future readers understand and maintain easily our codebase. Every single line of code should be necessary and be clear about what it does. The original intent of the author should be clear.

### 🔶 Naming is key

Spliting the code into small units means we get great opportunities to convey intent to our future readers, by naming units of code with labels informing us about their purpose : what they do / are.

### 🔶 Limit indentation

Two levels of indentation max (That's an if statement inside another if for example). One level max in react components.

Indentation means higher cyclomatic complexity, which means higher complexity. We want to keep things simple.

A few tricks can help us here:

- Extract code. Limiting indentation gives us an opportunity to label things by extracting them.
- Return early: if execution path can no longer continue (conditions unmet), simply return right away.
- Fail fast and loud: if an error occurs, terminate immediately.

### 🔶 The rule of seven / Functions: O2

When we read code, our brain is the compiler. We have limited capabilities. For example, we cannot juggle with seven values at the same time (try it yourself). That is why we should limit the number of floating variables in a hook or a module. Functions parameters should be limited as well: one or two is ideal. It will limit the risk to give too many responsibilities to an unit of code.

### 🔶 Avoid complex conditionals

More than two combined conditions in a if makes it very hard to evaluate the end result. If you have to combine conditions, extract them in variables. It will also help you conveying intent.

### 🔶 Avoid magic numbers

Adding a literal value does not inform the reader about the intent behind this decision. Creating a named constant gives you, again, an opportunity to convey intent.
