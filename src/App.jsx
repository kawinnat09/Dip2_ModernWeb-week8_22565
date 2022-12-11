import React from "react"
import { Route, Routes } from "react-router-dom"
import RootLayout from "./components/layouts/RootLayout"
import About from "./components/pages/About"
import Home from "./components/pages/Home"
import Profile from "./components/pages/Profile"

function App() {
  console.log("process.env.PORT: ", process.env.PORT)
  return (
    <>
      <RootLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Home />
      </RootLayout>
    </>
  )
}

export default App