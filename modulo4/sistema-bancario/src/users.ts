type extract = {
    value: number,
    date: string,
    description: string
}

type user = {
    name: string,
    cpf: string,
    nasc: string,
    balance: number,
    extract: extract[]
}

export const users: user[] = []