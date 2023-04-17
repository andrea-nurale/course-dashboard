import { InputHTMLAttributes } from "react"

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
}

const Input = ({ placeholder, type = "text", label, error, ...rest }: Props) => {
  return (
    <div>
      <label className="block text-sm font-medium leading-6 text-gray-900">
        {label}
      </label>
      <div className="mt-2">
        <input
          placeholder={placeholder}
          type={type}
          className="block w-full pl-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          {...rest}
        />
      </div>
      <div style={{ color: "red" }}>{error}</div>
    </div>
  )
}

export default Input
