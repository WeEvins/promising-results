function mathMachine() {
    return new Promise((resolve) => {
        console.log('I am starting the problem chain now');
        slowMath.add(6, 2);
        console.log(num);
        resolve(num);
    });
}.then(() => {
        console.log('part two of the promise chain starts here');
        slowMath.multiply(num, 2);
        console.log(multTwo);
        return multTwo;
    });
});.then(() => {
    console.log('part three starts here!');
    slowMath.divide(multTwo, 4);
    console.log(divideFour);
    return divideFour;
});.then(() => {
    console.log('part four starts here');
    slowMath.subtract(divideFour, 3);
    console.log(subThree);
    return subThree;
});.then(() => {
    console.log('part five starts here');
    slowMath.add(subThree, 98);
    console.log(plus98);
    return plus98;
});.then(() => {
    console.log('part six starts here');
    slowMath.divide(plus98, 2);
    console.log(div2);
    return div2;
});.then(() => {
    console.log('part seven');
    slowMath.multiply(div2, 50);
    console.log(times50);
    return times50;
});.then(() => {
    console.log('part eight');
    slowMath.divide(times50, 40);
    console.log(div40);
    return div40;
});.then(() => {
    console.log('part nine');
    slowMath.add(div40, 30);
    console.log(plus30);
    return plus30;
});.then(() => {
    console.log(`the final answer is ${plus30}`);
});.catch (() => {
    console.log(`Uh oh. Math machine broke.`);
});
mathMachine();