module.exports = {
  getAllHouses: (req, res, next) => {
    let db = req.app.get('db');
    db.get_all_houses()
    .then((houses) => {
      res.status(200).send(houses)
    })
    .catch((error) => {
      console.log('error in controller getAllHouses', error)
    })
  },
  addHouse: (req, res, next) => {
    let db = req.app.get('db');
    let {name, address, city, state, zip} = req.body.houseToAdd;
    db.add_house([name, address, city, state, zip])
    .then((houses) => {
      res.status(200).send(houses)
    })
    .catch((error) => {
      console.log('error in controller.addHouse', error)
    })
  },
  deleteHouse: (req, res, next) => {
    let db = req.app.get('db');
    let {id} = req.params;
    db.delete_house(id)
    .then((result) => {
      res.status(200).send(result)
    })
    .catch((error) => {
      console.log('error in controller.deleteHouse', error)
    })
  },
}