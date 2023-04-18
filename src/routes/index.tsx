import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "../pages/Login"
import Home from "../pages/Home"
import Users from "../pages/Users"
import Layout from "../components/Layout"
import Customers from "../pages/Customers"
import Documents from "../pages/Documents"
import Reports from "../pages/Reports"
import Calendar from "../pages/Calendar"

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
          <Route path={ROUTES.documents} element={<Documents />} />
          <Route path={ROUTES.reports} element={<Reports />} />
          <Route path={ROUTES.calendar} element={<Calendar />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
