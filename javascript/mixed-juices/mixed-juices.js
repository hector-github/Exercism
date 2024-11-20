// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  let result = 0;
  switch (name) {
    case name = 'Pure Strawberry Joy':
      result = 0.5
      break;
    case name = 'Energizer':
      result = 1.5
      break;
    case name = 'Green Garden':
      result = 1.5
      break;
   case name = 'Tropical Island':
      result = 3
      break;
  case name = 'All or Nothing':
      result = 5
      break;
  default:
    result = 2.5
    break;
  }
  return result;
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let loops = 0;
  if (wedgesNeeded != 0){
    while (loops < limes.length){
      if(wedgesNeeded > 7){
        if(limes[loops] == 'small') {
          wedgesNeeded = wedgesNeeded-6
        } else if(limes[loops] == 'medium'){
          wedgesNeeded = wedgesNeeded-8
        } else if(limes[loops] == 'large'){
          wedgesNeeded = wedgesNeeded-10
        }
      }
      else if(wedgesNeeded < 6 && wedgesNeeded != 0){
        loops++;
        break;
      }
      loops++;
    }
  }
  return loops;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  throw new Error('Please implement the remainingOrders function');
}
