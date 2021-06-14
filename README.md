# mongoreact
This is a simple React JS application. I just used a couple of techs here like spring boot, mongoDb,React JS and Swagger 2.

** I used a mongoDB  with docker container. Check it out application.properties and docker.compose-yaml files. When your containers running, run your application and then go to
localhost:8081 for mongo express.It allows you to GUI  and you can check your data , write your query ...

**Other  one is Swagger 2. Swagger 2 allows to you write your api documentation and moreover you can test your api within that. You need to do a couple of things to enable Swagger

-Check it out 2 dependencies in pom.xml
-Add @EnableSwagger2 to MainApplication

When you run your application , you will see that in log "Found 1 custom documentation plugin(s)". This is Swagger2.
After that  check it : http://localhost:8080/swagger-ui.html
