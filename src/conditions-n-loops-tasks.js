/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  if (number >= 0) {
    return true;
  }
  return false;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  if (a > b && a > c) {
    return a;
  }
  if (b > a && b > c) {
    return b;
  }
  return c;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  function checkResult(x, y) {
    if (x === king.x && y === king.y) {
      return true;
    }
    return false;
  }
  let res = false;
  let qx = queen.x;
  let qy = queen.y;
  while (qy > 1) {
    qy -= 1;
    res = checkResult(qx, qy);
    if (res) break;
  }
  if (res) return res;
  qy = queen.y;
  while (qy <= 8) {
    qy += 1;
    res = checkResult(qx, qy);
    if (res) break;
  }
  if (res) return res;
  qy = queen.y;
  while (qx > 1) {
    qx -= 1;
    res = checkResult(qx, qy);
    if (res) break;
  }
  if (res) return res;
  qx = queen.x;
  while (qx <= 8) {
    qx += 1;
    res = checkResult(qx, qy);
    if (res) break;
  }
  if (res) return res;
  qx = queen.x;
  while (qx > 1 && qy > 1) {
    qx -= 1;
    qy -= 1;
    res = checkResult(qx, qy);
    if (res) break;
  }
  if (res) return res;
  qx = queen.x;
  qy = queen.y;
  while (qx <= 8 && qy <= 8) {
    qx += 1;
    qy += 1;
    res = checkResult(qx, qy);
    if (res) break;
  }
  if (res) return res;
  qx = queen.x;
  qy = queen.y;
  while (qx <= 8 && qy > 1) {
    qx += 1;
    qy -= 1;
    res = checkResult(qx, qy);
    if (res) break;
  }
  if (res) return res;
  qx = queen.x;
  qy = queen.y;
  while (qy <= 8 && qx > 1) {
    qy += 1;
    qx -= 1;
    res = checkResult(qx, qy);
    if (res) break;
  }
  if (res) return res;
  return res;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a === 0 || b === 0 || c === 0) return false;
  if (
    (a === b && a + b > c) ||
    (b === c && b + c > a) ||
    (a === c && a + c > b)
  ) {
    return true;
  }
  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let res = '';
  const tens = Math.floor(num / 10);
  const five = Math.floor((num - tens * 10) / 5);
  const singles = num - (tens * 10 + five * 5);
  for (let i = 0; i < tens; i += 1) {
    res += 'X';
  }
  if (num - tens * 10 === 9) {
    res += 'IX';
  } else {
    for (let i = 0; i < five; i += 1) {
      res += 'V';
    }
    if (singles < 4) {
      for (let i = 0; i < singles; i += 1) {
        res += 'I';
      }
    } else {
      res += 'IV';
    }
  }
  return res;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let res = '';
  for (let i = 0; i < numberStr.length; i += 1) {
    switch (numberStr[i]) {
      case '0':
        res += 'zero';
        break;
      case '1':
        res += 'one';
        break;
      case '2':
        res += 'two';
        break;
      case '3':
        res += 'three';
        break;
      case '4':
        res += 'four';
        break;
      case '5':
        res += 'five';
        break;
      case '6':
        res += 'six';
        break;
      case '7':
        res += 'seven';
        break;
      case '8':
        res += 'eight';
        break;
      case '9':
        res += 'nine';
        break;
      case '.':
        res += 'point';
        break;
      case ',':
        res += 'point';
        break;
      case '-':
        res += 'minus';
        break;
      default:
        res += '';
    }
    if (i !== numberStr.length - 1) {
      res += ' ';
    }
  }
  return res;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let reversedStr = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    reversedStr += str[i];
  }
  return reversedStr === str;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 't'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  let res = -1;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      res = i;
      break;
    }
  }
  return res;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let result = false;
  const numStr = `${num}`;
  for (let i = 0; i < numStr.length; i += 1) {
    if (numStr[i] === `${digit}`) {
      result = true;
      break;
    }
  }
  return result;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  let result = -1;
  for (let i = 0; i < arr.length; i += 1) {
    let sumBeforeIndex = 0;
    let sumAfterIndex = 0;
    for (let y = 0; y < i; y += 1) {
      sumBeforeIndex += arr[y];
    }
    for (let x = i + 1; x < arr.length; x += 1) {
      sumAfterIndex += arr[x];
    }
    if (sumAfterIndex === sumBeforeIndex) {
      result = i;
      break;
    }
  }
  return result;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  let left = 0;
  let right = size - 1;
  let bottom = size - 1;
  let top = 0;
  let counter = 1;
  const array = [];
  for (let i = 0; i < size; i += 1) {
    array[i] = [];
  }
  const leftToRight = () => {
    for (let i = left; i <= right; i += 1) {
      array[top][i] = counter;
      counter += 1;
    }
    top += 1;
  };
  const topToBottom = () => {
    for (let i = top; i <= bottom; i += 1) {
      array[i][right] = counter;
      counter += 1;
    }
    right -= 1;
  };
  const rightToLeft = () => {
    for (let i = right; i >= left; i -= 1) {
      array[bottom][i] = counter;
      counter += 1;
    }
    bottom -= 1;
  };
  const bottomToTop = () => {
    for (let i = bottom; i >= top; i -= 1) {
      array[i][left] = counter;
      counter += 1;
    }
    left += 1;
  };
  while (counter <= size * size) {
    leftToRight();
    topToBottom();
    rightToLeft();
    bottomToTop();
  }
  return array;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const newMatrix = matrix;
  const copyMatrix = [];
  for (let i = 0; i < matrix.length; i += 1) {
    copyMatrix[i] = [...matrix[i]];
  }
  for (let i = 0; i < matrix.length; i += 1) {
    for (let y = 0; y < matrix.length; y += 1) {
      newMatrix[y][i] = copyMatrix[i][y];
    }
  }
  const copyMatrix2 = [];
  for (let i = 0; i < matrix.length; i += 1) {
    copyMatrix2[i] = [...newMatrix[i]];
  }

  for (let x = 0; x < newMatrix.length; x += 1) {
    for (
      let i = 0, y = newMatrix.length - 1;
      i < newMatrix.length;
      i += 1, y -= 1
    ) {
      newMatrix[x][i] = copyMatrix2[x][y];
    }
  }
  return newMatrix;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr, start = 0, end = arr.length - 1) {
  const array = arr;
  if (start < end) {
    let pivot = end;
    let i = start;
    for (let x = start; x < end; x += 1) {
      if (array[pivot] > array[x]) {
        const temp = array[x];
        array[x] = array[i];
        array[i] = temp;
        i += 1;
      }
    }
    const temp = array[i];
    array[i] = array[pivot];
    array[pivot] = temp;
    pivot = i;
    sortByAsc(array, start, pivot - 1);
    sortByAsc(array, pivot + 1, end);
  }

  return array;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let array = str;
  const arrayOfResults = [];
  for (let i = 0; i < iterations; i += 1) {
    let odds = '';
    let rights = '';
    for (let y = 0; y < array.length; y += 1) {
      if (y % 2 === 0) {
        rights += array[y];
      } else {
        odds += array[y];
      }
    }
    array = rights + odds;
    if (array === str) {
      arrayOfResults[i] = array;
      break;
    } else {
      arrayOfResults[i] = array;
    }
  }
  if (arrayOfResults.length === iterations) {
    return arrayOfResults[iterations - 1];
  }
  return arrayOfResults[(iterations % arrayOfResults.length) - 1];
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(/* number */) {
  throw new Error('Not implemented');
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
