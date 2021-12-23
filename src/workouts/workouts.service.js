const knex = require("../db/connection")

const list=()=>{
    return knex("workouts")
        .select("*")
        .orderBy("id")
}
const read=(id)=>{
    return knex("workouts")
        .select("*")
        .where({id})
        .first()
}
const dateMatch=(date)=>{
    return knex("workouts")
        .select("*")
        .where({date})
}
const typeMatch=(date)=>{
    return knex("workouts")
        .select("*")
        .where({date})
}
const update=(updatedworkout)=>{
    return knex("workouts")
        .select("*")
        .where({id:updatedworkout.id})
        .update(updatedworkout)
        .returning("*")
        .then((workout)=>workout[0])
}
const create=(newWorkout)=>{
    return knex("workouts")
        .insert(newWorkout)
        .returning("*")
        .then((workout)=>workout[0])
}
const destroy=(id)=>{
    return knex("workouts")
    .where({id})
    .del()
}
module.exports={
    list,
    read,
    update,
    create,
    destroy,
    dateMatch,
    typeMatch,
}