import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from "./App"
import Person from "./components/Person"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path=":personId" element={<Person />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
