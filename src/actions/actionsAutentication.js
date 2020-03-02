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