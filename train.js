/*
F-TASK: 

Shunday findDoublers function tuzing, 
unga faqat bitta string argument pass bolib, agar stringda bir hil harf qatnashgan bolsa true,
qatnashmasa false qaytarishi kerak. 
MASALAN: getReverse("hello") return true return qiladi.
*/

function findDoublers(string) {
  let seen = [];

  for (let i = 0; i < string.length; i++) {
    console.log("Hozirgi harf:", string[i]);
    console.log("Oldin ko'rilganlar:", seen);

    if (seen.includes(string[i])) {
      console.log("Takroriy harf topildi:", string[i]);
      return true;
    }

    seen.push(string[i]);
    console.log("Arrayga qo'shildi:", seen);
    console.log("-------------------");
  }

  console.log("Takroriy harf topilmadi");
  return false;
}

console.log("Natija:", findDoublers("hello"));



/*
E-TASK: 

Shunday function tuzing, u bitta string argumentni qabul qilib
osha stringni teskari qilib return qilsin.
 MASALAN: getReverse("hello") return qilsin "olleh".
*/


function reverseWord(word) {
  const newWord = word.split("").reverse().join("");
  console.log(`${newWord}`);
}
reverseWord("hello");
reverseWord("good");



/*
D-TASK: 

Shunday class tuzing tuzing nomi Shop,
 va uni constructoriga 3 hil mahsulot pass bolsin, 
 hamda classning 3ta methodi bolsin, biri qoldiq, biri sotish va biri qabul. 
 Har bir method ishga tushgan vaqt ham log qilinsin. 
 MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() return hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud!
  shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq() return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!
*/

class Shop {
  constructor(non, lagmon, cola) {
    this.non = non;
    this.lagmon = lagmon;
    this.cola = cola;
  }

  getTime() {
    const now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`;
  }


  sotish(mahsulot, son) {
    this[mahsulot] -= son;
    console.log(`Hozir ${this.getTime()}da ${son}ta ${mahsulot} sotildi`);
  }

  qabul(mahsulot, son) {
    this[mahsulot] += son;
    console.log(`Hozir ${this.getTime()}da ${son}ta ${mahsulot} qabul qilindi`);
  }

  qoldiq() {
    return `Hozir ${this.getTime()}da ${this.non}ta non, ${this.lagmon}ta lagmon va ${this.cola}ta cola mavjud!`;
  }
}

const shop = new Shop(4, 5, 2);

console.log(shop.qoldiq());

shop.sotish('non', 3);
shop.qabul('cola', 4);

console.log(shop.qoldiq());



/*
C-TASK: 

Shunday function tuzing, u 2ta string parametr ega bolsin,
hamda agar har ikkala string bir hil harflardan iborat bolsa
 true aks holda false qaytarsin. 
 MASALAN checkContent("mitgroup", "gmtiprou") return qiladi true.
*/

function checkContent(stringOne, stringTwo) {
  stringOne = stringOne.split("").sort().join("");
  stringTwo = stringTwo.split("").sort().join("");

  if (stringOne.length === stringTwo.length && stringOne === stringTwo) {
    console.log(`${stringOne} so'zidagi harflar ${stringTwo} dagi harflar bilan bir xil!!!`);
  } else {
    console.log(`${stringOne} so'zidagi harflar ${stringTwo} dagi harflar bilan bir xil EMAS!!!`);
  }
}

checkContent("Mitgroup", "gmtiprou");
checkContent("hello", "world");



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

  for (let i = 0; i < word.length; i++) {
    if (word[i] === letter) {
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

async function maslahatBering(a) {
  if (typeof a !== 'number') throw new Error("insert a number");
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
    console.log("Error: ", err);
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
