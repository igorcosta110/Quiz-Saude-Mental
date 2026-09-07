import React, { useCallback } from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { Jogo } from '../Globais';

export default function TelaInicial({ navigation }) {

    //Força que toda vez que a tela for reaberta (mesmo se já tiver sido criada e estiver na pilha)
    // o valor de pontuação é zerado.
    useFocusEffect(
        useCallback(() => {
            Jogo.pontuacao = 0;
        }, [])
    );

    return (
        //Cria uma tela simples com um título, uma imagem e um botão que chama a primeira questão
        <View style={styles.container}>
            <Text style={styles.titulo}>Bem-vindo ao Quiz!</Text>
            <Image
                source={require('../assets/logo.png')}
                style={styles.logo}
            />
            <Button
                title="Iniciar Quiz"
                onPress={ () => navigation.navigate('Questao1')  }
                style={styles.botao}
           />

        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1C2E3B',
        color: '#fff',
        fontFamily: 'Roboto',
    },

    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },

    logo: {
        width: 200,
        height: 200,
    },



});