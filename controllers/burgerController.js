const router = require("express").Router();
const burger = require("../models/burger");

router.get("/", function(req, res){
    burger.all(function(results){
        res.render("index", {burgers: results} )
    })
});


router.post("/api/burgers", function(req, res){
    burger.create(req.body.burger_name, function(results){
        console.log(results);
        res.redirect("/")
    })
})

router.put("/api/burgers/:id", function(req, res){
    burger.update(req.params.id, function(results){
        console.log(results);
        res.sendStatus(200)
    })
})

module.exports = router;