import _ from 'lodash';
declare var GLOBAL: string;

import {ProjectList} from "./components/project-list";
import {ProjectInput} from "./components/project-input";

new ProjectInput();
new ProjectList('active');
new ProjectList('finished');

console.log(_.shuffle([1, 2, 3]));
console.log(GLOBAL);
