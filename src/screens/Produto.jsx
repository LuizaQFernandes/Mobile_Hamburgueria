import React from 'react';
import {View, Text} from 'react-native';

import { styles } from './styles'
import { Cabecalho } from '../components/Cabecalho'
import { Rodape } from '../components/Rodape'


export function Produto(){
    return (
        <View style={styles.container}>
            <Cabecalho/>
            <Rodape tituloProduto='Catupiry e Bacon'
                    detalheProduto='Pão da casa, molho de tomate e molho especial'
            />
        </View>
    )
}