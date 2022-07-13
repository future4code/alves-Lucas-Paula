import Jupter from '../Img/Jupter.png'
import Marte from '../Img/Marte.png'
import Netuno from '../Img/Netuno.png'
import Mercurio from '../Img/Mercurio.png'
import Venus from '../Img/Venus.png'
import Saturno from '../Img/Saturno.png'
import Urano from '../Img/Urano.png'

export default function TrocaImgPost(item) {

    switch (item) {
        case 'Marte':
            return Marte
        case 'Jupter':
            return Jupter
        case 'Netuno':
            return Netuno
        case 'Mercurio':
            return Mercurio
        case 'Venus':
            return Venus
        case 'Saturno':
            return Saturno
        default:
            return Urano
    }
}