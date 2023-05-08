npm init -y
create - docker-compose.yaml or .yml --- See instructions in the file
docker-compose up -d -- CLI to get your docker-compose file up and detached
docker exec -it api_slido bash --- CLI used to access our service terminal (in this case api_slido)
npm i express --- to install express
npm i mysql2 --- to install mysql2 (both can be installed same time, since they aren't dev dependecies)
npm i -D nodemon --- to install nodemon (in this case, nodemon is a dev depend)
create .gitignore file with node_modules inside
npm i --save-exact --save-dev eslint@6.8.0 eslint-config-trybe-backend@1.0.1 --- CLI to install eslint using trybe's lint
create file .eslintrc.json --- file with all lint configs
create dir SRC --- to keep all code
create 3 dir inside SRC: models, controllers, services --- each one will have their own responsabilities
create the scripts in the package.json file --- "start" to start node on your file server.js // "dev" to run the nodemon // "lint" to run lint // "test already created, we gonna change it to run our tests

inside dir models needs to create a file to connect with the DB
we have all db info inside slido_db.db file to create the file at workbench

first we created a file inside models with SQL command to deal with the DB; export it
then we use this model file in the service file created inside dir services; export it
then use this new file inside controller file inside dir controlle, to respond user using res or req;