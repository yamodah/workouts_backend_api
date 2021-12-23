const router = require("express").Router()
const controller = require("./workouts.controller")
const methodNotAllowed = require("../errors/methodNotAllowed")

router.route("/")
.get(controller.list)
.post(controller.create)
.all(methodNotAllowed);

router.route("/workout/:workoutId")
.get(controller.read)
.put(controller.update)
.delete(controller.delete)
.all(methodNotAllowed);

router.route("/date/:workoutDate")
.get(controller.dateMatch)
.all(methodNotAllowed)


router.route("/type/:workoutType")
.get(controller.typeMatch)
.all(methodNotAllowed)

module.exports = router 