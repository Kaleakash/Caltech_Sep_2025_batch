import { display1,display2 } from "./file1.js";  // equal to require()
import display3,{display4,display5}from "./file2.js";  // exported as default 
import { display6,display7,display8 } from "./file3.js";
import {display1 as dis1} from './file4.js';
display1();
display2();
display3();
display4();
display5();
display6();
display7();
display8();
dis1();