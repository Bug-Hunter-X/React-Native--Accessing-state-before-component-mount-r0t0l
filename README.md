# React Native: Accessing State Before Component Mount

This repository demonstrates a common error in React Native applications: attempting to access component state or props before the component has fully mounted. This often happens when using asynchronous operations to fetch data within the component's lifecycle methods.

## Problem

The provided `bug.js` file contains a component that fetches data asynchronously using `useEffect`. However, it tries to render the fetched data (`data.name`) before the `setData` function has a chance to update state. This causes the app to crash with an error, because `data` is initially `null`.

## Solution

The `bugSolution.js` file demonstrates how to fix the issue by using conditional rendering to check if `data` is loaded before trying to access it.

## How to run

1. Clone this repository
2. `cd` into the directory
3. `npm install`
4. `npx react-native run-android` or `npx react-native run-ios`