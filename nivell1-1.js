function timeoutRecursive(i){
    if (i === 11) return
    setTimeout(()=> {
        console.log(i)
        i++
        timeoutRecursive(i)
    }, 1000)
}

timeoutRecursive(1)

