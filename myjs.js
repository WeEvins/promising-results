slowMath.add(6, 2); {
    return new Promise((resolve) => {
        console.log('I am starting the problem chain now');
        console.log(num);
        resolve(slowMath);
    }).then(() => {
        console.log('part two of the promise chain starts here');
        slowMath.multiply(num, 2);
        console.log(slowMath);
        return slowMath;
    }).then(() => {
        console.log('part three starts here!');
        slowMath.divide(slowMath, 4);
        console.log(slowMath);
        return slowMath;
    }).then(() => {
        console.log('part four starts here');
        slowMath.subtract(slowMath, 3);
        console.log(slowMath);
        return slowMath;
    }).then(() => {
        console.log('part five starts here');
        slowMath.add(slowMath, 98);
        console.log(slowMath);
        return slowMath;
    }).then(() => {
        console.log('part six starts here');
        slowMath.divide(slowMath, 2);
        console.log(slowMath);
        return slowMath;
    }).then(() => {
        console.log('part seven');
        slowMath.multiply(slowMath, 50);
        console.log(slowMath);
        return slowMath;
    }).then(() => {
        console.log('part eight');
        slowMath.divide(slowMath, 40);
        console.log(slowMath);
        return slowMath;
    }).then(() => {
        console.log('part nine');
        slowMath.add(slowMath, 30);
        console.log(slowMath);
        return slowMath;
    }).then(() => {
        console.log(`the final answer is ${slowMath}`);
    }).catch(() => {
        console.log(`Uh oh. Math machine broke.`);
    })
};
