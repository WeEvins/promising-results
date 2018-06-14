slowMath.add(6, 2)
    .then((result) => {
        console.log('I am starting the problem chain now');
        console.log(result);
        return result;
    }).then((result) => {
        console.log('part two of the promise chain starts here');
        slowMath.multiply(result, 2);
        console.log(result);
        return result;
    }).then((result) => {
        console.log('part three starts here!');
        slowMath.divide(result, 4);
        console.log(result);
        return result;
    }).then((result) => {
        console.log('part four starts here');
        slowMath.subtract(result, 3);
        console.log(result);
        return result;
    }).then((result) => {
        console.log('part five starts here');
        slowMath.add(result, 98);
        console.log(result);
        return result;
    }).then((result) => {
        console.log('part six starts here');
        slowMath.divide(result, 2);
        console.log(result);
        return result;
    }).then((result) => {
        console.log('part seven');
        slowMath.multiply(result, 50);
        console.log(result);
        return result;
    }).then((result) => {
        console.log('part eight');
        slowMath.divide(result, 40);
        console.log(result);
        return result;
    }).then((result) => {
        console.log('part nine');
        slowMath.add(result, 30);
        console.log(result);
        return result;
    }).then((result) => {
        console.log(`the final answer is ${result}`);
    }).catch(() => {
        console.log(`Uh oh. Math machine broke.`);
    });
