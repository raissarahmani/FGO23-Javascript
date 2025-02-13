let totalBelanja = 100000
let diskon

if(totalBelanja < 500000) {
    diskon = 0
} else if (totalBelanja >= 500000 && totalBelanja <= 1000000) {
    diskon = 0.05 
} else {
    diskon = 0.1
}

totalBayar = totalBelanja - (diskon*totalBelanja)
console.log(totalBayar)