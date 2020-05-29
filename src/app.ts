import _ from 'lodash';

import {ProjectList} from "./components/project-list";
import {ProjectInput} from "./components/project-input";

new ProjectInput();
new ProjectList('active');
new ProjectList('finished');

console.log(_.shuffle([1, 2, 3]));
