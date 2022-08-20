// build your `Project` model here
const db = require("../../data/dbConfig");

async function getAll() {
  const projects = await db("projects");
  return projects.map((project) => {
    if (project.project_completed === 1) {
      return { ...project, project_completed: true };
    } else return { ...project, project_completed: false };
  });
}

async function create(payload) {
  const newProjectId = await db("projects").insert(payload);
  const newProject = await db("projects").where("project_id", newProjectId).first();
  return {
    ...newProject,
    project_completed: newProject.project_completed === 1 ? true : false,
  };
}

module.exports = { getAll, create };
