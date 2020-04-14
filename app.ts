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

enum Role { ADMIN, READ_ONLY, AUTHOR}

const person = {
  name: "Rommel",
  age: 32,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN
};

let favoriteActivities: any;
favoriteActivities = ["Sports"];

console.log("Person: ", person);

for (const hobby of person.hobbies) {
  // TS knows hobby will be a string.
  console.log("hobby: ", hobby.toUpperCase());
}

if (person.role === Role.ADMIN) {
  console.log("Role is admin!");
}
