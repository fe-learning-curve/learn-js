const pi = 10.21312121213;
const number = 10000000;

/**
 * STRING
 *
 * */

// let person = "   phong     vu Phong    ";

// const regex = /phong/gi;

// console.log("replace", person.replace(regex, "duong"));
// console.log("split", person.split(regex));
// console.log("length", person.length);
// console.log("charCodeAt", person.charCodeAt(0));
// console.log("substring", person.substring(0, 3));
// console.log("toLowerCase", person.toLowerCase());
// console.log("toUpperCase", person.toUpperCase());
// console.log("big", person.big());
// console.log("concat", person.concat(...["duong", "di"]));
// console.log("slice", person.slice(0, 3));
// console.log("includes", person.includes("p"));
// console.log("trim", person.trim());

/**
 * FUNCTION
 */

// function add(n1, n2) {
//   return n1 + n2;
// }

// const total = add(10, 5);

// console.log("total", total);

// function restFunc(duong, ...rest) {
//   if (duong === "duong") {
//     console.log("hehha");
//   } else {
//     console.log(rest);
//   }
// }

// restFunc("duong1", "hehe", "heha", "hihi");

/**
 * Object && array
 */

// let car = {
//   wheel: 4,
//   "front-glass": 2,
//   light: 4,
//   color: "red",
//   brake: 2,
// };

// let person = {
//   color: "white",
//   hair: "red",
//   eye: 12,
//   array: [1, 2, 3, 4, 1, 2, 3, 32],

//   increaseEyeValue: () => {
//     return {
//       ...person,
//       eye: person.eye + 1,
//     };
//   },

//   filterValue: (value) => {
//     person.array = person.array?.filter((v) => v !== value);
//     return person;
//   },
// };

// console.log("get all keys", Object.keys(car));
// console.log("get all values", Object.values(car));

// const keys = Object.keys(car);

// const allKeysHaveValueEqual2 = keys?.filter((key) => {
//   const value = car?.[key];

//   return value === 2;
// });

// person.increaseEyeValue();
// const person2 = person.filterValue(2);

// console.log("person", person);
// console.log("person2", person2);

// let arrayObjects = [
//   { id: 1, name: "vai thun", test: { hehe: "vu" }, tien: 100000 },
//   { id: 2, name: "vai thieu", test: { hehe: "hao" }, tien: 200000 },
//   { id: 3, name: "cotton" },
//   { id: 4, name: "ao dai" },
// ];

//result

// let a = {
//   1: { id: 1, name: "vai thun", test: { hehe: "vu" }, tien: 100000 },
//   2: { id: 2, name: "vai thieu", test: { hehe: "hao" }, tien: 200000 },
// };

// let array = [12, 3, 2, 1, 2, 34];

// console.log("includes", array?.includes(1));
// console.log(
//   "some",
//   array?.some((number) => number === 11)
// );

// const nameIsVu = arrayObjects?.filter((obj) => obj?.name?.length > 7);

// const mapArray = array?.map((number) => ({
//   value: number,
//   lable: `string ${number + 1}`,
// }));

// const total = arrayObjects?.reduce((t, obj) => {
//   return t + (obj?.tien || 0);
// }, 0);

// console.log(
//   "findIndex",
//   arrayObjects.findIndex((item) => item.id === 5)
// );

// console.log(
//   "find",
//   arrayObjects.find((item) => item.id === 3)
// );

// const mapArrayObjects = arrayObjects?.reduce((t, obj) => {
//   t[obj.id] = obj;
//   return t;
// }, {});

// console.log("mapArrayObjects", mapArrayObjects);

// console.log("mapArrayObjects", mapArrayObjects?.[1]);

// const num = 3.34;

// const rounded = Math.round(num);
// const ceil = Math.ceil(num);
// const floor = Math.floor(num);
// const trunc = Math.trunc(num);
// console.log("rounded", rounded);
// console.log("ceil", ceil);
// console.log("floor", floor);
// console.log("trunc", trunc);

// let a = 1;
// let b = 2;

// const max = Math.max(a, b);
// const min = Math.min(a, b);

// console.log("max", max);
// console.log("min", min);

// const arr = [1, 2, 10, 200, 100];

// const maxInArr = Math.max(...arr);
// const minInArr = Math.min(...arr);

// console.log("maxInArr", maxInArr);
// console.log("minInArr", minInArr);

// const random = Math.random();

// console.log("random", random);

// const randomNumFrom1To20 = 1 + Math.floor(Math.random() * 20);
