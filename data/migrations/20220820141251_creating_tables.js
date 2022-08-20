exports.up = function (knex) {
  return knex.schema
    .createTable("projects", (tbl) => {
      tbl.increments("project_id");
      tbl.string("project_name", 200).notNullable();
      tbl.string("project_description", 500);
      tbl.boolean("project_completed").defaultTo(false);
    })
    .createTable("resources", (tbl) => {
      tbl.increments("resource_id");
      tbl.string("resource_name", 200).notNullable().unique();
      tbl.string("resource_description", 500);
    })
    .createTable("tasks", (tbl) => {
      tbl.increments("task_id");
      tbl.string("task_description", 300).notNullable();
      tbl.string("task_notes", 500);
      tbl.boolean("task_completed").defaultTo(false);
      tbl
        .integer("project_id")
        .notNullable()
        .unsigned()
        .references("project_id")
        .inTable("projects")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("project_resources", (tbl) => {
      tbl.increments("id");
      tbl
        .integer("resource_id")
        .notNullable()
        .unsigned()
        .references("resource_id")
        .inTable("resources")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl
        .integer("project_id")
        .notNullable()
        .unsigned()
        .references("project_id")
        .inTable("projects")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("project_resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects");
};
