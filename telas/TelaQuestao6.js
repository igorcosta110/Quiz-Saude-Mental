import React from 'react';
import Questao from '../components/Questao';
import { Jogo } from '../Globais';
import { questoes } from '../data/questoes';

export default function TelaQuestao1({ navigation }) {

    const questao6 = questoes[5];

    return (

        //Aqui o componente questão está sendo criado e estamos passando as props que o compõe
        <Questao
            id={questao6.id}
            pergunta= {questao6.pergunta}
            imagem={require('../assets/imgQuestao6.png')}
            alternativas={questao6.alternativas}
            alternativaCorreta={questao6.alternCorreta} 
            feedback={questao6.explicacao}
            onProxima={
                (pontos) => {
                    Jogo.pontuacao += pontos;
                    navigation.navigate('Questao7');
                }
            }
        />

    );

}

