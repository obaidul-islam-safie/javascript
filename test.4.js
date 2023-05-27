//leap year ber ki vabe kore

function isLeapYear(year){
    if((year % 400 === 0) || ((year % 4 === 0) && (year % 100 !== 0))){
        console.log(`${year} is a leap yeat!`);
    }else{
        console.log(`${year} is not a leap yeat!`);
    }
        
}
isLeapYear(2026);