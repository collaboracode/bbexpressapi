const express = require('express')
const router = express.Router()
const Guest = require('../models/Guest')


// todo add validations for all but get requests to make sure that the user is an admin,
// ! first need to add users though...


// ? should we make a serializer for this? 
//GETS ALL GUESTS
router.get('/', async (req, res) => {
  try {
    const guests = await Guest.find()
    res.json(guests)
  } catch (err) {
    res.json({ message: err })
  }
})

//GET ONE GUEST
router.get('/:guestId', async (req, res) => {
  try {
    const guest = await Guest.findById(req.params.guestId)
    res.json(guest)
  } catch (err) {
    res.json({ message: err })
  }
})

//SUBMITS A GUEST
router.post('/', (req, res) => {
  const post = new Guest({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    bio: req.body.bio,
    birthday: req.body.birthday,
    image_url: req.body.image_url,
    active: req.body.active,
  })
  post.save()
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      res.json({ message: err })
    })
})

//UPDATES ONE GUEST
router.patch('/:guestId', async (req, res) => {
  try {
    const updateGuest = await Guest.updateOne({ _id: req.params.guestId }, {$set: {...req.body}})
    res.json(updateGuest)
  } catch (err) {
    res.json({ message: err })
  }
})

//DELETES ONE GUEST
router.delete('/:guestId', async (req, res) => {
  try {
    const removeGuest = await Guest.remove({ _id: req.params.guestId })
    res.json(removeGuest)
  } catch (err) {
    res.json({ message: err })
  }
})



// old
// router.get('/', (req, res) => {
// res.json([
//   {
//     "id": 1,
//     "first_name": "Paloma",
//     "last_name": "Aguilar",
//     "bio": "",
//     "birthday": null,
//     "image_url": "https://i0.wp.com/www.monstersandcritics.com/wp-content/uploads/2022/07/Paloma-On-BB24.jpg?resize=773.5%2C435\u0026ssl=1",
//     "active": true,
//     "created_at": "2022-07-19T22:52:20.194Z",
//     "updated_at": "2022-07-19T22:52:20.194Z"
//   },
//   {
//     "id": 2,
//     "first_name": "Michael",
//     "last_name": "Bruner",
//     "bio": "",
//     "birthday": null,
//     "image_url": "https://i0.wp.com/www.monstersandcritics.com/wp-content/uploads/2022/07/Michael-On-BB24.jpg?resize=773.5%2C435\u0026ssl=1",
//     "active": true,
//     "created_at": "2022-07-19T22:52:20.201Z",
//     "updated_at": "2022-07-19T22:52:20.201Z"
//   },
// {
//   "id": 3,
//   "first_name": "Joseph",
//   "last_name": "Abdin",
//   "bio": "",
//   "birthday": null,
//   "image_url": "https://www.readersfusion.com/wp-content/uploads/2022/07/Joseph-Abdin-BB24-contestant-1024x537.jpg",
//   "active": true,
//   "created_at": "2022-07-19T22:52:20.205Z",
//   "updated_at": "2022-07-19T22:52:20.205Z"
// },
//   {
//     "id": 4,
// "first_name": "Alyssa",
// "last_name": "Snider",
// "bio": "",
// "birthday": null,
// "image_url": "https://www.usmagazine.com/wp-content/uploads/2022/07/Big-Brother-24-Cast-Revealed-Meet-16-New-Houseguests-0015.jpg?quality=86\u0026strip=all",
// "active": true,
//     "created_at": "2022-07-19T22:52:20.208Z",
//     "updated_at": "2022-07-19T22:52:20.208Z"
//   }
// ]);
// router.get('/1', (req, res) => {
//   res.json({
//     "id": 1,
//     "first_name": "Paloma",
//     "last_name": "Aguilar",
//     "bio": "",
//     "birthday": null,
//     "image_url": "https://i0.wp.com/www.monstersandcritics.com/wp-content/uploads/2022/07/Paloma-On-BB24.jpg?resize=773.5%2C435\u0026ssl=1",
//     "active": true,
//     "created_at": "2022-07-19T22:52:20.194Z",
//     "updated_at": "2022-07-19T22:52:20.194Z"
//   })
// });
// router.get('/2', (req, res) => {
//   res.json({
//     "id": 2,
//     "first_name": "Michael",
//     "last_name": "Bruner",
//     "bio": "",
//     "birthday": null,
//     "image_url": "https://i0.wp.com/www.monstersandcritics.com/wp-content/uploads/2022/07/Michael-On-BB24.jpg?resize=773.5%2C435\u0026ssl=1",
//     "active": true,
//     "created_at": "2022-07-19T22:52:20.201Z",
//     "updated_at": "2022-07-19T22:52:20.201Z"
//   })
// });
// router.get('/3', (req, res) => {
//   res.json({
//     "id": 3,
//     "first_name": "Joseph",
//     "last_name": "Abdin",
//     "bio": "",
//     "birthday": null,
//     "image_url": "https://www.readersfusion.com/wp-content/uploads/2022/07/Joseph-Abdin-BB24-contestant-1024x537.jpg",
//     "active": true,
//     "created_at": "2022-07-19T22:52:20.205Z",
//     "updated_at": "2022-07-19T22:52:20.205Z"
//   })
// });
// router.get('/4', (req, res) => {
//   res.json({
//     "id": 4,
//     "first_name": "Alyssa",
//     "last_name": "Snider",
//     "bio": "",
//     "birthday": null,
//     "image_url": "https://www.usmagazine.com/wp-content/uploads/2022/07/Big-Brother-24-Cast-Revealed-Meet-16-New-Houseguests-0015.jpg?quality=86\u0026strip=all",
//     "active": true,
//     "created_at": "2022-07-19T22:52:20.208Z",
//     "updated_at": "2022-07-19T22:52:20.208Z"
//   })
// });




module.exports = router