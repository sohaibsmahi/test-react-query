import axios from "axios"
import { useQuery } from "react-query"
import { useGetFilms } from "../hooks/useGetFilms"
import Film from "../types/film"
import PagedResults from "../types/paged_result"

const Films = () => {
  const { data, isError, isLoading, isFetching, error } = useGetFilms()

  if (isFetching) return <p>Fetching ...</p>
  if (isLoading) return <p>Loading ...</p>
  if (isError) return <p>{error?.message}</p>
  return (
    <>
      <h2>Films</h2>
      {data &&
        data.results.map((film) => {
          return (
            <div className="result" key={film.url}>
              <p>{film.title}</p>
            </div>
          )
        })}
    </>
  )
}

export default Films
