// Define the input array
// const inputArray = [{ key: "world" }, [1, 3, 5, [false, { key: 4 }, [[]]]]];
const inputArray = [{ key: "world" }, [1, 3, 5, [false, { key: 4 }, [[]]]],[1,2 , {key: "hello"}, "earth"],{id: 1,style: "string",enabled: true}];

// Function to check if an object is of Type1
function isType1(obj) {
    return obj.hasOwnProperty('key');
}

// Function to check if an object is of Type2
function isType2(obj) {
    return obj.hasOwnProperty('id') && obj.hasOwnProperty('style') && obj.hasOwnProperty('enabled');
}

// Function to flatten the array and categorize elements
function flattenAndCategorize(arr) {
    const numbersArray = [];
    const type1Array = [];
    const type2Array = [];
    const otherObjectsArray = [];

    // Function to flatten the array recursively
    function flatten(arr) {
        arr.forEach(item => {
            if (Array.isArray(item)) {
                flatten(item);
            } else if (typeof item === 'number') {
                numbersArray.push(item);
            } else if (isType1(item)) {
                type1Array.push(item);
            } else if (isType2(item)) {
                type2Array.push(item);
            } else {
                otherObjectsArray.push(item);
            }
        });
    }

    flatten(arr);

    return { numbersArray, type1Array, type2Array, otherObjectsArray };
}

// Promisified function to write arrays to the console
function writeToConsole(array, delay) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(array);
            resolve();
        }, delay);
    });
}

// Main function to orchestrate the process
async function main() {
    const { numbersArray, type1Array, type2Array, otherObjectsArray } = flattenAndCategorize(inputArray);

    // Writing arrays to the console with a delay of 1 second
    await writeToConsole(numbersArray, 1000);
    await writeToConsole(type1Array, 1000);
    await writeToConsole(type2Array, 1000);
    await writeToConsole(otherObjectsArray, 1000);
}

// Running the main function
main();
