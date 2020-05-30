import "reflect-metadata";
import { plainToClass } from 'class-transformer';
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

// import _ from 'lodash';
// import {ProjectList} from "./components/project-list";
// import {ProjectInput} from "./components/project-input";
//
// new ProjectInput();
// new ProjectList('active');
// new ProjectList('finished');
//
// console.log(_.shuffle([1, 2, 3]));
