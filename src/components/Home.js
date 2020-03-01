import React from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity, Button } from 'react-native';
import Styles from './Styles'
import { connect } from 'react-redux'

const Home = ({ navigation }, props) => {
  return (
    <View style={Styles.DadBox}>

      <View style={Styles.title}>
        <Text style={{ color: 'grey', fontSize: 20 }}>STEAM POWERED</Text>
      </View>

      <View>
        <TextInput value={ props.email } style={Styles.loginBoxes} placeholder="E-mail" />
        <TextInput value={ props.senha } style={Styles.loginBoxes} placeholder="Senha" />
        <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
          <Text>
            Ainda não tem cadastro? Cadastre-se
          </Text>
        </TouchableOpacity>
      </View>

      <View style={Styles.other}>
        <Button title="Acessar" color="grey" />
      </View>

    </View>
  )
}

const mapStateToProps = (state) => (
  {
    email: state.autentication.email,
    senha: state.autentication.senha
  }
)

export default connect(mapStateToProps, null)(Home);
