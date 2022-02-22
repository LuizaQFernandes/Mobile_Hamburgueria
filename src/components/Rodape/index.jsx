import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles'

export function Rodape(props){
    return(
        <View>
            <Text style={styles.tituloProduto}>
                {props.tituloProduto}
            </Text>
            <Text style={styles.detalheProduto}>
                {props.detalheProduto}
            </Text>
        </View>
    )
}