import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroudColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerBotoes: {
        width: 200,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    containerFilho: {
        borderWidth: 1,
        borderColor: '#ccc',
        width: 300,
        height: 420,
        margin: 20,
        padding: 20
    }
});