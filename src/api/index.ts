import http from './client'

export const getPoemsByAuthor = async (value: string) => {
  const res = await http(`author/${value}`)
  const data = await res.json()

  if (data.status === 200 || !data.status) {
    return data
  } else {
    console.log(data)
    throw new Error(data.reason)
  }
}
