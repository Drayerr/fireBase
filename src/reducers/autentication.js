const INITIAL_STATE = {
  email: '',
  senha: '',
  senha2: '',
  erroCadastro: 'Teste'
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'modifica_email': 
      return { ...state, email: action.payload }
    case 'modifica_senha':
      return { ...state, senha: action.payload }
    case 'modifica_contra_senha': 
      return { ...state, senha2: action.payload }
    case 'cadastro_usuario_erro':
      return { ...state, erroCadastro }
    default: return state
  }
}
