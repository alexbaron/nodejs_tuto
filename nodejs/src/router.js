var express = require("express");
const twig = require("twig");
var router = express.Router();
twig.cache(false);
const livreModel = require("./models/livres.model");

//routing
router.get("/", (req, res) => {
  //   res.send("Hello World 2 " + req.path);
  //   console.log(req.query);
  //   console.log("call from client");
  res.render("accueil.html.twig");
});

router.get("/livres", (req, res) => {
  livreModel
    .find()
    .exec()
    .then((livres) => {
      res.render("livres/liste.html.twig", { livres: livres });
    })
    .catch((exec) => {
      console.log(exec);
    });
});

router.get("/livres/:id", (req, res) => {
  livreModel
    .findById(req.params.id)
    .exec()
    .then((livre) => {
      res.render("livres/livre.html.twig", { livre: livre });
    })
    .catch((exec) => {
      console.log(exec);
    });
});

router.use((req, res, suite) => {
  const error = new Error("404 page not found");
  error.status = 404;
  suite(error);
});

router.use((error, req, res) => {
  res.status(error.status || 500);
  res.end(error.message);
});

module.exports = router;
