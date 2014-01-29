module App.Connect where

import Happstack.Server
import Database.MySQL.Simple

dbConfig = defaultConnectInfo {
                connectHost = "localhost",
                connectDatabase = "blog",
                connectUser = "blog",
                connectPassword = "blog"
           }

dbConnect = connect dbConfig

dbClose c = close c

postBodyPolicy = defaultBodyPolicy "/tmp/" 0 10000 1000
