import React from 'react';
import { View, Text, Button, StyleSheet, BackHandler, Platform, Alert, Image, TouchableOpacity } from 'react-native';
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
            <Text style={[styles.texto, styles.textoTitulo]}>Saúde mental: o que você sabe sobre o tema?</Text>

            <Image 
                source={require('../assets/example.jpg')}
                style={styles.image}
            />

            <Text style={[styles.texto, styles.textoPontuacao]}>Você acertou: {pontuacaoFinal} de 8</Text>
            <Text style={[styles.texto, styles.textoPontuacao]}>Subtítulo substituível</Text>
            <Text style={[styles.texto, styles.textoResultado]}>Este é um texto que vai ser substituído depois</Text>
{/* 
            <Video
                source={arquivoVideo}
                style={styles.video}
                shouldPlay={true}
                isLooping={true}
                resizeMode={ResizeMode.COVER}
            /> */}

            <View style={styles.containerBotoes}>
                <TouchableOpacity 
                    onPress={() => navigation.navigate('Inicial')}
                    style={styles.botoes}
                >
                    <Text style={[styles.textoBotao]}>Jogar novamente</Text>
                </TouchableOpacity>


                <TouchableOpacity 
                    onPress={() => BackHandler.exitApp()}
                    style={[styles.botoes, styles.botaoSair]}
                >
                    <Text style={[styles.textoBotao]}>Sair</Text>
                </TouchableOpacity>


            </View>
        </View>
    );

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: '#1C3040',
        padding: 10,
        paddingTop: 50,
    },

    image:{
        width: '100%',
        height: '300',
        borderRadius: 8,
    },

    texto: {
        color: '#fff',
        textAlign: 'justify',
    },

    textoTitulo: {
        fontSize: 23,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center'
    },

    textoPontuacao: {
        fontSize: 20,
        fontWeight: 'bold',
    },

    textoResultado: {
        fontSize: 18,
        textAlign: 'justify',
    },

    textoBotao:{
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16
    },

    botaoSair:{
        backgroundColor: '#F8D7DA',
    },

    containerBotoes: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    botoes: {
        width: 150,
        height: 50,
        justifyContent: 'center',
        backgroundColor: '#01ADF1',
        borderRadius: 12,
        margin: 5,
    }

});

