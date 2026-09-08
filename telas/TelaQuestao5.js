import React from 'react';
import Questao from '../components/Questao';
import { Jogo } from '../Globais';
import { questoes } from '../data/questoes';

export default function TelaQuestao1({ navigation }) {

    const questao5 = questoes[4];

    return (

        //Aqui o componente questão está sendo criado e estamos passando as props que o compõe
        <Questao
            id={questao5.id}
            pergunta= {questao5.pergunta}
            imagem={require('../assets/imgQuestao5.gif')}
            alternativas={questao5.alternativas}
            alternativaCorreta={questao5.alternCorreta} 
            feedback={questao5.explicacao}
            onProxima={
                (pontos) => {
                    Jogo.pontuacao += pontos;
                    navigation.navigate('Questao6');
                }
            }
        />

    );

}

