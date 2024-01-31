#!/usr/bin/node
import Rectangle from './4-rectangle.js';
export default class Square extends Rectangle {
    constructor (size) {
      super(size, size);
    }
  };
/* const Rectangle =  require('./4-rectangle.js');
module.exports = class Square extends Rectangle {
    constructor (size) {
      super(size, size);
    }
  };
  */
   
