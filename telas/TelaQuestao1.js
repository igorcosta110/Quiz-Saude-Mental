import React from 'react';
import Questao from '../components/Questao';
import { Jogo } from '../Globais';

export default function TelaQuestao1({ navigation }) {

    return (

        //Aqui o componente questão está sendo criado e estamos passando as props que o compõe
        <Questao
            pergunta="Esta é uma questão de teste, você percebe?"
            imagem={require('../assets/imgQuestao1.jpg')}
            alternativas={
                [
                    "Esta á uma alternativa errada",
                    "Esta também é uma alternativa errada",
                    "Fechando a trinca temos mais uma alternativa errada",
                    "Neste exemplo esta é a alternativa correta",
                    "Alternativa criada"
                ]
            }
            alternativaCorreta={4}
            feedback="Este é o feedback onde você deve criar um texto (curto) dizendo qual a resposta e explicando ela. 'Meu Deus, cadê o botão?' Não precisa mais, conte até 5 vamos adiante automaticamente"
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

