# Clojure Camp Website

A public facing website for Clojure Camp.

## Setup

### Prerequisites

- [babashka](https://github.com/babashka/babashka) - To run this clojure project we recommend installing [babashka](https://github.com/babashka/babashka) on your computer. This will allow the running of the `bb` commands.

### Local development

1. Make changes to a page clj file located in `src/clojure_camp_site/pages/` then run the command below.

```
bb serve
```

or

```
bb watch
```

2. This will rebuild the website and run a local web server on:

- http://localhost:7777/

### Routes

You can find the page route mapping located in `src/clojure_camp_site/pages.clj`

### Update Sponsorship Content

The sponsorship content is generated from a markdown file located at `resources/clojure_camp_site/sponsorship.md`.
