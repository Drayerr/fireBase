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
  return (dispatch) => {
    if (senha != senha2) {
      alert('As senhas não são iguais')
    } else {
      firebase.auth().createUserWithEmailAndPassword(email, senha)
      .then( user => cadastoUsuarioSucesso(dispatch))
      .catch( erro => cadastoUsuarioErro( erro, dispatch ))
    }
  }
}

const cadastoUsuarioSucesso = (dispatch) => {
    dispatch ({ type: 'sucesso' })
  }

const cadastoUsuarioErro = (erro, dispatch) => {
    dispatch ({ type: 'cadastro_usuario_erro', payload: erro.message})


  }
