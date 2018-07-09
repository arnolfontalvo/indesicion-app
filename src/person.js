
/*jslint node: true */
'use strict';

export const isAdult = (age) => age >= 18;
export const canDrink = (age) => age >= 21;
export const isAdultAndCanDrink = (age) => isAdult(age) && canDrink(age);

export default  (age) => age >= 65;

