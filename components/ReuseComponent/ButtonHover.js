
const ButtonHover = ({className,children}) => {
  return(
      <button className={`hover:text-white hover:bg-primary flex items-center justify-center border-primary border-2 p-2 rounded-full font-medium text-primary bg-white ${className}`}>{children}</button>
  )
}
export default ButtonHover;