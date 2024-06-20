import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from "./components/views/HomeScreen";
import EquipeScreen from "./components/views/EquipeScreen";
import SobreScreen from "./components/views/SobreScreen";
import ContatoScreen from "./components/views/ContatoScreen";

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Sobre" component={SobreScreen} />
        <Drawer.Screen name="Equipe" component={EquipeScreen} />
        <Drawer.Screen name="Contato" component={ContatoScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;