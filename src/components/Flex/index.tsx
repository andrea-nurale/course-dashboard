interface Props {
  children: any
  column?: boolean
  width?: number
  height?: number
  border?: string
  padding?: number
  alignItems?: "flex-start" | "end" | "center"
}

const Flex = ({
  children,
  column = false,
  alignItems,
  width,
  border,
  padding,
  height,
}: Props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: column ? "column" : "row",
        alignItems: alignItems ? alignItems : "",
        width: width ? `${width}px` : "",
        height: height ? `${height}px` : "",
        border: border ? border : "",
        padding: padding ? `${padding}px` : "",
      }}
    >
      {children}
    </div>
  )
}

export default Flex
