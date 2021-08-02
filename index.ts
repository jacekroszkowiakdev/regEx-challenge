import chop,{ IDataSet } from "./chop";

let dataset: IDataSet = {
    bread: "baguette",
    cheese: "brie cheese",
};

// note the chop function will not parse if there is space between the curly brackets and the value
const myTemplate = "I like to eat {{bread}} and {{cheese}}";

// chop(myTemplate, dataset);
// expected result - "I like to eat baguette and brie cheese"

console.log(chop(myTemplate, dataset));
