(ns clojure-camp-site.run)

(require '[babashka.http-server :as http]
         '[clojure-camp-site.root])

(defn build [content] (spit "static/index.html" content))

(defn serve [] (do (build clojure-camp-site.root/html)
                   (http/serve {:port 7777 :dir "static"})
                   @(promise)))
