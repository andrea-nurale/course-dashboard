import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "../pages/Login"
import Home from "../pages/Home"
import Users from "../pages/Users"
import Layout from "../components/Layout"
import Customers from "../pages/Customers"
import React from "react"
import { ROUTES } from "../utils/costants"

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.login} element={<Login />} />
        <Route element={<Layout />}>
          <Route path={ROUTES.home} element={<Home />} />
          <Route path={ROUTES.users} element={<Users />} />
          <Route path={ROUTES.customers} element={<Customers />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
