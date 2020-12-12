const router = require("express").Router();

var db = require("../../models");

// GET route for getting all bills
router.route("/")
    .get(function (req, res) {
        console.log("cookie: " + req.cookies.googleId);
        db.Bill.find({})
            .then(function (dbBill) {
                res.json(dbBill);
            })
            .catch(err => res.status(422).json(err));
    })
    .post(function (req, res) {
        db.Bill.create(req.body)
            .then(function (dbBill) {
                res.json(dbBill)
            })
            .catch(err => res.status(422).json(err));
    });

// will grab one bill by id and update based on user input
router.route("/:id")
    .put(function (req, res) {
        db.Bill.findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(function (dbBill) {
                res.json(dbBill)
            })
            .catch(err => res.status(422).json(err));
    })
    // will delete a selected bill by id
    .delete(function (req, res) {
        db.Bill.findById({ _id: req.params.id })
            .then(function (dbBill) {
                dbBill.remove()
            })
            .then(function (dbBill) {
                res.json(dbBill)
            })
            .catch(err => res.status(422).json(err));
    });

module.exports = router;