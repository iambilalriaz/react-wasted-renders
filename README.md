# React Wasted Renders

## Pre-requisites:

- node _(follow [this link](https://nodejs.org/en/download/) to install)_
- yarn _(follow [this link](https://classic.yarnpkg.com/en/docs/install) to install)_
- Basic understanding of `React`

## What is a wasted render?

If we mutate state in a parent component, its child components rerender even if nothing change occurs in child components. This is the default behavior of React.
But this behaviour affects the performance of our react app.

## How can we identify wasted renders?

Install [React Devtools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) on your chrome browser and enable **highlight updates** option. It will highlight the rendered component. Now we can see the components’ rendering visually as:

![alt text for screen readers](/src/demo.png 'Re-rendered component is highlighted')

## How to avoid wasted renders?

There are three tips to avoid wasted renders:

### 1. React.memo

    React.memo is a higher order function. We should wrap our child component to avoid getting rendered again and again even with same props. React.memo will memoize the result.

### 2. useMemo

    This hook returns memoized value. We give it a function and an array of dependencies. useMemo will only execute the given function when one of dependencies changes.

### 3. useCallback

    This hook return memoized callback. We pass an inline callback function and an array of dependencies to it. useMemo will return return a memoized callback when one of given dependencies changes.

## Running the Project

To start project, run

```
./scripts/run.sh
```

The app will run at [localhost:3000](http://localhost:3000).
