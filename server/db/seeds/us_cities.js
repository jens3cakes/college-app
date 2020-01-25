const cities = require("../../4569a826e50c066d72f578600a98ef76")

exports.seed = function(knex) {
  // Deletes ALL existing entries
  function get_state(cities){
    var i;
    for(i=0;i<cities;i++){
      cities[i].state
    }
  }
  return knex('us_cities').del()
    .then(function () {
      // Inserts seed entries
      return knex('us_cities').insert(
      {"id": cities.id,
       "city": cities.city,
       "state_name": get_state(cities)  }
      );
          
    })
};
