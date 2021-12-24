const service = require("./workouts.service")
const asyncErrorBoundary = require("../errors/asyncErrorBoundary")

//ID VALIDATION
async function workoutExists(req, res, next) {
    const { workoutId } = req.params;
    // console.log(typeof workoutId)
    const foundWorkout = await service.read(workoutId);
    // console.log(foundWorkout)
    if (foundWorkout) {
      res.locals.workout = foundWorkout;
      return next();
    }
    next({
      status: 404,
      message: "Workout could not be found",
    });
  }

//CRUD FUNCTIONS 
async function list (req,res,next){
    const data = await service.list()
    res.json({data})
}
function read(req, res, next){
    res.json({data:res.locals.workout})
}
async function dateMatch(req, res, next){
    const {workoutDate} = req.params
    // console.log(workoutDate)
    const data = await service.dateMatch(workoutDate)
    res.json({data})
}
async function typeMatch(req, res, next){
    const {workoutType} = req.params
    const data = await service.typeMatch(workoutType)
    res.json({data})
}
async function create(req, res, next){
    const data = await service.create(req.body)
    res.status(201).json({data})
}
async function update(req, res, next){
    const updatedWorkout = {
        ...req.body,
        id:res.locals.workout.id
    }
    const data = await service.update(updatedWorkout)
    res.json({data})
}
async function destroy(req, res, next){
    await service.destroy(res.locals.workout.id)
    res.sendStatus(204)
}

module.exports = {
    list,
    read:[asyncErrorBoundary(workoutExists), read],
    typeMatch:[asyncErrorBoundary(typeMatch)],
    dateMatch:[asyncErrorBoundary(dateMatch)],
    create:[asyncErrorBoundary(create)],
    update:[asyncErrorBoundary(workoutExists),asyncErrorBoundary(update)],
    delete:[asyncErrorBoundary(workoutExists),asyncErrorBoundary(destroy)]
}