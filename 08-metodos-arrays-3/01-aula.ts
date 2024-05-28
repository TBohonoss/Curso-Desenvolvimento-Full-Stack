const numeros = [5, 3, 2, 19, 67, 9]

numeros.sort(function(item1, item2){
    if (item1 < item2) {
        return -1
    } else if (item1 > item2) {
        return 1
    } else {
        return 0
    }
})

console.log(numeros);
