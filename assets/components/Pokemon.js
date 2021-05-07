import React, { useState } from 'react';
import { View, Text, Image, Button } from 'react-native';
import Styles from '../../styles/Styles';
import { Audio } from 'expo-av';

export default function () {
    const [img, setImg] = useState();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    
    async function loadCharizard() {
        setImg(require('../img/charizard.png'));
        setName('Charizard');
        setDescription(`Charizard é um pokémon de tipo fogo e voador. Pokémon tipo fogo são fortes contra pokémon do tipo Grama, Gelo, Inseto, Aço, Fada mas eles são fracos contra pokémon do tipo Fogo, Água, Pedra, Dragão.`);
        const sound = new Audio.Sound();
        try {
            await sound.loadAsync(require('../sounds/som.mp3'));
            await sound.playAsync();
            
            //await sound.unloadAsync();
        } catch (error) {
            console.log('Erro');
        }
    }

    function loadSquirtle(){
        setImg(require('../img/squirtle.png'));
        setName('Squirtle');
        setDescription(`A concha de Squirtle não é usada apenas para proteção. A forma arredondada da concha e as ranhuras na sua superfície ajudam a minimizar a resistência na água, permitindo que este Pokémon nade a altas velocidades.`);
    }

    return (
        <View style={Styles.container}>
            <View style={Styles.containerFilho}>
                <Text style={{fontSize: 30, textAlign: 'center', fontFamily: 'Open Sans', fontWeight: 'bold'}}>{name}</Text>
                <Image source={img} 
                    style={{width: 260, height: 200, alignSelf: 'center'}}
                    resizeMode="cover"
                />
                <Text style={{marginTop: 20}}>{description}</Text>
            </View>
            <View style={Styles.containerBotoes}>
                <Button title="Charizard" color="#841584" onPress={loadCharizard} />
                <Button title="Squirtle" color="#841584" onPress={loadSquirtle} />
            </View>
        </View>
    );
}