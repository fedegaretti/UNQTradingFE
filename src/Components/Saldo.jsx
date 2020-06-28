import React, {useEffect, useState} from 'react';
import { RestService } from '../Service/RestService'
import Typography from '@material-ui/core/Typography';
import axios from "axios";

export default function Saldo(props, ref){
    const [saldo, setSaldo] = useState()
    const usuarioId = !!props.usuario ? props.usuario.id : '';
    const getSaldo = () => {
        /*
            RestService.GET.findUser(usuarioId)
                .then(response => getSaldo(response.data))
                */
        axios.get("https://visualizarsaldo.free.beeceptor.com/")
            .then(response => {
                setSaldo(response.data.saldo)
            })
    }

    useEffect(() => {
            getSaldo()
        }, []
    )

    return(
        <Typography variant="h6" style={{marginLeft: "70vw"}}>
            Saldo: ${saldo}
        </Typography>
    )
}