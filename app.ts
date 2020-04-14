const person: {
  name: string,
  age: number,
  hobbies: string[],
  role: [number, string] // tuple
} = {
  name: "Rommel",
  age: 32,
  hobbies: ["Sports", "Cooking"],
  role: [2, 'author']
};

// Danger
// person.role.push('admin');
// person.role[1] = 10;
// End Danger

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log("Person: ", person);

for (const hobby of person.hobbies) {
  // TS knows hobby will be a string.
  console.log("hobby: ", hobby.toUpperCase());
}
