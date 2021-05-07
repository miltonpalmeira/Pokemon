import React from 'react';
import { View, Image, Text } from 'react-native';

export default function() {
    return(
        <View>
            <Image source={require('../img/Squirtle.png')}
                style={{width: 260, height: 200, alignSelf: 'center'}}
                resizeMode="cover"
            />
            <Text style={{marginTop: 20, textAlign: 'justify'}}>
                A concha de Squirtle não é usada apenas para proteção.
                A forma arredondada da concha e as ranhuras na sua superfície ajudam a minimizar a
                resistência na água, permitindo que este Pokémon nade a altas velocidades.
            </Text>
        </View>
    );
}