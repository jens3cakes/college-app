
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table){
    table.increments('id').notNullable()
    table.string('first_name', 20).notNullable()
    table.string('last_name', 25).notNullable()
    table.string('email',50).unique().notNullable()
    table.string('road_address', 50)
    table.integer('city_id').references('id').inTable('us_cities')
    table.integer('state_id').references('id').inTable('us_states')
    table.integer('major_id').references('id').inTable('majors')
    table.integer('college_sector_statuses_id').references('id').inTable('sector_statuses')
    table.integer('campus_life_id').references('id').inTable('campus_life')
    table.integer('cost_id').references('id').inTable('costs')
    table.integer('housing_id').references('id').inTable('housing')
    table.integer('age')
    table.timestamp('created_at')
    table.timestamp('updated_at')

  })
};

exports.down = function(knex) {
    return schema.knex.dropTable('USERS')
};
