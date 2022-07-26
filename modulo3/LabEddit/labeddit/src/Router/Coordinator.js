export const login = (navigate) => {
    const token = localStorage.getItem('token')
    if (token) {
        navigate('/listapost')
    } else {
        navigate('/')
    }
}

export const deslogar = (navigate) => {
    localStorage.clear()
    navigate('/')
}

export const cadastro = (navigate) => {
    localStorage.clear()
    navigate('/cadastro')
}

export const listaPost = (navigate) => {

    navigate('/listapost')
}

export const post = (navigate, id) => {
    navigate(`/post/${id}`)
}