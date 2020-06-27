import React, {useEffect, useState} from 'react';
import { RestService } from '../Service/RestService'
import Typography from '@material-ui/core/Typography';

export default function Saldo(props){
    const [saldo, getSaldo] = useState()
    const usuarioId = !!props.usuario ? props.usuario.id : '';

    useEffect(() => {
            RestService.GET.findUser(usuarioId)
                .then(response => getSaldo(response.data))
        }, [])

    return(
        <Typography variant="h6">
            Saldo: ${saldo}
        </Typography>
    )
}