// Flip a coin
// essa promisse um obj que a pessoa cria que vai ter um valor depois

function flip(params) {
    console.log("Myntet är i luften");
    const flipResult = Math.random() > 0.5;
    setTimeout(() => {
    }, 2000);
    return flipResult
}


const flipACoin = new Promise((resolve, reject)=> {
    console.log("Jag kastar myntet");

    const flipResult = flip(); // tar par sekunder...
    //console.log(flipResult);


    //krona => resolve, klave => reject
    if (flipResult) {
        resolve("Krona!!")
    } else {
        reject("Klave!!")
    }
}) 


//fazer alguma coisa que use resolve e reject

flipACoin
.then(flipResult => console.log("Myntet kastades och blev krona"))
.catch(error => console.log(error))