import { Link } from "react-router-dom"
import { useGetPeople } from "../hooks/useGetPeople"

const People = () => {
  const { data, status, error } = useGetPeople()

  return (
    <>
      <h2>People</h2>
      {status === "success" ? (
        data &&
        data.results.map((person) => {
          return (
            <Link to={`/${person.url.split("/").at(-2)}`} key={person.url}>
              <div className="result">
                <p>{person.name}</p>
              </div>
            </Link>
          )
        })
      ) : status === "loading" ? (
        <p>Loading...</p>
      ) : (
        <p>{error?.message}</p>
      )}
    </>
  )
}

export default People
