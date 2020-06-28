import React, {useEffect, useState} from 'react';
import { RestService } from '../Service/RestService'
import Typography from '@material-ui/core/Typography';

export default function Saldo(props){
    const [saldo, setSaldo] = useState()
    const usuario = props.usuario;
    const isUser = props.isUser

    useEffect(() => {
            RestService.GET.getSaldo(usuario.id, isUser)
                .then(response => {
                    setSaldo(response.data)
                })
        }, [isUser, usuario.id]
    )

    return(
        <Typography variant="h6" style={{marginLeft: "65vw"}}>
            Saldo: ${saldo}
        </Typography>
    )
}