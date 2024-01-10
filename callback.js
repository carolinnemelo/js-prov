function doStep1(init, callback) {
    const result = init + 1;
    callback();
}

function doStep2(init, callback) {
    const result = init; 
    callback(result)
    
}

function doOperation(params) {
    doStep1(0, (result1) => {

    })
}


// Promises - promise of doing something