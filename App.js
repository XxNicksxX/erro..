import "react-native-gesture-handler"
import * as React from "react"
import {NavigationContainer} from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/home";
import SateliteScreen from "./screens/iss";
import MeteorsScreen from "./screens/meteors";
 
 const Stack=createStackNavigator()

export default function App() {
  return (
   //ambiemte de navegação
   <NavigationContainer>
    <Stack.Navigator 
    initialRouteName="home"
    screenOptions={{headerShown:false}}
    >
      <Stack.Screen name="home" component={HomeScreen}/>
      <Stack.Screen name="iss" component={SateliteScreen}/>
      <Stack.Screen name="meteors" component={MeteorsScreen}/>

    </Stack.Navigator>
   </NavigationContainer>
  )
}

