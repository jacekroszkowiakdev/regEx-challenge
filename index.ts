import chop from "./chop";

interface Data {
    [key: string]: string | number;

    bread: string | number;
    cheese: string | number;
}

let dataset: Data = {
    bread: "baguette",
    cheese: "brie cheese",
};

const myTemplate = "I like to eat {{ bread }} and {{ cheese }}";

chop(myTemplate, dataset);
// expected result - "I like to eat baguette and brie cheese"

console.log(chop(myTemplate, dataset));
