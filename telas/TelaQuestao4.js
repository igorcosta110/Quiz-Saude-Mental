import React from 'react';
import Questao from '../components/Questao';
import { Jogo } from '../Globais';
import { questoes } from '../data/questoes';

export default function TelaQuestao1({ navigation }) {

    const questao4 = questoes[3];

    return (

        //Aqui o componente questão está sendo criado e estamos passando as props que o compõe
        <Questao
            pergunta= {questao4.pergunta}
            imagem={require('../assets/imgQuestao1.jpg')}
            alternativas={questao4.alternativas}
            alternativaCorreta={questao4.alternCorreta} 
            feedback={questao4.explicacao}
            onProxima={
                (pontos) => {
                    Jogo.pontuacao += pontos;
                    //Aqui neste exemplo, como só temos uma questão, dela estou indo para a tela final. 
                    //Quando você criar novas questões, vá para a Questão 2 e nas questões sempre para a próxima.
                    navigation.navigate('Questao5');
                }
            }
        />

    );

}

