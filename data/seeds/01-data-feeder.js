const projects = [
  {
    project_name: "project Name Value 1",
    project_description: "projcet description values 1",
    project_completed: true,
  },
  {
    project_name: "project Name Value 2",
    project_description: "projcet description values 2",
    project_completed: false,
  },
  {
    project_name: "project Name Value 3",
    project_description: "projcet description values 3",
    project_completed: false,
  },
];

const resources = [
  {
    resource_name: " Resource Name Value 1",
    resource_description: "resource description values 1",
  },
  {
    resource_name: " Resource Name Value 2",
    resource_description: "resource description values 2",
  },
  {
    resource_name: " Resource Name Value 3",
    resource_description: "resource description values 3",
  },
  {
    resource_name: " Resource Name Value 4",
    resource_description: "resource description values 4",
  },
  {
    resource_name: " Resource Name Value 5",
    resource_description: "resource description values 5",
  },
  {
    resource_name: " Resource Name Value 6",
    resource_description: "resource description values 6",
  },
  {
    resource_name: " Resource Name Value 7",
    resource_description: "resource description values 7",
  },
  {
    resource_name: " Resource Name Value 8",
    resource_description: "resource description values 8",
  },
  {
    resource_name: " Resource Name Value 9",
    resource_description: "resource description values 9",
  },
];

const tasks = [
  {
    task_description: "task description values 1",
    task_notes: " task Name Value 1",
    task_completed: true,
    project_id: 1,
  },
  {
    task_description: "task description values 2",
    task_notes: " task Name Value 2",
    task_completed: true,
    project_id: 1,
  },
  {
    task_description: "task description values 3",
    task_notes: " task Name Value 3",
    task_completed: false,
    project_id: 2,
  },
  {
    task_description: "task description values 4",
    task_notes: " task Name Value 4",
    task_completed: true,
    project_id: 2,
  },
  {
    task_description: "task description values 5",
    task_notes: " task Name Value 5",
    task_completed: false,
    project_id: 2,
  },
  {
    task_description: "task description values 6",
    task_notes: " task Name Value 6",
    task_completed: false,
    project_id: 2,
  },
  {
    task_description: "task description values 7",
    task_notes: " task Name Value 7",
    task_completed: false,

    project_id: 3,
  },
];

const proRes = [
  { resource_id: 1, project_id: 1 },
  { resource_id: 2, project_id: 1 },
  { resource_id: 3, project_id: 1 },
  { resource_id: 4, project_id: 1 },
  { resource_id: 5, project_id: 2 },
  { resource_id: 6, project_id: 2 },
  { resource_id: 7, project_id: 3 },
  { resource_id: 8, project_id: 3 },
  { resource_id: 9, project_id: 3 },
];

exports.seed = async function (knex) {
  await knex("projects").insert(projects);
  await knex("resources").insert(resources);
  await knex("tasks").insert(tasks);
  await knex("project_resources").insert(proRes);
};
