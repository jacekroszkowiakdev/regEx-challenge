"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chop_1 = __importDefault(require("./chop"));
var dataset = {
    bread: "baguette",
    cheese: "brie cheese",
};
var myTemplate = "I like to eat {{ bread }} and {{ cheese }}";
chop_1.default(myTemplate, dataset);
// expected result - "I like to eat baguette and brie cheese"
console.log(chop_1.default(myTemplate, dataset));
