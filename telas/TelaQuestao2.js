import React from 'react';
import Questao from '../components/Questao';
import { Jogo } from '../Globais';
import { questoes } from '../data/questoes';

export default function TelaQuestao1({ navigation }) {

    const questao2 = questoes[1];

    return (

        //Aqui o componente questão está sendo criado e estamos passando as props que o compõe
        <Questao
            id={questao2.id}
            pergunta= {questao2.pergunta}
            imagem={require('../assets/imgQuestao2.png')}
            alternativas={questao2.alternativas}
            alternativaCorreta={questao2.alternCorreta} 
            feedback={questao2.explicacao}
            onProxima={
                (pontos) => {
                    Jogo.pontuacao += pontos;
                    navigation.navigate('Questao3');
                }
            }
        />

    );

}

