import React from "react"
import {RouterProvider} from "react-router-dom"
import {Router} from "./routes/root"
import MainLayout from "./layouts/main"

function App() {
  return (
    <MainLayout>
      <RouterProvider router={Router} />
    </MainLayout>
  )
}

export default App
