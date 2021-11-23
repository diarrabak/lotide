# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @diarrabak/lotide`

**Require it:**

`const _ = require('@diarrabak/lotide');`

**Call it:**

`const results = _.head([1, 2, 3]) // => 1`

## Documentation

The following functions are currently implemented:

- `head`: returns the first element of an array
- `middle`: returns the two middle element of even numbered arrays and the signle middle element of odd numbered arrays
- `eqArrays`: compares two arrays 
- `eqObjects`:compares two objects
- `countOnly`: count the occurrence of an element in an array
- `map`: apply a custom callback function to an array
- `takeUntil`: copy all the array element until a stop condition
- `without`: removes specified elements from an array
- `findKey`: returns a key of element satisfying a callback function conditions
- `findKeyByValue`: returns the key of a given value from an object
- `assertEqual`: compare two values
- `assertArraysEqual`: assertions for arrays comparison

