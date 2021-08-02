// / <reference types="jest" />

import chop, { IDataSet } from "../../chop";

test("Chop should return string message with correct values from the dataset", () => {
    let dataset: IDataSet = {
        bread: "baguette",
        cheese: "brie cheese",
    };
    const myTemplate = "I like to eat {{bread}} and {{cheese}}";
    expect(chop(myTemplate, dataset)).toBe(
        "I like to eat baguette and brie cheese"
    );
});

test("Chop should return incorrect result if the string interpolations are with space between the value", () => {
    let dataset: IDataSet = {
        bread: "baguette",
        cheese: "brie cheese",
    };
    const myTemplate = "I like to eat {{ bread }} and {{ cheese }}";
    expect(chop(myTemplate, dataset)).not.toBe(
        "I like to eat baguette and brie cheese"
    );
});

test("Chop should return incorrect result if the dataset object value or values are empty", () => {
    let dataset: IDataSet = {
        bread: "",
        cheese: "",
    };
    const myTemplate = "I like to eat {{bread}} and {{cheese}}";
    expect(chop(myTemplate, dataset)).not.toBe(
        "I like to eat baguette and brie cheese"
    );
});

test("Chop should return incorrect result if user input does not match dataset keynames", () => {
    let dataset: IDataSet = {
        bread: "baguette",
        cheese: "brie cheese",
    };
    const myTemplate = "I like to eat {{bread}} and {{butter}}";
    expect(chop(myTemplate, dataset)).not.toBe(
        "I like to eat baguette and butter"
    );
});
