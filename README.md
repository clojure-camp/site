# Clojure Camp Website

This repo is for the public facing website of Clojure Camp.

## Setup

### Prerequisites

- [babashka](https://github.com/babashka/babashka) - To run this clojure project we recommend installing [babashka](https://github.com/babashka/babashka). This will allow the running of the `bb` command.

### Generating and serving the website

1. Make changes in src/index.clj then run the command below.

```
bb src/index.clj
```

2. This will rebuild the website and run a local web server on:

- http://localhost:7777/
