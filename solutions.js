// setAlarm
// Write a function named setAlarm that has two arguments
function setAlarm (employed, vacationing){
    if (employed === true){
        if (vacationing === false){
            return true
        }
        else if (vacationing === true){
            return false
        }
    }
    else{
        return false
    }
}

let e = setAlarm(true,false)
console.log("testing setAlarm")
console.log("////////////////////////////////")
console.log(e)
console.log("////////////////////////////////")

// Count Odd Numbers
function oddNumberCount(num){
    if (typeof num != 'number') {
        console.log("thats not a number buddy trye again")
    } else {
        if (num < 1){
            console.log("Only positive numbers allowed bro")
        }
        else{
            numbers = []
            for(let i = 1; i < num; i++){
                if (i % 2 != 0){
                    numbers.push(i)
                }
            }return numbers
        }
        }
}

console.log("testing Count Odd Numbers")
console.log("////////////////////////////////")
console.log(oddNumberCount(7))
console.log("////////////////////////////////")

// Disemvoweling Trolls

function trollsBeGone(sentence){
    let newString = ""
    if (typeof sentence != 'string') {
        console.log("you did't enter a sentence buddy try again")
    }
    else{
        s = sentence.replace(/[aeiouAEIOU]/g, "")
        return s
    }
    /////////////////
    // long way
    /*else {
        for (let i = 0; i < sentence.length;i++){
            if (sentence[i] != "a" && sentence[i] != "e" && sentence[i] != "i" && sentence[i] != "o" && sentence[i] != "u" &&
            sentence[i] != "A" && sentence[i] != "E" && sentence[i] != "I" && sentence[i] != "O" && sentence[i] != "U"){
                newString += sentence[i]
            }
        }
    }return newString
    /////////////////
*/}
console.log("testing Disemvoweling Trolls")
console.log("////////////////////////////////")
console.log(trollsBeGone("This website is for losers LOL"))
console.log("////////////////////////////////")

//Bank Account Summary
let bankinfo = {
    savings:600,
    checking:800,
    moneyMarket:200,
    creditCard:-2000
}

function bankAccountSummary(bankinfo){
    let savings = bankinfo.savings
    let checking = bankinfo.checking
    let moneyMarket = bankinfo.moneyMarket
    let creditCard = bankinfo.creditCard
    let bankTotal = savings+checking+moneyMarket+creditCard
    return bankTotal
}
console.log("testing Bank Account Summary")
console.log("/////////////////////////////")
console.log(bankAccountSummary(bankinfo))
console.log("/////////////////////////////")

function inTheRed(total){
    if (total < 0){
        return true
    }
    else{
        return false
    }
}
console.log("testing inTheRed")
console.log("/////////////////////////////")
console.log(inTheRed(bankAccountSummary(bankinfo)))
console.log("/////////////////////////////")



