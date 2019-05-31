module.exports = {
  getAll: (req, res) => {
    const db = req.app.get("db");

    db
      .read_products()
      .then(products => res.status(200).send(products))
      .catch(err => {
        res
          .status(500)
          .send({ errorMessage: "The iguana laid eggs in our database!" });
        console.log(err);
      });
  },
  create: (req, res) => {
    const db = req.app.get("db");
    const { image_url, product_name, price } = req.body;

    db
      .create_product(image_url, product_name, price)
      .then(() => res.sendStatus(200))
      .catch(err => {
        res
          .status(500)
          .send({ errorMessage: "The squirrel got into the server again!" });
        console.log(err);
      });
  },
  getOne: (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;
    db.read_product(id)
      .then(product => res.status(200).send(product))
      .catch(err => {
        res
          .status(500)
          .send({ errorMessage: "The hamster made a nest in our database!" });
        console.log(err);
      });
  },
  update: (req, res, next) => {
    const db = req.app.get("db");
    const { params, query } = req;

    db.update_product(params.id, query.desc)
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send({
          errorMessage: "Someone let Cleetus into the server room again."
        });
        console.log(err);
      });
  },
  delete: (req, res, next) => {
    const db = req.app.get("db");
    const { id } = req.params;
    db.delete_product(id)
      .then(() => res.sendStatus(200))
      .catch(err => {
        res
          .status(500)
          .send({ errorMessage: "Thanos snapped half our database." });
        console.log(err);
      });
  }
};
