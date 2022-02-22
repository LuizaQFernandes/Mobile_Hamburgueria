import {StyleSheet} from 'react-native';
import {theme} from '../../styles/theme'

export const styles = StyleSheet.create({
    tituloProduto:{
        fontFamily: theme.fonts.primary700,
        color: theme.colors.brown,
        fontSize: 34
    },
    detalheProduto: {
        fontFamily: theme.fonts.primary500,
        color: theme.colors.gray,
        fontSize: 14,
        marginVertical: 32,
        lineHeight: 20
    }
})