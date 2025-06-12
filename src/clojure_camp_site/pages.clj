(ns clojure-camp-site.pages
  (:require
   [clojure-camp-site.pages.index]
   [clojure-camp-site.pages.sponsorship]))

(def pages
  {"/" clojure-camp-site.pages.index/body
   "/sponsorship" clojure-camp-site.pages.sponsorship/body})