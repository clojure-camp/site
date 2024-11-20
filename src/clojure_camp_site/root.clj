(ns clojure-camp-site.root
  (:require
   [hiccup2.core :as h]
   [clojure-camp-site.content]))

(defn html []
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
      [:link {:data-rh "true", :rel "icon", :href "/img/favicon.ico"}]
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
      [:link
       {:rel "alternate",
        :type "application/rss+xml",
        :href "/blog/rss.xml",
        :title "Clojure Camp RSS Feed"}]
      [:link
       {:rel "alternate",
        :type "application/atom+xml",
        :href "/blog/atom.xml",
        :title "Clojure Camp Atom Feed"}]
      [:link {:rel "stylesheet", :href "/assets/css/styles.e080ba4c.css"}]
      [:link
       {:rel "preload",
        :href "/assets/js/runtime~main.baf95306.js",
        :as "script"}]
      [:link
       {:rel "preload", :href "/assets/js/main.f656a803.js", :as "script"}]
      [:meta
       {:name "viewport",
        :content "width=device-width, initial-scale=1.0",
        :data-rh "true"}]]
     [:body
      (clojure-camp-site.content/content)]])))