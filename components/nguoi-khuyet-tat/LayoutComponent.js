import ButtonHover from "@/components/ReuseComponent/ButtonHover";
import {ArrowUpOutlined} from "@ant-design/icons";
import React from "react";

const LayoutComponent = ({items,className,handleShowIframe}) => {

 return(
     <section className={` ${className} flex flex-col justify-center p-32 pt-16 items-center }`}>
         <h1 className={"text-primary text-lg font-medium mb-7"}>{items.title}</h1>
         <p className={"mb-20 w-8/12"}>{items.content}</p>
         {
             items.items.map((item, index) => {
                 const flex = index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                 let afterDisplay ="";
                 let overplayDisplay ="";
                 if( item.youtubeEmbed === "" ){
                     overplayDisplay = "hidden"
                     afterDisplay = "after:hidden"

                 }
                 const buttonLinkDisplay = item.link === "" ? "hidden" : ""
                 return (
                     <div key={"index"}  className={`flex ${flex} justify-center items-center gap-10 mb-20`}>
                         <div onClick={()=>item.youtubeEmbed !=="" && handleShowIframe(item.youtubeEmbed)} className={"group relative w-1/2 flex justify-center overflow-hidden rounded-full"}>
                             <div  className={` relative w-10/12 rounded-full overflow-hidden after:absolute ${afterDisplay} after:bg-[#003da5] after:opacity-30 after:hover:opacity-0 after:transition-opacity after:duration-500  after:top-0 after:left-0 after:w-full after:h-full`}>
                                 <img className={"group-hover:scale-[1.2] w-full rounded-full transition duration-300"}
                                      src={item.img}/>
                             </div>

                             <div className={`absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 ${overplayDisplay}`}>
                                 <button
                                     className="bg-primary group-hover:text-primary group-hover:bg-opacity-50 group-hover:bg-white border-2 border-primary text-white p-5 rounded-full flex items-center justify-center">
                                     <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24"
                                          stroke="currentColor">
                                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                               d="M5 3l14 9-14 9V3z"/>
                                     </svg>
                                 </button>
                             </div>
                         </div>
                         <div className={"w-1/2 text-center px-10 flex flex-col items-center"}>
                             <h1 className={"text-primary font-bold text-lg mb-3"}>{item.title}</h1>
                             <p className={"mb-5"}>{item.content}</p>
                            <ButtonHover className={` ${buttonLinkDisplay} h-12 px-5 w-1/3 bg-transparent`}> <a href={item.link}>Đọc Thêm </a><ArrowUpOutlined
                                 className={"ml-3"} rotate={45}/></ButtonHover>
                         </div>

                     </div>
                 )
             })
         }
     </section>
 )
}
export default LayoutComponent;