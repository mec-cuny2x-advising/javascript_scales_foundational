/**
 * @param {number} length - the length of the square
 * @param {number} width - the width of the square
 * @return {number} the area of the square
**/
function find_area_square(length, width){
  let answer = length * width;
  return answer;
}

/**---------------------------------**/

let myArray = [ 37, "words", 37.2 ];

for( let i=0;  i < myArray.length;  i++ ) {
  console.log("i is = " + i);
  console.log( myArray[i]);
}

// i = 0, is 0 < 3, go ahead, then set i = 1
// i = 1, is 1 < 3, go ahead, then set i = 2
// i = 2, is 2 < 3, go ahead, then set i = 3
// i = 3, is 3 < 3, no, stop

