import { useEffect } from "react"

const Users = () => {
  const fetchUser = async () => {
    await fetch("http://localhost:3000/users")
  }
  useEffect(() => {
    fetchUser()
  }, [])

  return <div>Users</div>
}

export default Users
