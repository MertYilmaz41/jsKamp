let sayi1 = 220;
let sayi2 = 284;
let toplam1 = 0;
let toplam2 = 0;
let toplam3 = 0;

//ARKADAŞ SAYILAR
function friendNumbers(sayi3,sayi4) {

    for (let i = 1; i < sayi3; i++) {
        if (sayi3 % i == 0) 
        {
            toplam1 = toplam1 + i
        }
    }
    
    for (let x = 1; x < sayi4; x++) {
        if (sayi4 % x == 0) 
        {
            toplam2 = toplam2 + x    
        }  
    }
    if (sayi3==toplam2 && sayi4==toplam1)  
    {
        console.log("Bu iki sayı arkadaştır");       
    }
     else
    {
        console.log("Bu iki sayı arkadaş değildir.");
    }
}

friendNumbers(220,284);

console.log("------------------------------------")


//Mükemmel Sayılar
//1000'e kadar olan mükemmel sayıları yazdıran fonksiyon
function perfectNumbers() {
    for (let x = 1; x < 1000; x++) {
        let toplam4 = 0;
       for (let i = 1; i < x; i++) {
            if (x % i ==0) {
                toplam4 = toplam4 + i
           } 
        }  
        if (i == toplam4) 
        {
            console.log(i + " " + "Mükemmel sayı")    
        }
    }
}


perfectNumbers();

console.log("------------------------------------")

//Asal sayı bulmaya yarayan fonksiyon.
function primeNumber(number) {
    for (let i = 2; i < number; i++) {
        if (number % i ==0) {
            return false;
        }  
        else
        {
            console.log(number + " " + "bir asal sayıdır.")
        }
    }
    return true;
    
}

primeNumber(5);


