/*
 * Basic test using Chai assertion library
 * add, subtract or divide two numbers
 * @author Yosef Samuel
 * @param {number} a - first number
 * @param {number} b - second number
 * @return {number} - value after applying the operation
 */
function calculateNumber(type, a, b) {
  const aRound = Math.round(a);
  const bRound = Math.round(b);

  if (type === 'SUBTRACT') {
    return aRound - bRound;
  }

  if (type === 'DIVIDE') {
    if (bRound === 0) {
      return 'Error';
    }
    return aRound / bRound;
  }

  return aRound + bRound;
}

module.exports = calculateNumber;
