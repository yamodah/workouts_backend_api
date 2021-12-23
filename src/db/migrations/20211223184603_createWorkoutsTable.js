
exports.up = function(knex) {
  return knex.schema.createTable("workouts",(table)=>{

  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("workouts")
};
