import React from 'react';
import Questao from '../components/Questao';
import { Jogo } from '../Globais';
import { questoes } from '../data/questoes';

export default function TelaQuestao1({ navigation }) {

    const questao7 = questoes[6];

    return (

        //Aqui o componente questão está sendo criado e estamos passando as props que o compõe
        <Questao
            pergunta= {questao7.pergunta}
            imagem={require('../assets/imgQuestao7.jpg')}
            alternativas={questao7.alternativas}
            alternativaCorreta={questao7.alternCorreta} 
            feedback={questao7.explicacao}
            onProxima={
                (pontos) => {
                    Jogo.pontuacao += pontos;
                    navigation.navigate('Questao8');
                }
            }
        />

    );

}

