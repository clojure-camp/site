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
      [:script {:src "https://cdn.tailwindcss.com"}]]
     [:body
      (clojure-camp-site.content/content)]])))