// build your `Project` model here
const db = require("../../data/dbConfig");

async function getAll() {
  const projects = await db("projects");
  return projects;
}

async function create(payload) {
  const newProjectId = await db("projects").insert(payload);
  await db("projects").where("project_id", newProjectId).first();
}

module.exports = { getAll, create };
