// How old is my dog in human years?
const dogName = "Genie";
let dogAge = 6.5;

//calculating human age of dogs first 2 years of life
let childhood = 2;
childhood *= 10.5;

//calculating human age of dogs years after childhood
let adulthood = dogAge-2;
adulthood *= 4;

//calculating the age of my dog in human years
let adjustedAge = childhood+adulthood;

//string interpolation
console.log(`My dog is called ${dogName}. ${dogName} is ${dogAge} in real life which is ${adjustedAge} in human years. WOW!`)
