import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from "./components/views/HomeScreen";

function AboutScreen(props) {
  return (
    <View style={{flex: 1, paddingTop: 10, paddingLeft: 10 }}>
      <Text>SOBRE</Text>
      
    </View>
  );
}

function EquipeScreen(props) {
  return (
    <View style={{ flex: 1, paddingTop: 10, paddingLeft: 10 }}>
      <Text>EQUIPE</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="About" component={AboutScreen} />
        <Drawer.Screen name="Equipe" component={EquipeScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;