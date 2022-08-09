var red, blue, reset;
red = '\u001b[31m';
blue = '\u001b[34m';
reset = '\u001b[0m';

if (process.argv[2] && process.argv[3]) {
    console.log(`${blue} Olá, ${process.argv[2]} Você tem ${process.argv[3]} anos.`)
    console.log(`${blue} Olá, ${process.argv[2]} Você tem ${process.argv[3]} anos, em 7 anos você tera ${parseInt(process.argv[3]) + 7}`)
} else {
    console.log(`${red}Parametros invalidos ou foi digitado somente um, espera-se dois parametros!`)
}
