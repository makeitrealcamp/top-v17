

export const loginRequest = (form) => {
  const payload = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(form),
  }

  return fetch('https://top-v17-backend.herokuapp.com/auth/local/login', payload)
}

export const getCharacters = (page) => {
  const payload = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }

  return fetch(`https://rickandmortyapi.com/api/character/?page=${page}`, payload)
}

export const getSingleCharacter = (name) => {
  const payload = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }

  return fetch(`https://rickandmortyapi.com/api/character/?name=${name}`, payload)
}
