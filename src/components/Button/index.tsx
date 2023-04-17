interface Props {
  children?: any
  onClick: () => void
  fullWidth?: boolean
}
const Button = ({ children, onClick, fullWidth = false }: Props) => {
  return (
    <button
      className={`${
        fullWidth ? "w-full" : ""
      } rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
