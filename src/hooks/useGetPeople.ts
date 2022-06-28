import { useState } from "react"
import { useQuery } from "react-query"
import PagedResults from "../types/paged_result"
import People from "../types/people"
import { getAllPeople } from "../utils/fetchFn"

export const useGetPeople = () => {
  const { data, status, error } = useQuery<PagedResults<People>, Error>(
    "people",
    getAllPeople
  )

  return { data, status, error }
}
