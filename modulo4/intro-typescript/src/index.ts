function checaTriangulo(a: number, b: number, c: number): string {
    if (a !== b && b !== c) {
        return "Escaleno";
    } else if (a === b && b === c) {
        return "Equilátero";
    } else {
        return "Isósceles";
    }
}

console.log(checaTriangulo(1, 1, 1))

function imprimeTresCoresFavoritas() {
    const cor1: string = process.argv[2]
    const cor2: string = process.argv[3]
    const cor3: string = process.argv[4]
    const cor: string[] = [cor1, cor2, cor3]
    console.table(cor)
}

imprimeTresCoresFavoritas()

function checaAnoBissexto(ano: number): boolean {
    const cond1: boolean = ano % 400 === 0
    const cond2: boolean = (ano % 4 === 0) && (ano % 100 !== 0)
    return cond1 || cond2
}

console.log(checaAnoBissexto(2021))

function comparaDoisNumeros(num1: number, num2: number) {
    let maiorNumero: number;
    let menorNumero: number;

    if (num1 > num2) {
        maiorNumero = num1;
        menorNumero = num2;
    } else {
        maiorNumero = num2;
        menorNumero = num1;
    }

    const diferenca: number = maiorNumero - menorNumero;

    return diferenca
}

console.log(comparaDoisNumeros(10, 3))

function checaRenovacaoRG(anoAtual: number, anoNascimento: number, anoEmissao: number): string {
    let idade = anoAtual - anoNascimento
    let tempoCarteira = anoAtual - anoEmissao

    if (idade <= 20) {
        return tempoCarteira >= 5 ? "passou dos 5 anos precisa renovar" : "ainda não passou os 5 anos"

    } else if (idade >= 20 || idade <= 50) {
        return tempoCarteira >= 10 ? "passou dos 10 anos precisa renovar" : "ainda não passou os 10 anos"

    } else if (idade > 50) {
        return tempoCarteira >= 15 ? "passou dos 15 anos precisa renovar" : "ainda não passou os 15 anos"

    } else {
        return "error"
    }
}

console.log(checaRenovacaoRG(2022, 1999, 2013))


const calculadora = (num1: number, num2: number, parametro: string): number | string => {
    switch (parametro) {
        case 'soma':
            return num1 + num2
        case 'sub':
            return num1 - num2
        case 'mult':
            return num1 * num2
        case 'maior':
            return num1 > num2 ? `${num1} é maior que ${num2}` : `${num2} é maior que ${num1}`
    }
}

console.log(calculadora(5, 10, process.argv[5]))

const god = (DNA: string) => {
    const RNA: string = DNA.replace(/A/g, 'U').replace(/T/g, 'A').replace(/C/g, 'g').replace(/G/g, 'c').toUpperCase()
    console.log(RNA)


}

god('ATTGCTGCGCATTAACGACGCGTA')

const rever = (texto: string): string => {
    return texto.split("").reverse().join("");
}

console.log(rever('lucas'))

const labenu = (idade: number, ensinoCompleto: boolean, horasLivres: number): string => {
    if (idade > 18 && ensinoCompleto && horasLivres > 20) {
        if(horasLivres < 40){
            return `Você pode estudar na Labenu no turno da noite!`
        } else {
            return `Você pode estudar na Labenu no turno integral!`
        }
    } else {
        return 'Você não pode estudar na Labenu'
    }
}

console.log(labenu(23, true, 25))