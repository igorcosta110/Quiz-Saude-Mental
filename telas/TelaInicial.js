import React, { useCallback } from 'react';
import { View, Text, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { Jogo } from '../Globais';

export default function TelaInicial({ navigation }) {

    //Força que toda vez que a tela for reaberta (mesmo se já tiver sido criada e estiver na pilha)
    // o valor de pontuação é zerado.
    // useFocusEffect(
    //     useCallback(() => {
    //         Jogo.pontuacao = 0;
    //     }, [])
    // );

    return (
        //Cria uma tela simples com um título, uma imagem e um botão que chama a primeira questão
        <View style={styles.container}>
            <Text style={[styles.titulo, styles.textos]}>SAÚDE MENTAL: O que você sabe sobre o tema?</Text>
            <Image
                source={require('../assets/capa.png')}
                style={styles.capa}
            />
            <Text style={[styles.textos, styles.descricao]}>
                Assim como nossa saúde física, cuidar da saúde mental também é essencial para nossa satisfação e qualidade de vida. Você sabe quais coisas são importantes para ter uma mente saudável? Faça o teste e descubra!
            </Text>
            <TouchableOpacity
                
                onPress={ () => navigation.navigate('Questao1')  }
                style={styles.botao}
           >
                <Text style={[styles.textos, styles.textoBotao]}>Iniciar Quiz</Text>
           </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#1C3040',
        paddingTop: 50,
    },

    capa: {
        width: '90%',
        height: 350,
        borderRadius: 25,
        margin: 10,
    },

    textos: {
        color: '#fff',
        textAlign: 'center',
        fontFamily: 'Roboto',
    },

    titulo: {
        fontSize: 25,
        fontWeight: 'bold',
    },

    descricao: {
        fontSize: 18,
        padding: 20,
        textAlign: 'justify'
    },

    botao:{
        width: 250,
        height: 60,
        backgroundColor: "#000",
        justifyContent: 'center',
        backgroundColor: '#01ADF1',
        borderRadius: 12,
    },

    textoBotao:{
        fontSize: 30,
        fontWeight: 900,
        color: '#1C3040'
    },
});