import React from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity, Button } from 'react-native';
import Styles from './Styles'
import { connect } from 'react-redux'

const Cadastro = ({navigation, ...props}) => {
  return (
    <View style={Styles.DadBox}>

      <View style={Styles.title}>
        <Text style={{color: 'grey', fontSize: 20}}>CADASTRO</Text>
      </View>

      <View>
        <TextInput value={props.email} style={Styles.loginBoxes} placeholder="E-mail"/>
        <TextInput value={props.senha} style={Styles.loginBoxes} placeholder="Senha"/>
        <TextInput value={props.senha2} style={Styles.loginBoxes} placeholder=" Confirmar Senha"/>
      </View>

      <View style={Styles.other}>
        <Button title="Cadastrar" color="grey"/>
      </View>

    </View>
  )
}

const mapStateToProps = (state) => (
  {
    email: state.autentication.email,
    senha: state.autentication.senha,
    senha2: state.autentication.senha2
  }
)
export default connect(mapStateToProps, null)(Cadastro);
