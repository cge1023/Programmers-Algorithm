let arr = [27, 8, 5, 13];

arr.sort((a, b) => {
    console.log(a, b);
    return a - b;
});

console.log(arr)