import React from 'react';
import Questao from '../components/Questao';
import { Jogo } from '../Globais';
import { questoes } from '../data/questoes';

export default function TelaQuestao1({ navigation }) {

    const questao8 = questoes[7];

    return (

        //Aqui o componente questão está sendo criado e estamos passando as props que o compõe
        <Questao
            pergunta= {questao8.pergunta}
            imagem={require('../assets/imgQuestao1.jpg')}
            alternativas={questao8.alternativas}
            alternativaCorreta={questao8.alternCorreta} 
            feedback={questao8.explicacao}
            onProxima={
                (pontos) => {
                    Jogo.pontuacao += pontos;
                    //Aqui neste exemplo, como só temos uma questão, dela estou indo para a tela final. 
                    //Quando você criar novas questões, vá para a Questão 2 e nas questões sempre para a próxima.
                    navigation.navigate('Final');
                }
            }
        />

    );

}

