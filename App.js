import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TelaInicial from './telas/TelaInicial';
import TelaQuestao1 from './telas/TelaQuestao1';
import TelaFinal from './telas/TelaFinal';

const Stack = createStackNavigator();

export default function App() {
  return (
    //Aqui está sendo criada a estrutura de navegação que será utilizada pela aplicação
    //Cada nova tela que você criar, importe ali na parte de cima e registre aqui embaixo com o Stack.Screen
    <NavigationContainer> 
      <Stack.Navigator initialRouteName="Inicial">
        <Stack.Screen name="Inicial" component={TelaInicial} />
        <Stack.Screen name="Questao1" component={TelaQuestao1} />
        <Stack.Screen name="Final" component={TelaFinal} />

      </Stack.Navigator>
    </NavigationContainer>

  );
}