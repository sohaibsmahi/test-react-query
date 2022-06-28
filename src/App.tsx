import "./App.css"
import { QueryClient, QueryClientProvider } from "react-query"
import People from "./components/People"
import { ReactQueryDevtools } from "react-query/devtools"
import Person from "./components/Person"
import Films from "./components/Films"

const queryClient = new QueryClient()
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <People />
      <Films />

      <Person />

      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default App
