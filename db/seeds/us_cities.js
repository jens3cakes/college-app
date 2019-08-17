const cities = require("../../4569a826e50c066d72f578600a98ef76")

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('us_citites.js').del()
    .then(function () {
      // Inserts seed entries
      return knex('us_cities.js').insert(
      {"id": cities.id,
       "CITY": cities.city,
       "STATE_ID": cities.state}
      );
          
    })
};
