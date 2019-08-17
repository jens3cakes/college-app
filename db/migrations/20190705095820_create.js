
exports.up = function(knex, Promise) {
  return knex.schema.createTable('USERS', function(table){
    table.increments('ID').notNullable()
    table.string('FIRST_NAME', 20).notNullable()
    table.string('LAST_NAME', 25).notNullable()
    table.string('EMAIL',50).unique().notNullable()
    table.string('ROAD_ADDRESS', 50)
    table.integer('CITY_ID').rferences('ID').inTable('US_CITIES')
    table.integer('STATE_ID').references('ID').inTable('US_STATES')
    table.integer('MAJOR_ID').references('ID').inTable('MAJORS')
    table.integer('COLLEGE_STATUS_SECTOR_ID').references('ID').inTable('SECTOR_STATUSES')
    table.integer('CAMPUS_LIFE_ID').references('ID').inTable('CAMPUS_LIFE')
    table.integer('COST_ID').references('ID').inTable('COST_RANGES')
    table.integer('HOUSING_ID').references('ID').inTable('HOUSING_TYPES')
    table.integer('AGE')
    table.timestamp('CREATED_AT')
    table.timestamp('UPDATED_AT')

  })
};

exports.down = function(knex) {
    return schema.knex.dropTable('USERS')
};
