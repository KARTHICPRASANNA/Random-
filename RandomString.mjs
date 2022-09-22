function getRandomBetween(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

function getRandomCharacter() {
     return String.fromCharCode(getRandomBetween(97,122));
}

function getRandomString(length) {
    let result='';
    for (let i=0;i<length;i++) {
        result+=getRandomCharacter();
    }
    return result;
}

function getRandomHexChar() {
    const num=getRandomBetween(1,15);
    const hexChar=num.toString(16);
    return hexChar;
}

function getRandomHexValues(length) {
    let result='';
    for (let i=0;i<length;i++) {
        result+=getRandomHexChar();
    }
    return result;
}

function getUUID() {
    const values=[8,4,4,4,12];
    const result=values.map((ele)=>getRandomHexValues(ele)).join("-");
    return result;
}

function main() {
    console.log("Random between two num:" + getRandomBetween(1,10));
    console.log("Random Character:" + getRandomCharacter());
    console.log("Random String:" + getRandomString(5));
    console.log("Random Hexa Character:" + getRandomHexChar());
    console.log("Random Hexa Values:" + getRandomHexValues(5));
    console.log("UUID:" + getUUID());
    }
    main();