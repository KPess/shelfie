module.exports = {
    getAll: (req, res, next) => {
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





}