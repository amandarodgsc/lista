// Navegacao.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListaDeTarefas from './ListaDeTarefas';

const Stack = createStackNavigator();

export default function Navegacao() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ListaDeTarefas">
        <Stack.Screen name="ListaDeTarefas" component={ListaDeTarefas} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
