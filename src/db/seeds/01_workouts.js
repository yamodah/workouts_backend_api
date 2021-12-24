
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('workouts').del()
    .then(function () {
      // Inserts seed entries
      return knex('workouts').insert([
        {
          type:"resistance",
          date:"2021-02-24",
          duration:90,
          goal:"general fitness, get back in the gym",
          pre:5,
          post:7,
          intensity:6,
          performance:"solid workout -- nothing special but got to the gym and moved some weight",
          pain:"no major pain -- some ankle soreness -- maybe a tweak in the left shoulder",
          body_parts:"full-body",
        },
        {
          type:"sports",
          date:"2021-03-19",
          duration:180,
          goal:"work up a sweat and get some good touches",
          pre:7,
          post:9,
          intensity:8,
          performance:"good touches overall good play",
          pain:"bottom of foot soreness, left ankle swollen, slight tightness in back",
          sport:"soccer",
          venue:"indoor",
          competitive:false,
        },
        {
          type:"cardio",
          date:"2021-07-22",
          duration:30,
          goal:"work up a sweat and get some good touches",
          pre:4,
          post:7,
          intensity:6,
          performance:"great to be back doing cardio -- need a few to get in rhythm",
          pain:"lung fatigue -- hamstring tightness -- left ankle clicking",
          distance:3,
          cardio_type:"bike",
          speed:"95 rpm",

        },
      ]);
    });
};
