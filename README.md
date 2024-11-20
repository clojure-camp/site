# Clojure Camp Website

A public facing website for Clojure Camp.

## Setup

### Prerequisites

- [babashka](https://github.com/babashka/babashka) - To run this clojure project we recommend installing [babashka](https://github.com/babashka/babashka) on your computer. This will allow the running of the `bb` commands.

### Local development

1. Make changes in `src/clojure_camp_site/content.clj` then run the command below.

```
bb serve
```

2. This will rebuild the website and run a local web server on:

- http://localhost:7777/
