module.exports = {
  getAllHouses: (req, res, next) => {
    let db = req.app.get('db');
    db.get_all_houses()
    .then((houses) => {
      res.status(200).send(houses)
    })
    .catch((error) => {
      console.log('11111', error)
    })
  },
}