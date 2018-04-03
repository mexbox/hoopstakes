## Getting started

```bash
$ docker-compose build

$ docker-compose up
```

Once started, the web server is exposed via http://localhost:1337

The client app can be accessed in the browser from http://localhost:3000

Note: if you are using Mac OX and get an error on `port 3000 in use` (or any port number) try this first.

```bash
$ docker-compose down

# Restart Docker

lsof -i tcp:[PORT_NUMBER] # check if that still in use
```

### Migrations & Seeding DB

You can easily populate the DB with basic require data to run the app via CLI commands:

```bash
node node_modueles/.bin/sequelize db:migrate #runs all db migrations
node node_modueles/.bin/sequelize db:migrate:undo #reverts the last migration
node node_modueles/.bin/sequelize db:migrate:undo:all #reverts all migrations

node node_modueles/.bin/sequelize db:migrate:seed:all #seeds the db
```