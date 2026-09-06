import React from 'react';
import { View, Text, Button, StyleSheet, BackHandler, Platform, Alert } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import { Jogo } from '../Globais';

export default function TelaFinal({ navigation }) {

    const pontuacaoFinal = Jogo.pontuacao;

    let arquivoVideo;

    // if(pontuacaoFinal === 1) {
    //     arquivoVideo = require('../assets/bonus.mp4');
    // } else {
    //     arquivoVideo = require('../assets/final.mp4');
    // }


    return(
        //Cria uma tela final simples com um título, a pontuação, um botão para fechar o app
        //e um botão para iniciar novamente (levando à TelaInicial)
        <View style={styles.container}>
            <Text style={styles.titulo}>Fim do Jogo!</Text>
            <Text style={styles.pontuacao}>Você acertou {pontuacaoFinal} de X questões!</Text>
{/* 
            <Video
                source={arquivoVideo}
                style={styles.video}
                shouldPlay={true}
                isLooping={true}
                resizeMode={ResizeMode.COVER}
            /> */}

            <View style={styles.botoes}>
                <Button
                    title="Jogar novamente"
                    onPress={() => navigation.navigate('Inicial')}
                />
                <Button
                    title="Encerrar o App"
                    onPress={() => BackHandler.exitApp()}
                />
            </View>
        </View>
    );

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    titulo: {
        fontSize: 20,
    },

    pontuacao: {
        fontSize: 20,
    },

    botoes: {
        width: '100%',
    }


});

