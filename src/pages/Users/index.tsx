import { useEffect } from "react"
import Modal from "../../components/Modal"

const Users = () => {
  const fetchUser = async () => {
    await fetch("http://localhost:3000/users")
  }
  useEffect(() => {
    fetchUser()
  }, [])

  return (
    <div>
      <div>Users</div>
    </div>
  )
}

export default Users
