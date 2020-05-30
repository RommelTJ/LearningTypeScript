import "reflect-metadata";
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";
import Product from "./product.model";

const products = [{title: "A Carpet", price: 29.99}, {title: "A Book", price: 10.99}];

// const p1 = new Product('A Book', 12.99);

// const loadedProducts = products.map(p => {
//   return new Product(p.title, p.price);
// })

const loadedProducts = plainToClass(Product, products);
for (const p of loadedProducts) {
  console.log(p.getInformation());
}

const newProduct = new Product('', -5.99);
validate(newProduct).then(errors => {
  if (errors.length > 0) {
    console.log("errors: ", errors);
  } else {
    console.log("newProduct: ", newProduct.getInformation());
  }
});

// import _ from 'lodash';
// import {ProjectList} from "./components/project-list";
// import {ProjectInput} from "./components/project-input";
//
// new ProjectInput();
// new ProjectList('active');
// new ProjectList('finished');
//
// console.log(_.shuffle([1, 2, 3]));
