(ns clojure-camp-site.base
  (:require
   [hiccup2.core :as h]))

(defn build [page-fn]
  (str
   (h/html
    (h/raw "<!DOCTYPE html>")
    [:html
     [:head
      [:meta
       [:title "Clojure Camp"]]
      [:script {:src "https://cdn.tailwindcss.com"}]
      [:meta {:charset "UTF-8"}]
      [:title "Clojure Camp"]
      [:meta {:data-rh "true", :property "og:title", :content "Clojure Camp"}]
      [:meta
       {:data-rh "true",
        :name "twitter:card",
        :content "summary_large_image"}]
      [:meta
       {:data-rh "true",
        :property "og:url",
        :content "https://clojure.camp/"}]
      [:meta {:data-rh "true", :name "docusaurus_locale", :content "en"}]
      [:meta {:data-rh "true", :name "docusaurus_tag", :content "default"}]
      [:meta {:data-rh "true", :name "docsearch:language", :content "en"}]
      [:meta
       {:data-rh "true",
        :name "docsearch:docusaurus_tag",
        :content "default"}]
      [:link {:data-rh "true", :rel "icon", :href "/assets/favicon.ico"}]
      [:link
       {:data-rh "true", :rel "canonical", :href "https://clojure.camp/"}]
      [:link
       {:data-rh "true",
        :rel "alternate",
        :href "https://clojure.camp/",
        :hreflang "en"}]
      [:link
       {:data-rh "true",
        :rel "alternate",
        :href "https://clojure.camp/",
        :hreflang "x-default"}]
      [:link {:rel "stylesheet", :href "/assets/css/markdown.css"}]
      [:meta
       {:name "viewport",
        :content "width=device-width, initial-scale=1.0",
        :data-rh "true"}]]
     [:body
      (page-fn)]])))
