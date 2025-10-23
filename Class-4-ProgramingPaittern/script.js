console.log('jai shree ram');
let prompt = require('prompt-sync')();//last me () esliye laga rhe hai kyuki ye ak funtoin hai . ba eska use ham kahibhi kar sakte hai. 
// console.log('hello');//hello
// console.log('world');//world
// //ham hello world print kar rhe hai lekin alg alg log use kar rhe hai to print bhi alg alg line me hoga lekin agar hame likhna alg alg ha lekin print ak hi line me karna hai to process.stdout.write('vlaue'); ka use karna padega ye window ka method nhi hai to ese ha browser par jab dekhenge to vaha par ye error dekhayga eska output dekhne ke liye hame node environment ka use karna hoga node ke terminal me ham eska output dekh sakte hai.

// //example -- 
// process.stdout.write('hello ');
// process.stdout.write('world');
// //hello world
// //jaisa hamne set kiya tha ki likhenge alg alg lekin aayga sem line me.To agar hame koe aisi value print karni ho jisko likhenge alg alg lineme lekin result sem line chahiye to ham es funtion ka use karenge lekin ye node ka funtion to node me hi kam karega.




//Jab ham Prompt ka use karte hai to browser par input lete hai lekin agar hame apne terminalme input lena hai to kya kare ? -- 
//To terminal me input lene ke liye hame ak npm pakage install karna hoga hame bas terminal me -- npm i prompt-sync -- es comman ko copy past karna hai or enter karna hai kam ho jayga.
//ab agar hame es prompt ka use karna hia to use import karna hoga yani require karna ho ga top par -- 

// let a = prompt('Enter Name ');
// process.stdout.write(a);
// //bas ab node me run karna hai.

// //Enter Name amar
// // amar

// //bas ho gya hamne name enter kiya or or process ne terminal me hamare name ko pritn kar diya.



// //Ab agar hame 5 star print karne ho
// // *
// // *
// // *
// // *
// // *
// // kuchh aise.
// console.log('*');
// console.log('*');
// console.log('*');
// console.log('*');
// console.log('*');
// //kuchh aise kar sakte hai or ye jo log command hai ye node me bhi kam karti hai lekn jo porcess comand hai vo browser par nhi chalti hai.


// //Ab Mai chahata hu ki mujhe stars horizontal me chahiye * * * * * kuchh aise.
// //to eske liye ham process ka use akrenge.
// process.stdout.write('* ');
// process.stdout.write('* ');
// process.stdout.write('* ');
// process.stdout.write('* ');
// process.stdout.write('* ');
// //* * * * *

//ab hame en dono kam ko loop se karenge.

// for(let i = 1; i <= 5; i++){
//     console.log('*');
// }
// //yaha par hamra 5 bar * print ho jayga bari bari se. ab hame horizontal me chahiye.

// let i = 1;
// while(i <= 5){
//     process.stdout.write('* ');
//     i++
// }
// //yaha par horizontaly hamra * print ho jayga 5 bar;



// //ab user se lete hai ki use kitne star prit karn hai.
// let star = prompt('etner number toprint star ');//20
// for(let i = 1; i <= star;  i++){
//     process.stdout.write('* ');//* * * * * * * * * * * * * * * * * * * * 
// }


//ab hamne loop se * to print kar diye hai ham jitne chahe utne print kar sakte hai -- lekin ab hame 5 * print karne hai lekn 5 lines me 5 5 stars hone chaiye yanni jitni row hogi utne columns honge.
// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *
//kuchh aise.



// for(let i = 1; i<=5; i++){
//     process.stdout.write('* ');//ye loop 5 start print karega
// }
// console.log(' ');
// //ab hame bar bar 5 5 stars print karna hai.to ham esi loop ko agar 5 bar copy past kar de to kam ho jayga lekin sare stars ak line me hi aajaynge to next line ke liye ham khali console kar denge.
// for(let i = 1; i<=5; i++){
//     process.stdout.write('* ');//ye loop 5 start print karega
// }
// console.log(' ');

// for(let i = 1; i<=5; i++){
//     process.stdout.write('* ');//ye loop 5 start print karega
// }
// console.log(' ');

// for(let i = 1; i<=5; i++){
//     process.stdout.write('* ');//ye loop 5 start print karega
// }
// console.log(' ');

// for(let i = 1; i<=5; i++){
//     process.stdout.write('* ');//ye loop 5 start print karega
// }
// * * * * *  
// * * * * *
// * * * * *
// * * * * *
// * * * * *

//johame print karna tha vo hamne kar diya.
//an codition ye aati hai ki hame 5 rows chaiye to eska matlab hai hame 50 bar for loop ko likhna padega lekin kya ho agar ham ak or loop banay jsime ham es loop ko rakh de or 1st loop se bole ki 2nd loop ko tum 50 bar chalao to -- 


// for(let i = 1; i <= 6; i++){
//     for(let j = 1; j<=6; j++){
//         process.stdout.write('* ');
//     }
//     console.log();
// }
// // * * * * * *
// // * * * * * *
// // * * * * * *
// // * * * * * *
// // * * * * * *
// // * * * * * *
// //To yaha par jitni bar 1st loop chalega jitni bar 2nd loop ko chalayga or 2nd loop utni bar apna kam karega.



// //ab hame right angle banana hai.
// // *
// // **
// // ***
// // ****
// // *****
// // kuchh aisa --- 

// for(let i = 1; i <= 5; i++){
//     for(let j = 1; j <= i; j++){
//         process.stdout.write('* ');
//     }
//     console.log();//ye log next line ke liye hai.
// }
// // *     
// // * *   
// // * * * 
// // * * * *
// // * * * * *

// //to yha par ham outer loop ko 5 bar chala rhe hai jo hamre inner loop ko 5 bar control karega or 5 row print karega to yaha par ham inner loop ko outer loop ke jitna esliye chala rhe hai kyuki hame right angle pattern chaiye --- 
// //jab outer loop chalega to uski value hogi 1 or inner loop ko ham oter loop ke jitna hi chal rhe hai yani outer loop me 1 hai to inner loop bhi 1 bar chalega matlab 1 *  print hoga jab dusri bar chalega to inner loop bhi 2 bar chalega yani ** print hoga aise hi ham outer loop ko 5 bar chala rhe hai to inner bhi 5 bar bari bari se chalega or bari bari se * print karega or hamra pattern ban jayga.




// //ab ham reverse pattern banate hai eska ---- 
// for(let i = 5; i >= 1; i--){
//     for(let j = 1; j <= i; j++){
//         process.stdout.write('* ');
//     }
//     console.log();
// }
// // * * * * * 
// // * * * *
// // * * *
// // * *
// // *



// // next pattern is -- 
// // 1
// // 12
// // 123
// // 1234
// // 12345

// for(let i = 1; i <= 5; i++){
//     for(let j = 1; j <= i; j++){
//         process.stdout.write(j+' ');//process.stdout -- hamesa string print karta hai to ham esme string ka space add kar rhe hai nhi karenge to error aaygi.
//     }
//     console.log();
// }
// // 1 
// // 1 2
// // 1 2 3
// // 1 2 3 4
// // 1 2 3 4 5



//next pattern is -- 
//A
//AB
//ABC
//ABCD
//ABCDE


// for(let i = 1; i <= 5; i++){
//     let ascii = 65 ;
//     for(let j = 1; j <= i; j++){
//         process.stdout.write(String.fromCharCode(ascii)+" ");
//         ascii++;
//     }
//     console.log()
// }
// // 65
// // 65 66
// // 65 66 67
// // 65 66 67 68  
// // 65 66 67 68 69

// //thik hai to kam ho chuka hai lekin yaha to number dikh rha hai hame to ABCDE chaiye to ye number nhi hai ye abcd ki ascii value hai yani 65 number se Capital A banta hai 66 se capital B banta hai hamne ascii value ka use esliye kiya hai kyuki js me ham caractor ko ++ nhi kar sakte hai. to hame ab bas etna karna hai ki ascii value ko caractor me convert karna hai.
// //to value ko string me badalne ke liye String.from.CharCode(ascii) -- funtion ka use karte hai.

// // A
// // A B
// // A B C
// // A B C D
// // A B C D E

// //kam ho gya ...


//2nd example --

// let n = Number(prompt('Enter a number '));

// for(let i = 1; i <= n; i++){
//     let ascii = 65;
//     for(let j = 1; j<=i; j++){
//         process.stdout.write(String.fromCharCode(ascii)+" ");
//         ascii++
//     }
//     console.log();
// }

// // A 
// // A B
// // A B C
// // A B C D
// // A B C D E
// // A B C D E F
// // A B C D E F G
// // A B C D E F G H
// // A B C D E F G H I


// //reverse star 

// let maxnum = Number(prompt('Enter a max numer: '));//5
// let num = Number(prompt('Enter a numer: '));//1
// for(let i = maxnum; i >= num; i--){
//     for(let j = 1; j <= i; j++){
//         process.stdout.write('* ');
//     }
//     console.log();
// }
// // * * * * * 
// // * * * *
// // * * *
// // * *
// // *


//merror right angle traiangle -- 
//merror pattern banane ke liye hame ulte side par * chaiye to mana har row me 5 * hai to agar hame 1st row me 1 * chiye lekin ulta side me to ham use 4 bar space ka dhakka denge to last me chala jayga aise hi 2nd row me ** star honge to unhe 3 bar dhakka denge uske bad 2 bar dhakka denge or last me 1 bar denge.
//or kuchh es time pa pattern abnega
//         *
//       * *
//     * * *
//   * * * *
// * * * * *
//agar es pattorn ko dhyan se dekhe or upar vale pattern ko denge to upar vala space dene layakh to lag rha hai matlab agar ham "*" na dekhar " " sirf space de de to kam ho sakta hai.

// let n = Number(prompt('Enter a numebr : '));

// for(let i = 1; i <= n; i++){

//     //invert
//     for(let j = 1; j <= n-i; j++){
//         process.stdout.write("  ");//yaha par 2 space dena hoga;
//     }
//     //right
//     for(let j = 1; j <= i; j++){
//         process.stdout.write("* ");
//     }
//     console.log();
// }
// //         * 
// //       * *
// //     * * *
// //   * * * *
// // * * * * *
// //upar 2 space denge tabhi ye pattern banega nhito 
// //ye banega.
// //     *
// //    * *
// //   * * *
// //  * * * *





// //homeword me hame piramid banana hai.
// for(let i = 1; i<=5; i++){
//     for(let j = 1; j<=5-i; j++){
//         process.stdout.write(' ');//single space
//     }

//     for(let j = 1; j <= i; j++){
//         process.stdout.write('* ');
//     }

//     console.log();
// }
// //yaha par yani pattern print ho rha hai kin ham last loop jab * ko print kar rhe hai to voha par ham ak space de nge to piramid print hoga kyuki upar vala loop left se space dega or jab star print hoga tab ham right se space de rhe hai esliye piramid print ho rha hai niche vale loop ka space hataynge to traiangle vala loop print hoga.
// //            * 
// // //       * *
// // //     * * *
// // //   * * * *
// // // * * * * *


// // //  *     
// //    * *    
// //   * * *   
// //  * * * *  
// // * * * * * 





//X pattern --- 

// for(let i = 1; i <= 5; i++){
//     for(let j = 1; j <= 5; j++){
//         if(i === j || i + j === 5+1) {
//             process.stdout.write('* ');
//         }

//         else {
//             process.stdout.write('  ');//duble space
//         }
//     }
//     console.log()
// }
// // *       * 
// //   *   *
// //     *
// //   *   *
// // *       *



//V pattern -- //bas 2 se * kar denga hai 5 ko
for(let i = 1; i <= 5; i++){
    for(let j = 1; j <= 2*5-1; j++){
        if(i === j || i + j === 2*5) {
            process.stdout.write('* ');
        }

        else {
            process.stdout.write('  ');//duble space
        }
    }
    console.log()
}
// *               * 
//   *           *   
//     *       *     
//       *   *
//         *


