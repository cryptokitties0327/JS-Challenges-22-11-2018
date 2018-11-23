// Pick any four digit number and do the following:
// Rearrange the string of digits to form the largest and smallest 4-digit numbers possible.
// Take these two numbers and subtract the smaller number from the larger. 
// Suppose we choose the number 8082.
// 8820−0288=8532
// 8532−2358=6174
// 7641−1467=6174 
// It hits 6174 and then stops.
// Count also how many iterations loops are required to get to this point.
// Bonus points for recognising what 6174 is.


//attempt
function sortNum(string){

        //converting the number to an string array
        let counter = 0
            result = null
        
        while (result!=6174){
            const arr = string.split('').map(Number)
            //sort - sorting asc
            const sortAsc = arr.sort()
            // console.log(sortAsc)
            //concat - sortAsc
            var concatSortAsc = sortAsc.join('')
            // console.log(concatSortAsc);
            //sort - sorting dsc
            const sortDes = sortAsc.reverse()
            // console.log(sortDes)
            // concat - sortDes
            var concatSortDes = sortDes.join('')
            // console.log(concatSortDes);                 
            // result
            result = concatSortDes- concatSortAsc
            // console.log(result)
            counter ++
            string = result.toString();
        }
        return counter
      }
console.log(sortNum("8820"))

const getDigits = (num) => {
    return num.toString().split("").map(x => parseInt(x));
}

//
const kaprekar = (num) => {

    let idx = 0;
    let digits = getDigits(num);

    while (true) {
        let highestNum = parseInt([...digits].sort().reverse().join(""));
        let lowestNum = parseInt([...digits].sort().join(""));
        let diff = highestNum - lowestNum;
        console.log(`${highestNum} - ${lowestNum} = ${diff}`)

        if ([...getDigits(diff)].sort().join("") !== [...digits].sort().join("")) {
            digits = getDigits(diff);
            idx++;
        } else {
            break;
        }
    }
    return idx + 1;
}

console.log(kaprekar(8082));
