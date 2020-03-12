//Dependencias
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import React from 'react'
import firebase from 'firebase'

//Reducers
import reducers from './src/reducers/indexR'

//Componentes
import Home from './src/components/Home'
import Cadastro from './src/components/Cadastro'

//FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyASNKPn_U3NIXtkNyxysKZbs6Yup1aQTak",
  authDomain: "whatsapp-clone-955da.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-955da.firebaseio.com",
  projectId: "whatsapp-clone-955da",
  storageBucket: "whatsapp-clone-955da.appspot.com",
  messagingSenderId: "434303895225",
  appId: "1:434303895225:web:39ed3452d1d95e23cd3d68"
};

firebase.initializeApp(firebaseConfig)

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
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

//https://www.udemy.com/course/draft/997636/learn/lecture/6768760#overview