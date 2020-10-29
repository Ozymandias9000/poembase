const BASE_URL = 'https://poetrydb.org/'

const client = (...args) => {
  return fetch(BASE_URL + args[0], ...args.slice(1))
}

export default client
