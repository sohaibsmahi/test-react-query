import axios from "axios"

const axiosInstance = axios.create({
  baseURL: "https://swapi.dev/api",
})

export const getAllPeople = async () => {
  const { data } = await axiosInstance.get("/people")
  return data
}

export const getPerson = async (personId: number) => {
  if (!personId) return

  const { data } = await axiosInstance.get(`/people/${personId}/`)
  return data
}

export const getFilms = async () => {
  const { data } = await axiosInstance.get(`/films`)
  return data
}
