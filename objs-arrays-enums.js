"use strict";
// const person: {
//   name: string,
//   age: number,
//   hobbies: string[],
//   role: [number, string] // tuple
// } = {
//   name: "Rommel",
//   age: 32,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, 'author']
// };
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
const person = {
    name: "Rommel",
    age: 32,
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN
};
let favoriteActivities;
favoriteActivities = ["Sports"];
console.log("Person: ", person);
for (const hobby of person.hobbies) {
    // TS knows hobby will be a string.
    console.log("hobby: ", hobby.toUpperCase());
}
if (person.role === Role.ADMIN) {
    console.log("Role is admin!");
}
//# sourceMappingURL=objs-arrays-enums.js.map