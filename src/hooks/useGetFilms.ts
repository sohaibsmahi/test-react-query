import { useQuery } from "react-query"
import Film from "../types/film"
import PagedResults from "../types/paged_result"
import { getFilms } from "../utils/fetchFn"

export const useGetFilms = () => {
  const { data, isLoading, isError, error, isFetching } = useQuery<
    PagedResults<Film>,
    Error
  >("films", getFilms)

  return { data, isLoading, isError, error, isFetching }
}
