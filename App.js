import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TelaInicial from './telas/TelaInicial';
import TelaQuestao1 from './telas/TelaQuestao1';
import TelaQuestao2 from './telas/TelaQuestao2';
import TelaQuestao3 from './telas/TelaQuestao3';
import TelaQuestao4 from './telas/TelaQuestao4';
import TelaQuestao5 from './telas/TelaQuestao5';
import TelaQuestao6 from './telas/TelaQuestao6';
import TelaQuestao7 from './telas/TelaQuestao7';
import TelaQuestao8 from './telas/TelaQuestao8';


import TelaFinal from './telas/TelaFinal';

const Stack = createStackNavigator();

export default function App() {
  return (
    //Aqui está sendo criada a estrutura de navegação que será utilizada pela aplicação
    //Cada nova tela que você criar, importe ali na parte de cima e registre aqui embaixo com o Stack.Screen
    <NavigationContainer> 
      <Stack.Navigator 
        initialRouteName="Inicial"
        screenOptions={{headerShown: false}}
      >
        <Stack.Screen name="Inicial" component={TelaInicial} />
        <Stack.Screen name="Questao1" component={TelaQuestao1} />
        <Stack.Screen name="Questao2" component={TelaQuestao2} />
        <Stack.Screen name="Questao3" component={TelaQuestao3} />
        <Stack.Screen name="Questao4" component={TelaQuestao4} />
        <Stack.Screen name="Questao5" component={TelaQuestao5} />
        <Stack.Screen name="Questao6" component={TelaQuestao6} />
        <Stack.Screen name="Questao7" component={TelaQuestao7} />
        <Stack.Screen name="Questao8" component={TelaQuestao8} />

        <Stack.Screen name="Final" component={TelaFinal} />

      </Stack.Navigator>
    </NavigationContainer>

  );
}