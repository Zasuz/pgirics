import {Button} from "antd";
import {
    AiFillFacebook,
    AiFillInstagram,
    AiFillLinkedin,
    AiFillYoutube,
    AiOutlineGlobal,
    AiOutlinePhone,
    AiOutlineShopping
} from "react-icons/ai";
import ButtonHover from "@/components/ReuseComponent/ButtonHover";
import {ArrowUpOutlined} from "@ant-design/icons";

const Footer = () => {
    return (
        <div
            className={"px-8 lg:px-32 pt-20 pb-10 text-start bg-primary text-white pt-10 flex flex-col justify-center items-center clipPath-Footer"}>
            <ButtonHover className={"border-white bg-primary w-8/12 lg:w-2/12"}>Quay trở về đầu tiên</ButtonHover>
            <div className={"flex flex-col lg:flex-row w-full mb-10 mt-10 gap-6"}>
                <ul className={"lg:block flex  w-full lg:w-4/12 space-y-4 text-[14px]"}>
                    <li className={" mt-5 lg:mt-0 mr-10  flex  items-center"}>
                        <AiOutlinePhone/>
                        <a className={"ml-2"}
                           href={"https://vn.pg.com/lien-he-voi-chung-toi/"}>
                            Liên hệ với chúng tôi</a></li>
                    <li className={"mr-3 flex flex-row items-end  items-center"}>
                        <AiOutlineShopping/>
                        <a className={"ml-2"} href={"https://www.pgcareers.com/"}>
                            Cơ hội việc làm</a></li>
                </ul>
                <ul className={"w-full lg:w-2/12 space-y-4 text-[14px]"}>
                    <h1 className={"font-[600] text-[16px] mb-2"}>ĐỐI TÁC ĐẦU TƯ</h1>
                    <li><a href={"https://www.pginvestor.com/corporate-profile/default.aspx"}>Nhà đầu tư <ArrowUpOutlined rotate={45}/></a></li>
                    <li><a href={"https://www.pgconnectdevelop.com/"}>Làm đối tác với chúng tôi</a><ArrowUpOutlined rotate={45}/></li>
                    <li><a href={"https://pgsupplier.com/"}>Nhà cung cấp</a><ArrowUpOutlined rotate={45}/></li>
                </ul>
                <ul className={"w-full lg:w-2/12 space-y-4 text-[14px]"}>
                    <h1 className={"font-[600] text-[16px] mb-2"}>CÔNG TY CHÚNG TÔI</h1>
                    <li><a href={"https://vn.pg.com/lanh-dao/"}>Lãnh đạo</a></li>
                    <li><a href={"https://vn.pg.com/cau-truc-va-quan-tri/"}> Cấu trúc và lãnh đạo</a></li>
                    <li><a href={"https://vn.pg.com/chinh-sach-va-thuc-thi/"}>Chính sách & thực hành</a></li>
                    <li><a href={"https://news.pg.com/home/default.aspx"}>Lưu trữ</a></li>
                    <li><a href={"https://us.pg.com/citizenship-report-2022/recognitions-and-awards/"}> Giải thưởng và công nhận</a><ArrowUpOutlined rotate={45}/></li>
                    <li><a href={"https://vn.pg.com/bao-cao-phat-trien-ben-vung/"}>Tin tức</a><ArrowUpOutlined rotate={45}/></li>
                </ul>
                <ul className={"w-full lg:w-2/12 space-y-4 text-[14px]"}>
                    <h1 className={"font-[600] text-[16px] mb-2"}>HỮU ÍCH</h1>
                    <li><a href={"https://vn.pg.com/so-do-trang-web/"}>Sơ đồ trang web</a></li>
                </ul>
                <ul className={"w-full lg:w-2/12 space-y-4 text-[14px]"}>
                    <h1 className={"font-[600] text-[16px] mb-2"}>PHÁP LUẬT</h1>
                    <li><a href={"https://privacypolicy.pg.com/en-US"}>Thông tin bảo mật</a><ArrowUpOutlined rotate={45}/></li>
                    <li> <a href={"https://termsandconditions.pg.com/vi-vn/"}>Điều khoản & điều lệ</a><ArrowUpOutlined rotate={45}/></li>
                    <li><a href={"https://privacypolicy.pg.com/en-US"}>AdChoices</a><ArrowUpOutlined rotate={45}/></li>
                </ul>
            </div>
            <div className={"flex flex-row justify-between w-full"}>
                <Button className={"rounded-full bg-white flex items-center text-primary"} icon={<AiOutlineGlobal/>}>
                    Việt Nam
                </Button>
                <p>© 2024 Procter & Gamble</p>
                <div className={"flex flex-row gap-3"}>
                    <AiFillLinkedin size={28}/>
                    <AiFillFacebook size={28}/>
                    <AiFillInstagram size={28}/>
                    <AiFillYoutube size={28}/>
                </div>
            </div>
        </div>
    )
}
export default Footer;