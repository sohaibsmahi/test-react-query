import { useQuery } from "react-query"
import { useParams } from "react-router-dom"
import People from "../types/people"
import { getPerson } from "../utils/fetchFn"

export const useGetPerson = () => {
  const { personId } = useParams()
  const { data, isLoading, isError, error } = useQuery<People, Error>(
    ["person", personId],
    () => getPerson(+personId!)
  )

  return { data, isLoading, isError, error }
}
