import {Button} from "antd";



const ButtonAnimation = ({className,children}) => {


  return(
      <div className={`${className} text-primary font-[600] px-10 text-center group border-primary border-2 mt-10 after:h-full rounded-full after:bg-primary relative after:absolute after:scale-x-0 hover:after:scale-x-[100%] after:transition after:h-full after:rounded-full after:duration-1000 after:left-0 after:top-0 after:w-full after:h-full `}>
          <span className={"z-10 relative group-hover:text-white transition duration-1000 flex flex-row items-center justify-center"}>{children}</span>
      </div>
  )
}
export default ButtonAnimation;