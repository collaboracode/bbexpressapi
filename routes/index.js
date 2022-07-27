const { application } = require('express');
var express = require('express');
var router = express();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});


router.use('/test', () => {
  console.log("This is a middleware running")
  return
})


// routes
router.get('/guests', (req, res) => {
  res.json([{ "id": 1, "first_name": "Paloma", "last_name": "Aguilar", "bio": "", "birthday": null, "image_url": "https://i0.wp.com/www.monstersandcritics.com/wp-content/uploads/2022/07/Paloma-On-BB24.jpg?resize=773.5%2C435\u0026ssl=1", "active": true, "created_at": "2022-07-19T22:52:20.194Z", "updated_at": "2022-07-19T22:52:20.194Z" }, { "id": 2, "first_name": "Michael", "last_name": "Bruner", "bio": "", "birthday": null, "image_url": "https://i0.wp.com/www.monstersandcritics.com/wp-content/uploads/2022/07/Michael-On-BB24.jpg?resize=773.5%2C435\u0026ssl=1", "active": true, "created_at": "2022-07-19T22:52:20.201Z", "updated_at": "2022-07-19T22:52:20.201Z" }, { "id": 3, "first_name": "Joseph", "last_name": "Abdin", "bio": "", "birthday": null, "image_url": "https://www.readersfusion.com/wp-content/uploads/2022/07/Joseph-Abdin-BB24-contestant-1024x537.jpg", "active": true, "created_at": "2022-07-19T22:52:20.205Z", "updated_at": "2022-07-19T22:52:20.205Z" }, { "id": 4, "first_name": "Alyssa", "last_name": "Snider", "bio": "", "birthday": null, "image_url": "https://www.usmagazine.com/wp-content/uploads/2022/07/Big-Brother-24-Cast-Revealed-Meet-16-New-Houseguests-0015.jpg?quality=86\u0026strip=all", "active": true, "created_at": "2022-07-19T22:52:20.208Z", "updated_at": "2022-07-19T22:52:20.208Z" }])
});
router.get('/guests/1', (req, res) => {
  res.json({ "id": 1, "first_name": "Paloma", "last_name": "Aguilar", "bio": "", "birthday": null, "image_url": "https://i0.wp.com/www.monstersandcritics.com/wp-content/uploads/2022/07/Paloma-On-BB24.jpg?resize=773.5%2C435\u0026ssl=1", "active": true, "created_at": "2022-07-19T22:52:20.194Z", "updated_at": "2022-07-19T22:52:20.194Z" })
});
router.get('/guests/2', (req, res) => {
  res.json({ "id": 2, "first_name": "Michael", "last_name": "Bruner", "bio": "", "birthday": null, "image_url": "https://i0.wp.com/www.monstersandcritics.com/wp-content/uploads/2022/07/Michael-On-BB24.jpg?resize=773.5%2C435\u0026ssl=1", "active": true, "created_at": "2022-07-19T22:52:20.201Z", "updated_at": "2022-07-19T22:52:20.201Z" })
});
router.get('/guests/3', (req, res) => {
  res.json({"id":3,"first_name":"Joseph","last_name":"Abdin","bio":"","birthday":null,"image_url":"https://www.readersfusion.com/wp-content/uploads/2022/07/Joseph-Abdin-BB24-contestant-1024x537.jpg","active":true,"created_at":"2022-07-19T22:52:20.205Z","updated_at":"2022-07-19T22:52:20.205Z"})
});
router.get('/guests/4', (req, res) => {
  res.json({ "id": 4, "first_name": "Alyssa", "last_name": "Snider", "bio": "", "birthday": null, "image_url": "https://www.usmagazine.com/wp-content/uploads/2022/07/Big-Brother-24-Cast-Revealed-Meet-16-New-Houseguests-0015.jpg?quality=86\u0026strip=all", "active": true, "created_at": "2022-07-19T22:52:20.208Z", "updated_at": "2022-07-19T22:52:20.208Z" })
});

router.get('/test', (req, res) => {
  res.send("we are on test")
});

module.exports = router;
