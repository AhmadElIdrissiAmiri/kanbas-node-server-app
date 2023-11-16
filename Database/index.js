// import courses from "./courses.json" assert { type: "json" };
// import modules from "./modules.json" assert { type: "json" };
// import assignments from "./assignments.json" assert { type: "json" };
// import users from "./users.json" assert { type: "json" };
// import grades from "./grades.json" assert { type: "json" };
// import enrollments from "./enrollments.json" assert { type: "json" };
// export default {
//   courses,
//   modules,
//   assignments,
//   users,
//   grades,
//   enrollments,
// };

import assert from 'assert';
import courses from "./courses.json";
import modules from "./modules.json";
import assignments from "./assignments.json";
import users from "./users.json";
import grades from "./grades.json";
import enrollments from "./enrollments.json";

assert.ok(courses, 'courses should be defined');
assert.ok(modules, 'modules should be defined');
assert.ok(assignments, 'assignments should be defined');
assert.ok(users, 'users should be defined');
assert.ok(grades, 'grades should be defined');
assert.ok(enrollments, 'enrollments should be defined');

export default {
  courses,
  modules,
  assignments,
  users,
  grades,
  enrollments,
};