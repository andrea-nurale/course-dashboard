interface Props {
  height?: number
  width?: number
}
const Spacer = ({ height, width }: Props) => {
  return (
    <div
      style={{
        height: `${height}px`,
        width: `${width}px`,
      }}
    />
  )
}

export default Spacer
