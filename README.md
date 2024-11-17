# Clojure Camp Website

This repo is for the public facing website of Clojure Camp.

## Setup

### Prerequisites

- [babashka](https://github.com/babashka/babashka) - To run this clojure project we recommend installing [babashka](https://github.com/babashka/babashka). This will allow the running of the `bb` command.

### Generating and running the page

Make changes in src/index.clj then run the command below. This will rebuild the website and run a local web server on port `7777`.

```
bb src/index.clj
```
