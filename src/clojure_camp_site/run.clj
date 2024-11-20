(ns clojure-camp-site.run
  (:require
   [babashka.http-server :as http]
   [clojure-camp-site.root]))

(defn build! []
  (spit "static/index.html" (clojure-camp-site.root/html)))

(defn serve []
  (build!)
  (http/serve {:port 7777 :dir "static"})
  @(promise))