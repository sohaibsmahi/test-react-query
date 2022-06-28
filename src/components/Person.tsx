import { useGetPerson } from "../hooks/useGetPerson"

const Person = () => {
  const { data, isLoading, isError, error } = useGetPerson()

  if (isLoading) return <p>Loading ...</p>
  if (isError) return <p>{error?.message}</p>
  return (
    <>
      {data && (
        <p>
          {data.name} born in {data.birth_year}
        </p>
      )}
    </>
  )
}

export default Person
