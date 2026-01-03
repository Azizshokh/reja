/*
B-TASK: 

Shunday function tuzing, u 1ta string parametrga ega bolsin,
hamda osha stringda qatnashgan raqamlarni sonini
bizga return qilsin. MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.
*/

function checkingString(string) {
  let count = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] >= '0' && string[i] <= '9') {
      count++;
    }
  }

  console.log(`${string} da ${count} ta raqam bor`);
  
}
checkingString("ad2a54y79wet0sfgb9");
checkingString("ad5465154y79wet0sfgb9");


/*
A-TASK: 

Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi 
letterni ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.
MASALAN countLetter("e", "engineer") 3ni return qiladi.
*/

function countingLetter(letter, word) {
    let count = 0;
    
    const resultWorld = word;
    const resultLetter = letter;

    letter = letter.toLowerCase();
    word = word.toLowerCase();
    
    for(let i = 0; i < word.length; i++) {
        if(word[i] === letter) {
            count++;
        }
    }
    console.log(`${resultWorld} so'zida  ${resultLetter} harfi ${count} da`);
    
}

countingLetter("e", "Engineer");

////////////////////////////////////////////////////////////

console.log("Train task is working");

console.log("Jack Ma maslahatlari: ");
const list = [
   "yaxshi talaba bo'ling", // 0-20
   "to'g'ri boshliq tanlang va ko'proq xato qiling", //30-40
   "o'zingizga ishlashni boshlang", //30-40
   "siz kuchli bo'lgan narsalarni qiling", //40-50
   "yoshlarga investitsiya qiling", //50-60
   "endi dam oling, foydasi yo'q", //60
];

// Callback function

// function maslahatBering (a, callback) {
//     if(typeof a !== 'number') callback("insert a number", null);
//     else if (a <= 20) callback(null, list[0]);
//     else if (a > 20 && a <= 30) callback(null, list[1]);
//     else if (a > 30 && a <= 40) callback(null, list[2]);
//     else if (a > 40 && a <= 50) callback(null, list[3]);
//     else if (a > 50 && a <= 60) callback(null, list[4]);
//     else {
//         setTimeout( function ()  {
//             callback(null, list[5]); 
//         }, 5000);       
//     } 
// }

// console.log("Passed here 0");

// maslahatBering(65 /*'salom'*/, (err, data) =>{
//     if(err) console.log("Error: ", err);
//     else {
//         console.log('Javob: ', data); 
//     }           
// });

// console.log("Passed here 1");



// Asynchronous function

async function maslahatBering (a) {
    if(typeof a !== 'number') throw new Error ("insert a number");
    else if (a <= 20) return list[0];
    else if (a > 20 && a <= 30) return list[1];
    else if (a > 30 && a <= 40) return list[2];
    else if (a > 40 && a <= 50) return list[3];
    else if (a > 50 && a <= 60) return list[4];
    else {
        // return list[5];
        // setTimeout( function ()  {
        //     return list[5]; 
        // }, 5000);
        // async funtionda setTimeout ishlatish un:
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(list[5]);
            }, 5000);
        });
    } 
}

console.log("Passed here 0");
// Call via then/catch
maslahatBering(25)
    .then((data) => {
    console.log("Javob: ", data);    
})
    .catch((err) => {
    console.log("Error: ", err );    
});

console.log("Passed here 1");
// Call via asyn/await - to'lliq javob olmaguncha  keyingi qismlarga o'tmaydi
async function run() {
    let answer = await maslahatBering(25);
    console.log(answer);
    answer = await maslahatBering(70);
    console.log(answer);
    answer = await maslahatBering(41);
    console.log(answer);            
}
run();
