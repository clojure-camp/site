(ns index)

(require '[hiccup2.core :as h])
(require '[babashka.http-server :as http])

(def content (str (h/html
                   (h/raw "<!DOCTYPE html>")
                   [:html {:class "foo"}
                    [:head
                     [:meta
                      [:title "Clojure Camp"]]
                     [:script {:src "https://cdn.tailwindcss.com"}]]
                    [:body {:class "m-8"}
                     [:h1 {:class "my-8 text-4xl"} "Clojure Camp"]
                     [:a {:class "my-4 p-4 border-2 block-inline" :href "http://handbook.clojure.camp" :target "_blank"} "Read the Handbook"]]])))

(spit "public/index.html" content)

(http/serve {:port 7777 :dir "public"})
@(promise)
