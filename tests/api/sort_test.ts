const str: number[] = [11, 2, 32, 2];


const dup = str.filter((value, index) => {
    return str.indexOf(value) !== index;
})
console.log(dup);

