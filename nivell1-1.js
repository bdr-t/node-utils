const chalk = require('chalk');
module.exports = function timeoutRecursive(i){
    if (i === 11) return
    setTimeout(()=> {
        console.log(chalk.black.bgGreen(i))
        i++
        timeoutRecursive(i)
    }, 1000)
}

// timeoutRecursive(1)

