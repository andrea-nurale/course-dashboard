import { Outlet } from "react-router-dom"
import Sidebar from "../Sidebar"
import Flex from "../Flex"

const Layout = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Flex>
        <Sidebar />
          <div className='ml-56 w-full'>
            <Outlet />
          </div>
      </Flex>
    </div>
  )
}

export default Layout
