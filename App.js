import React, { useState } from 'react';
import { Button, View, Text, StyleSheet, TextInput } from 'react-native';
import Squirtle from './assets/components/Squirtle';
import Charizard from './assets/components/Charizard';
import Pokemon from './assets/components/Pokemon';

// Importar o arquivo de estilos externo
import Styles from './styles/Styles';

export default function App() {
  const [myText, setMyText] = useState('');

  return (
    <View style={Styles.container}>
      <Pokemon />

      {/*<View>
        <Text>ENTRADA:</Text>
        <TextInput value={variavel} 
          onChangeText={text => {
            mudaTexto(text)
          }}
        />

        <Text>SAÍDA:</Text>
        <Text>{variavel}</Text>
        </View>*/}
    </View>
  );
}

/*
const Estilos = StyleSheet.create({
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
    height: 360,
    margin: 20,
    padding: 20
  }
});*/