import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../Components/BaseURL";

export default function useMostrarViagem(path) {
    const [dados, setDados] = useState()


    useEffect(() => {
        axios
            .get(`${BASE_URL}${path}`)
            .then((res) => {
                // console.log(res.data.trips)
                setDados(res.data)
            })
            .catch((err) => {
                console.log(err.response.data)
            })
    }, [path])

    return { dados }
}