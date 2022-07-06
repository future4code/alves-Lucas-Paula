import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Perfil() {

    const [perfil, setPerfil] = useState({})


    useEffect(() => {
        getProfileToChoose('clara')
    }, [])


    const getProfileToChoose = function (aluno) {

        axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/person`)
            .then((respota) => {
                setPerfil(respota.data.profile)
                console.log(respota.data.profile)
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <div>
            <h2>Perfil</h2>
            <img src={perfil.photo} alt={perfil.photo_alt} />
            <p>{perfil.name}, {perfil.age}</p>
            <p>{perfil.bio}</p>
            <button onClick={() => getProfileToChoose('clara')}>Proximo Perfil</button>
        </div>
    )
}

export default Perfil