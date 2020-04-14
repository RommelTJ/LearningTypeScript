// const person: {
//   name: string,
//   age: number
// } = {

const person = {
  name: "Rommel",
  age: 32,
  hobbies: ["Sports", "Cooking"]
};

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log("Person: ", person);

for (const hobby of person.hobbies) {
  console.log("hobby: ", hobby);
}

