/// <reference path="./global.d.ts" />

// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 */

/**
 * Ex1 - Determine whether the lasagna is done
 *
 * @param {number} num num entry
 * @returns {string} text return end function cookingStatus()
 */

  export function cookingStatus(num) {
    if(num > 0){
        return "Not done, please wait."
    } else if(num == 0){
        return "Lasagna is done."
    } else{
        return "You forgot to set the timer."
    }
  }

/**
 * Ex2 - Estimate the preparation time
 *
 * @param {string[]} layers layers array
 * @returns {number} return number end function preparationTime
 */

  export function preparationTime(layers, num){
    let result = 0; // variable result of the calc
    if (num == undefined || num == null){
        result = layers.length * 2; // calc if num is undefined or null
    } else {
        result = layers.length * num; // calc if num is not undefined or null
    }
    return result;
  }
 
/**
 * Ex3 - Compute the amounts of noodles and sauce needed
 *
 * @param {string[]} list layers array
 * @returns {{noodles: number, sauce: number}} return string end function quantities
 */

export function quantities(list) {
    let noodles = 0 // Noodle for the calc
    let sauce = 0 // Sauce for the calc

    for(let i = 0; i < list.length; i++){
        if (list[i] === 'noodles'){ // If list we have one noodle sum 50
            noodles = noodles+50;
        } else if(list[i] === 'sauce'){ // If list we have one sauce sum 0.2
            sauce = sauce+0.2;
        }
        
    }
    return {noodles: noodles, sauce: sauce}; // return result of the last if's
}

/**
 * Ex4 - Add the secret ingredient
 *
 * @param {string[]} friendList friendlist array
 * @param {string[]} myList mylist array
 */

export function addSecretIngredient(friendList, myList){
    friendList == friendList.reverse(); // Reverse friendlist for search more fast the last ingredient for add to myList
    for(let i = 0; i <friendList.length; i++){ // loop start in the last element of friendList
        if(!myList.includes(friendList[i])){ // If the element is not in myList
            myList.push(friendList[i]); // Add only the first missing element
            break; // Stop after adding one element
        }
    }
    friendList == friendList.reverse(); // Reverse friendlist again for after the function
}

/**
 * Ex5 - Scale the recipe
 * 
 * @param {Object} recipe recipe array
 * @param {Number} num num entry
 * @returns {Object} return recipe before calc of the function scaleRecipe
 */

export function scaleRecipe(recipe, num){
    if (num === undefined || num === null || num === 0){ // return recipe if num can't use it
        return recipe 
    } else {
        return Object.fromEntries(
            Object.entries(recipe).map(([key, value]) => [key, value * (num/2)]) // Take all the entries of the object and * by num/2
        );
    }
    
}