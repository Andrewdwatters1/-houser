module.exports = {
  getAllHouses: (req, res, next) => {
    let db = req.app.get('db');
    db.get_all_houses()
      .then((houses) => {
        res.status(200).send(houses)
      })
      .catch((error) => {
        res.status(500).send('Oops, there was an error');
        console.log(error);
      })
  },
  addHouse: (req, res, next) => {
    let db = req.app.get('db');
    let { name, address, city, state, zip } = req.body.houseToAdd;
    db.add_house([name, address, city, state, zip])
      .then((houses) => {
        res.status(200).send(houses)
      })
      .catch((error) => {
        res.status(500).send('Oops, there was an error');
        console.log(error);
      })
  },
  deleteHouse: (req, res, next) => {
    let db = req.app.get('db');
    let { id } = req.params;
    db.delete_house(id)
      .then((result) => {
        res.status(200).send(result)
      })
      .catch((error) => {
        res.status(500).send('Oops, there was an error');
        console.log(error);
      })
  },
}