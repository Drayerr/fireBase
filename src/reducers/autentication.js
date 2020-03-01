const INITIAL_STATE = {
  email: '',
  senha: '',
  senha2: ''
}

export default (state = INITIAL_STATE, action) => {
  if(action.type == 'modifica_email'){
    return { ...state, email: action.payload }
  }
  if(action.type == 'modifica_senha'){
    return { ...state, senha: action.payload }
  }
  return state
}