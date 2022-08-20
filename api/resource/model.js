// build your `Resource` model here
// build your `Project` model here
const db = require("../../data/dbConfig");

async function getAll() {
  const projects = await db("resources");
  return projects;
}

async function create(payload) {
  const newResourceId = await db("resources").insert(payload);
  await db("resources").where("resource_id", newResourceId).first();
}

module.exports = { getAll, create };
