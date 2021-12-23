
exports.up = function(knex) {
  return knex.schema.createTable("workouts",(table)=>{
      table.increments("id").primary()
      table.date("date")
      table.string("type")
      table.integer("duration")
      table.string("goal")
      table.integer("pre")
      table.integer("post")
      table.integer("intensity")
      table.text("performance")
      table.text("pain")
      table.text("body_parts")
      table.string("sport")
      table.string("venue")
      table.boolean("competitive")
      table.integer("distance")
      table.string("cardio_type")
      table.string("speed")
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("workouts")
};
