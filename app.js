var person = {
    name: "Rommel",
    age: 32,
    hobbies: ["Sports", "Cooking"],
    role: [2, 'author']
};
// Danger
person.role.push('admin');
person.role[1] = 10;
// End Danger
var favoriteActivities;
favoriteActivities = ["Sports"];
console.log("Person: ", person);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    // TS knows hobby will be a string.
    console.log("hobby: ", hobby.toUpperCase());
}
