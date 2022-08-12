// 1

function recebeNomeData(nome: string, data: string) {

    const dataArray = data.split('/')

    return `Olá me chamo ${nome}, nasci no dia ${dataArray[0]} do mês de ${dataArray[1]} do ano de ${dataArray[2]}`
}

console.log(recebeNomeData('Lucas', '08/03/1999'))

// 2

const mostrarTipo = (type: any) => {
    console.log(typeof type)
}

mostrarTipo(1)

// 2


enum genero {
    ACAO = "ação",
    DRAMA = "drama",
    COMEDIA = "comédia",
    ROMANCE = "romance",
    TERROR = "terror"
}
type catalogo = {
    nome: string,
    lancamento: number,
    generofilme: genero
}
const filme = (nome: string, lancamento: number, generos: any, pontosSite?: number): any => {

    if (pontosSite) {
        const filmes = {
            nome: nome,
            lancamento: lancamento,
            generofilme: generos,
            pontosSite: pontosSite
        }
        return filmes
    } else {
        const filmes: catalogo = {
            nome: nome,
            lancamento: lancamento,
            generofilme: generos
        }
        return filmes
    }
}

console.table(filme('teste', 2021, genero.ACAO, 10))

// 4

enum setor {
    MARKETIN = 'marketing',
    VENDAS = 'vendas',
    FINANCEIRO = 'financeiro'
}

type funcionarios = {
    nome: string,
    salario: number,
    setor: setor,
    presencial: boolean
}

const funcionario: funcionarios[] = [
    { nome: "Marcos", salario: 2500, setor: setor.MARKETIN, presencial: true },
    { nome: "Maria", salario: 1500, setor: setor.VENDAS, presencial: false },
    { nome: "Salete", salario: 2200, setor: setor.FINANCEIRO, presencial: true },
    { nome: "João", salario: 2800, setor: setor.MARKETIN, presencial: false },
    { nome: "Josué", salario: 5500, setor: setor.FINANCEIRO, presencial: true },
    { nome: "Natalia", salario: 4700, setor: setor.VENDAS, presencial: true },
    { nome: "Paola", salario: 3500, setor: setor.MARKETIN, presencial: true }
]

function empresa(funcionarios: any, setor: any): any {

    return funcionarios.filter((area: any) => setor === area.setor && area.presencial === true)

}

console.table(empresa(funcionario, setor.MARKETIN))

// 5

enum user {
    COMMUM = 'commum',
    ADMIN = 'admin',
}

type listaFuncionarios = {
    name: string,
    email: string,
    role: user
}

type PermissionUser = listaFuncionarios & {
    role: user
}

const listaPessoas: PermissionUser[] = [
    { name: "Rogério", email: "roger@email.com", role: user.COMMUM },
    { name: "Ademir", email: "ademir@email.com", role: user.ADMIN },
    { name: "Aline", email: "aline@email.com", role: user.COMMUM },
    { name: "Jéssica", email: "jessica@email.com", role: user.COMMUM },
    { name: "Adilson", email: "adilson@email.com", role: user.COMMUM },
    { name: "Carina", email: "carina@email.com", role: user.ADMIN }
]

function pegaEmail(array: any, user: any): any {

    const novoArray = array.filter((urs: any) => user === urs.role).map((email: any) => email.email)
    return novoArray

}

console.table(pegaEmail(listaPessoas, user.ADMIN))

// 6

type cadastroCliente = {
    cliente: string,
    saldoTotal: number,
    debitos: number[]
}

const clientes: cadastroCliente[] = [
    { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
    { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
    { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
    { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
    { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
    { cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

const somaValor = (array: any): any => {

    const novoArray = array.map((saldo: any) => {
        const initialValue = 0;
        let soma = saldo.debitos.reduce((previousValue: any, currentValue: any) => previousValue + currentValue, initialValue)
        saldo.saldoTotal = saldo.saldoTotal - soma
        saldo.debitos = []
        return saldo
    }).filter((negativo: any) => negativo.saldoTotal < 0)

    return novoArray

}

console.table(somaValor(clientes))

// 7

type stoque = {
    nome: string,
    quantidade: number,
    valorUnitario: number | string
}

const itemEstoque: stoque[] = [
    { nome: "MacMugffin", quantidade: 37, valorUnitario: 51.040 },
    { nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0 },
    { nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5 },
    { nome: "O precioso", quantidade: 1, valorUnitario: 9181.923 },
    { nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17 },
    { nome: "Plumbus", quantidade: 13, valorUnitario: 140.44 },
    { nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915 }
]

const ajustaPreco = (preco: number): string => {
    const valorAjustado: string = preco.toFixed(2).replace('.', ',')
    return "R$ " + valorAjustado
}

const atualizaEstoque = (array: any): any => {

    const novoArray = array.map((item: any) => {
        item.valorUnitario = ajustaPreco(item.valorUnitario)
        return item
    })
    return novoArray
}

console.table(atualizaEstoque(itemEstoque))

// 8


function checaRenovacaoRG(anoNascimento: string, anoEmissao: string): boolean {
    let idade = new Date(anoNascimento)
    let anoDeEmissao = new Date(anoEmissao)
    let anoAtual = new Date('12/08/2022')

    const diference = Math.abs(anoAtual.getTime() - idade.getTime());
    const tempo = Math.abs(anoAtual.getTime() - anoDeEmissao.getTime())

    let diferencaIdade = Math.ceil(diference / (1000 * 3600 * 24));
    diferencaIdade = diferencaIdade / 365

    let diferencaValidade = Math.ceil(tempo / (1000 * 3600 * 24));
    diferencaValidade = diferencaValidade / 365

    if (diferencaIdade <= 20) {
        if (diferencaValidade >= 5) {
            return true
        } else {
            return false
        }
    } else if (diferencaIdade >= 20 || diferencaIdade <= 50) {
        if (diferencaValidade >= 10) {
            return true
        } else {
            return false
        }

    } else if (diferencaIdade > 50) {
        if (diferencaValidade >= 15) {
            return true
        } else {
            return false
        }
    }
}

console.log(checaRenovacaoRG('08/03/1999', '01/01/2013',))

// 9

function fatorial(fatorial: string): number | string {

    const stringArray = fatorial.split('')

    if (stringArray.length <= 1) {
        return 'Não é possivel fazer a equação com o valor digitado!'
    } else {
        let resultado = stringArray.length
        for (let i = 1; i < stringArray.length; i++) {
            resultado *= i
        }
        return resultado
    }
}

console.log(fatorial('abcdef'))

// 10


const recebeCPF = (CPF: string) => {

    const array = CPF.replace(/[^0-9]/g, '')
    let arrayFinal: number[] = []
    let valorLogico1 = 10
    let valorLogico2 = 11
    let teste: number[] = []
    let teste2: number[] = []
    let valorFinal1 = 0
    let valorFinal2 = 0

    for (let i = 0; i < 9; i++) {
        arrayFinal[i] = parseInt(array[i])
    }

    for (let i = 0; i < 9; i++) {
        teste[i] = parseInt(array[i])
        teste[i] *= valorLogico1
        valorFinal1 = valorFinal1 + teste[i]
        valorLogico1 -= 1
    }

    valorFinal1 = valorFinal1 % 11
    valorFinal1 = 11 - valorFinal1

    for (let i = 0; i < 10; i++) {
        teste2[i] = arrayFinal[i]
        teste2[i] *= valorLogico2
        valorFinal2 = valorFinal2 + teste2[i]
        valorLogico2 -= 1
    }

    valorFinal2 = valorFinal2 % 11
    valorFinal2 = 11 - valorFinal2

    if (valorFinal1 === 0 || valorFinal1 === 1) {
        arrayFinal.push(0)
        if (valorFinal2 === 0 || valorFinal2 === 1) {
            arrayFinal.push(0)
            return true
        } else {
            arrayFinal.push(valorFinal2)
            return false
        }
    } else if (valorFinal1 <= 10) {
        arrayFinal.push(valorFinal1)
        if (valorFinal2 === 0 || valorFinal2 === 1) {
            arrayFinal.push(0)
            return true
        } else {
            arrayFinal.push(valorFinal2)
            return false
        }
    }
}

console.table(recebeCPF('11024904660'))