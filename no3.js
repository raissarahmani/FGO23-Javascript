let temp = 0
let unit = "C"

if(typeof temp !== "number") {
    console.log("Suhu harus dalam bentuk number")
} else {
    if(unit === "C") {
        let unitR = temp * 4/5
        let unitF = temp * 9/5 +32
        let unitK = temp + 273
        console.log(`${temp} dalam Celcius sama dengan ${unitR} Reamur, ${unitF} Fahrenheit, ${unitK} Kelvin`)
    } else if (unit === "R") {
        let unitC = temp * 5/4
        let unitF = temp * 9/4 +32
        let unitK = temp * 5/4 + 273
        console.log(`${temp} dalam Reamur sama dengan ${unitC} Celcius, ${unitF} Fahrenheit, ${unitK} Kelvin`)
    } else if (unit === "F") {
        let unitC = (temp-32) * 5/9
        let unitR = (temp-32) * 4/9
        let unitK = (temp-32) * 5/9 + 273
        console.log(`${temp} dalam Fahrenheit sama dengan ${unitC} Celcius, ${unitR} Reamur, ${unitK} Kelvin`)
    } else if (unit === "K") {
        let unitC = (temp-273)
        let unitR = (temp-273) * 4/5
        let unitF = (temp-273) * 9/5 + 32
        console.log(`${temp} dalam Kelvin sama dengan ${unitC} Celcius, ${unitR} Reamur, ${unitF} Fahrenheit`) 
    } else {
        console.log("Satuan tidak sesuai")
    }
}


