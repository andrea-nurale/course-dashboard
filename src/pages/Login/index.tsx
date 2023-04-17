import Spacer from "../../components/Spacer"
import Input from "../../components/Input"
import Button from "../../components/Button"
import { ChangeEvent, useState } from "react"
import { validateEmail, ROUTES } from "../../utils/costants"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [errorUsername, setErrorUsername] = useState("")
  const handleChangeUsername = (event: ChangeEvent<HTMLInputElement>) => {
    setError("")
    setErrorUsername("")
    setUsername(event.target.value)
  }
  const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setError("")
    setPassword(event.target.value)
  }

  const handleClickLogin = () => {
    if (!validateEmail.test(username.toLowerCase())) {
      setErrorUsername("Errore username")
    }
    if (
      username.toLowerCase() === "admin@gmail.com" &&
      password.toLowerCase() === "segreto"
    ) {
      return navigate(ROUTES.home)
    }
    return setError("Login errata")
  }

  return (
    <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          className="mx-auto h-12 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
          <div className="space-y-6">
            <div>
              <Input
                placeholder="username"
                label="Username"
                onChange={handleChangeUsername}
                value={username}
                error={errorUsername}
              />
              <Spacer height={30} />
              <Input
                onChange={handleChangePassword}
                value={password}
                placeholder="password"
                type="password"
                label="Password"
              />
              <Spacer height={30} />
              <Button fullWidth onClick={handleClickLogin}>
                Login
              </Button>
              <Spacer height={10} />
              <div style={{ color: "red" }}>{error}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
