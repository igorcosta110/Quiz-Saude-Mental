import React from 'react';
import Questao from '../components/Questao';
import { Jogo } from '../Globais';
import { questoes } from '../data/questoes';

export default function TelaQuestao1({ navigation }) {

    const questao4 = questoes[3];

    return (

        //Aqui o componente questão está sendo criado e estamos passando as props que o compõe
        <Questao
            id={questao4.id}
            pergunta= {questao4.pergunta}
            imagem={require('../assets/imgQuestao4.png')}
            alternativas={questao4.alternativas}
            alternativaCorreta={questao4.alternCorreta} 
            feedback={questao4.explicacao}
            onProxima={
                (pontos) => {
                    Jogo.pontuacao += pontos;
                    navigation.navigate('Questao5');
                }
            }
        />

    );

}

