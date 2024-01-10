function makePancakes(callback) {
    setTimeout(() => {
        console.log("Making pancakes...");
        callback();
    }, 1500);    

    
}

function pancakesReady(params) {
    setTimeout(() => {
        console.log("Let's eat!");
        
    }, 2000);
}


makePancakes(pancakesReady);