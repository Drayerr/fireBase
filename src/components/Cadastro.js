import React from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity, Button } from 'react-native';
import Styles from './Styles'

const Cadastro = ({navigation}) => {
  return (
    <View style={Styles.DadBox}>

      <View style={Styles.title}>
        <Text style={{color: 'grey', fontSize: 20}}>CADASTRO</Text>
      </View>

      <View>
        <TextInput style={Styles.loginBoxes} placeholder="E-mail"/>
        <TextInput style={Styles.loginBoxes} placeholder="Senha"/>
        <TextInput style={Styles.loginBoxes} placeholder=" Confirmar Senha"/>
      </View>

      <View style={Styles.other}>
        <Button title="Cadastrar" color="grey"/>
      </View>

    </View>
  )
}
export default Cadastro;
