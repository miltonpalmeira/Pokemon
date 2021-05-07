import React from 'react';
import { View, Image, Text } from 'react-native';

export default function() {
    return(
        <View>
            <Image source={require('../img/Charizard.png')}
                style={{width: 260, height: 200, alignSelf: 'center'}}
                resizeMode="cover"
            />
            <Text style={{marginTop: 20, textAlign: 'justify'}}>
                Charizard é um pokémon de tipo fogo e voador. 
                Pokémon tipo fogo são fortes contra pokémon do 
                tipo Grama, Gelo, Inseto, Aço, Fada mas eles são 
                fracos contra pokémon do tipo Fogo, Água, 
                Pedra, Dragão.
            </Text>
        </View>
    );
}