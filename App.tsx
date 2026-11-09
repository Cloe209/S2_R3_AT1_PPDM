import React from "react";

// Stack Navigation
import { NavigationContainer } from "@react-navigation/native"; 
import { createNativeStackNavigator } from "@react-navigation/native-stack"; 

// Páginas
import Home from "./src/pages/Home";
import GPS from "./src/pages/GPS"; 
import Camera from "./src/pages/camera";
import Accelerometer from "./src/pages/accelerometer";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer> 
      <Stack.Navigator initialRouteName="Home"> 
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="GPS" component={GPS} />
        <Stack.Screen name="Camera" component={Camera} />
        <Stack.Screen name="Accelerometer" component={Accelerometer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// CLARA VOCÊ JÁ TERMINOU A ATV, NA PRÓXIMA AULA É SÓ MANDAR!!!!