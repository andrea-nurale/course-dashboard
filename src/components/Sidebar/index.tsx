import { useNavigate } from "react-router-dom"
import { SIDEBAR } from "../../utils/costants"

const Sidebar = () => {
  const navigate = useNavigate()
  const handleClick = (path: string) => {
    navigate(path)
  }
  const current = false
  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
      <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6 pb-4">
        <div className="flex h-16 shrink-0 items-center">
          <img
            className="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=white"
            alt="Your Company"
          />
        </div>
        <nav className="flex flex-1 flex-col">
          <ul className="flex flex-1 flex-col gap-y-7">
            {SIDEBAR.map((link) => (
              <li
                onClick={() => handleClick(link.href)}
                className={
                  current
                    ? "bg-indigo-700 text-white"
                    : "text-indigo-200 hover:text-white hover:bg-indigo-700"
                }
                style={{
                  cursor: "pointer",
                }}
              >
                {link.name}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Sidebar
