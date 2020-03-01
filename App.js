//Dependencias
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { ScrollView,View,Text } from 'react-native'
import React from 'react'


//Reducers
import reducers from './src/reducers/indexR'

//Componentes
import Home from './src/components/Home'
import Cadastro from './src/components/Cadastro'


const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Cadastro" component={Cadastro} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
export default App;
