(ns clojure-camp-site.serve
  (:require
   [clojure-camp-site.build :as build]))

(require '[babashka.deps :as deps])

(deps/add-deps
 '{:deps {org.babashka/http-server {:mvn/version "0.1.13"}}})

(require '[babashka.http-server :as http])

(defn serve! []
  (build/build!)
  (http/serve {:port 7777 :dir "static"})
  @(promise))
