import React from 'react';
import Questao from '../components/Questao';
import { Jogo } from '../Globais';
import { questoes } from '../data/questoes';

export default function TelaQuestao1({ navigation }) {

    const questao1 = questoes[0];

    return (

        //Aqui o componente questão está sendo criado e estamos passando as props que o compõe
        <Questao
            pergunta= {questao1.pergunta}
            imagem={require('../assets/imgQuestao1.png')}
            alternativas={questao1.alternativas}
            alternativaCorreta={questao1.alternCorreta} 
            feedback={questao1.explicacao}
            onProxima={
                (pontos) => {
                    Jogo.pontuacao += pontos;
                    navigation.navigate('Questao2');
                }
            }
        />

    );

}

