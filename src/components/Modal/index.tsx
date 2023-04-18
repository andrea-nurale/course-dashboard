import { ReactNode } from "react"

interface Props {
  show: boolean
  children: ReactNode
}

const Modal = ({ show, children }: Props) => {
  return (
    <div
      style={{
        zIndex: 100000,
        display: show ? "block" : "none",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        height: "100vh",
        width: "100vw",
        background: "rgba(0, 0, 0, 0.8)",
      }}
    >
      <div className="h-4/5 w-3/4 mt-16 mr-auto ml-auto relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all">
        {children}
      </div>
    </div>
  )
}

export default Modal
