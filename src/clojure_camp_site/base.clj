(ns clojure-camp-site.base
  (:require
   [huff2.core :as h]))

(defn build [page-fn]
  (str
   (h/html
    (h/raw-string "<!DOCTYPE html>")
    [:html
     [:head
      [:meta {:charset "UTF-8"}]
      [:title "Clojure Camp"]

      [:meta {:property "og:title" :content "Clojure Camp"}]
      [:meta {:name "twitter:card" :content "summary_large_image"}]
      [:meta {:property "og:url" :content "https://clojure.camp/"}]
      [:link {:rel "canonical" :href "https://clojure.camp/"}]

      [:link {:rel "icon" :href "/assets/logomark.svg"}]
      [:link {:rel "stylesheet" :href "/assets/css/markdown.css"}]
      [:script {:src "https://cdn.tailwindcss.com"}]
      [:meta {:name "viewport" :content "width=device-width, initial-scale=1.0"}]]
     [:body
      (page-fn)]])))
