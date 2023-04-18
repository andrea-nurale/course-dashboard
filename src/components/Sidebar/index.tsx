import { useNavigate, useLocation } from "react-router-dom"
import { SIDEBAR } from "../../utils/costants"

const Sidebar = () => {
  const navigate = useNavigate()
  const handleClick = (path: string) => {
    navigate(path)
  }
  const location = useLocation();

  return (
    <div className="fixed inset-y-0 z-50 flex w-56 flex-col">
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
                  location.pathname === link.href
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
