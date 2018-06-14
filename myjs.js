slowMath.add(6, 2)
    .then((result) => {
        console.log('part two of the promise chain starts here');
        console.log(result);
        return slowMath.multiply(result, 2);
    }).then((result) => {
        console.log('part three starts here!');
        console.log(result);
        return slowMath.divide(result, 4);
    }).then((result) => {
        console.log('part four starts here');
        console.log(result);
        return slowMath.subtract(result, 3);
    }).then((result) => {
        console.log('part five starts here');
        console.log(result);
        return slowMath.add(result, 98);
    }).then((result) => {
        console.log('part six starts here');
        console.log(result);
        return slowMath.divide(result, 2);
    }).then((result) => {
        console.log('part seven');
        console.log(result);
        return slowMath.multiply(result, 50);
    }).then((result) => {
        console.log('part eight');
        console.log(result);
        return slowMath.divide(result, 40);
    }).then((result) => {
        console.log('part nine');
        console.log(result);
        return slowMath.add(result, 30);
    }).then((result) => {
        console.log(`the final answer is ${result}`);
    }).catch(() => {
        console.log(`Uh oh. Math machine broke.`);
    });
