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
and set DB_CONNECTION to your Atlas connection string for collection

and set ORIGIN to app URL

example
```
DB_CONNECTION=mongodb+srv://<username>:<password>@clustername.mongodb.net/CollectionName?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true
ORIGIN=http://localhost:3001
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