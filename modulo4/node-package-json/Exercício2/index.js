var red, blue, reset;
red = '\u001b[31m';
blue = '\u001b[34m';
reset = '\u001b[0m';

if (process.argv[2] && process.argv[3]) {
    switch (process.argv[2]) {
        case 'add':
            return console.log(`${blue} Resposta ${parseInt(process.argv[3] + process.argv[4])}`)
        case 'sub':
            return console.log(`${blue} Resposta ${parseInt(process.argv[3] - process.argv[4])}`)
        case 'mult':
            return console.log(`${blue} Resposta ${parseInt(process.argv[3] * process.argv[4])}`)
        case 'div':
            return console.log(`${blue} Resposta ${parseFloat(process.argv[3] / process.argv[4])}`)
    }
} else {
    console.log(`${red} Parametros invalidos ou foi digitado somente um, espera-se dois parametros!`)
}
