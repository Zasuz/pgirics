import {Button} from "antd";

const BrandItem = ({title,img}) => {
  return(
     <>
          <img
              className={"shadow-brand-shadow transition duration-700 ease-in-out group-hover:scale-[1.2] w-3/4 h-3/4 rounded-full"}
              src={img}>
          </img>
          <div className={"animate-out-clip-path-circle transition duration-1000 ease-in-out group-hover:animate-clip-path-circle group-hover:block absolute top-0 left-0 w-full h-full bg-blue-opacity rounded-full "}>
              <div className={"text-white h-full flex flex-col justify-center items-center"}>
                  <h1 className={"text-[1.4rem] font-[700] mb-5 opacity-100"}>{title}</h1>
                  <Button className={" w-5/12 h-1/6 font-[600] text-primary bg-white rounded-full opacity-100"}>Đến Trang</Button>
              </div>
          </div>
      </>
  )
}
export default BrandItem;

