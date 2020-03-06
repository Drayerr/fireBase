import firebase from 'firebase'

export const modificaEmail = (texto) => {
  return {
    type: 'modifica_email',
    payload: texto
  }
}

export const modificaSenha = (texto) => {
  return {
    type: 'modifica_senha',
    payload: texto
  }
}

export const modificaContraSenha = (texto) => {
  return {
    type: 'modifica_contra_senha',
    payload: texto
  }
}

export const cadastraUser = ({ email, senha, senha2}) => {
  
  if (senha != senha2) {
    alert('As senhas não são iguais')
  } else {
    firebase.auth().createUserWithEmailAndPassword(email, senha)
    .then( user => alert( "Conta criada com Sucesso!" ))
    .catch( error => alert( error ))
  }
  

  return {
    type: 'teste'
  }
}