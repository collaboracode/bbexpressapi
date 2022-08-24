# Todos

## do this
- authorization roles

## and then
- authentication

## and then
- add more and then

<br>
<br>
<br>
<br>

# Getting started

## install depencies

```
$ npm install
```

## env
create file named .env in the projects root directory,
and set DB_CONNECTION to your Atlas connection string for guests,
DB_CONNECTION_USERS to your Atlas connection string for users


example
```
DB_CONNECTION=mongodb+srv://<username>:<password>@clustername.mongodb.net/guestsCollection?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true
DB_CONNECTION_USERS=mongodb+srv://<username>:<password>@clustername.mongodb.net/userCollection?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true
```

---

## run server with 
```
$ npm start
```

## or

```
$ npm run dev
```
to use nodemon