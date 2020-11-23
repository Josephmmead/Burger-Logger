const router = require("express").Router();
const burger = require("../models/burger");

router.get("/", function(req, res){
    burger.all(function(results){
        res.render("index", {burgers: results} )
    })
});


router.post("/burgers/create", function(req, res){
    burger.create(req.body.burger_name, function(results){
        console.log(results);
        res.redirect("/")
    })
})

router.put("/burgers/:id", function(req, res){
//     burger.update(req.params.id, function(results){
//         console.log(results);
//         res.sendStatus(200)
//     })
var condition = "id = " + req.params.id;

console.log("condition", condition);

burger.update(
  {
    devoured: req.body.devoured
  },
  condition,
  function(result) {
    if (result.changedRows === 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    }
    res.status(200).end();

  }
);
})

module.exports = router;