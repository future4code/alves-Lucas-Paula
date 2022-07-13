export const trocaTela = (navigate) => {

    navigate('/')
}

export const principal = (navigate) => {

    navigate('principal')

}

export const voltar = (navigate) => {

    navigate(-1)
}

export const telaLogin = (navigate) => {

    navigate('login')

}

export const admin = (navigate) => {

    navigate('/admin')

}

export const deslogar = (navigate) => {
    localStorage.clear()
    navigate('/login')
}

export const aplicacao = (navigate) => {

    navigate('/aplicacao')

}
