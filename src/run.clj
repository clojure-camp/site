(ns run)

(require '[root]
         '[babashka.http-server :as http])

(defn build [content] (spit "static/index.html" content))

(defn serve [] ((build root/html)
                (http/serve {:port 7777 :dir "static"})
                @(promise)))
