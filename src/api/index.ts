import http from './client'

const getUrl = (value: string, searchType: string) => {
  switch (searchType) {
    case 'title':
      return `title/${value}`
    case 'author':
      return `author/${value}`
    case 'random':
      return `random/1`
    default:
      break
  }
}

export const getPoems = async (value: string, searchType: string) => {
  const res = await http(getUrl(value, searchType))
  const data = await res.json()
  if (data.status === 200 || !data.status) {
    return data
  } else {
    console.log(data)
    throw new Error(data.reason)
  }
}
