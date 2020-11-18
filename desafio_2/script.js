function inverte(arr){
    let arr2 = []
    for(let i = arr.length; i > 0; i--){
        arr2.push(arr[i-1])
    }

    return console.log(arr2)
}

inverte([1, 2, 3, 4])