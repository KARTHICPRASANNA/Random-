const {range} = require('@laufire/utils/collection');

const getRandomBetween=(min,max)=>
    Math.floor(Math.random()*(max-min+1)+min);

const getRandomCharacter=()=>
      String.fromCharCode(getRandomBetween(97,122));

const characters='abcdefghijklmnopqrstuvwxyz';
const getRandomString=(length)=> {
const charactersLength=characters.length;
const result= range(0,length).reduce((prevValue)=>prevValue + characters.charAt(getRandomBetween(0,charactersLength)),"");
   return result;
}

function main() {
    console.log("Random between two num:" + getRandomBetween(1,10));
    console.log("Random Character:" + getRandomCharacter());
    console.log("Random String:" + getRandomString(5));
}
main();