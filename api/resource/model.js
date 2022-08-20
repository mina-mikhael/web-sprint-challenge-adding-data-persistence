// build your `Resource` model here
// build your `Project` model here
const db = require("../../data/dbConfig");

async function getAll() {
  const projects = await db("resources");
  return projects;
}

async function create(payload) {
  const newResourceId = await db("resources").insert(payload);
  const newResource = await db("resources").where("resource_id", newResourceId).first();
  return newResource;
}

module.exports = { getAll, create };
