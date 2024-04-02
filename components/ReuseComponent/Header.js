"use client"
import {Button, Collapse, Drawer} from "antd";
import {ArrowUpOutlined, SearchOutlined} from '@ant-design/icons';
import {
    AiFillFacebook,
    AiFillInstagram,
    AiFillLinkedin,
    AiFillYoutube,
    AiOutlineGlobal,
    AiOutlineMenu
} from "react-icons/ai";

import DropDown from "@/components/ReuseComponent/DropDown";
import React, {useEffect, useState} from "react";
import DropDownItem from "@/components/ReuseComponent/DropDownItem";

import "../../css/header.css"
import "../../app/config.js";
import ButtonHover from "@/components/ReuseComponent/ButtonHover";

const Header = () => {
    const {Panel} = Collapse;
    const [open, setOpen] = useState(false);
    const [isViewportTop, setIsViewportTop] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            // Kiểm tra vị trí cuộn của viewport
            const isTop = window.scrollY === 0;

            // Cập nhật trạng thái của viewport
            setIsViewportTop(isTop);
        };

        // Thêm trình nghe sự kiện cuộn
        window.addEventListener('scroll', handleScroll);

        // Hủy bỏ trình nghe sự kiện khi component bị hủy
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };
    const itemsDropDown1 = [
        {
            key: '1',
            label: (
                <DropDownItem title={"Các nhãn hiệu"} href={BASE_URL + "/cac-nhan-hieu-va-cac-san-pham"}/>
            ),
        },
        {
            key: '2',
            label: (
                <DropDownItem title={"Đổi mới"} href={BASE_URL + "/doi-moi"}/>
            ),
        },
        {
            key: '3',
            label: (
                <DropDownItem title={"An toàn sản phẩm"} href={BASE_URL + "/an-toan-san-pham"}/>
            ),
        },
        {
            key: '4',
            label: (
                <DropDownItem title={"Thành phần"} href={BASE_URL + "/thanh-phan-san-pham"}/>
            ),
        },
        {
            key: '5',
            label: (
                <DropDownItem title={"#BECRUELYFREE"} href={"/cruelty-free"}/>
            )
        },
    ]
    const itemsSubDropDownKey2 = [
        {
            key: '1',
            label: (
                <DropDownItem title={"Bình đẳng giới"} href={BASE_URL + "/binh-dang-gioi"}/>
            ),
        },
        {
            key: '2',
            label: (
                <DropDownItem title={"Người khuyết tật"} href={BASE_URL + "/nguoi-khuyet-tat"}/>
            ),
        },
        {
            key: '3',
            label: (
                <DropDownItem title={"LGBTQ+"} href={BASE_URL + "/lgbtq"}/>
            ),
        },
    ]


    const itemsSubDropDownKey3 = [
        {
            key: '1',
            label: (
                <DropDownItem title={"Làm đẹp có trách nhiệm"} href={BASE_URL + "/binh-dang-gioi"}/>
            ),
        },
    ]
    const itemsDropDown2 = [
        {
            key: '1',
            label: (
                <DropDownItem title={"Ảnh hưởng cộng đồng"} href={BASE_URL + "/anh-huong-cong-dong"}/>
            ),
        },
        {
            key: '2',
            label: (
                <DropDown isSubDropDown={true} title={"Bình đẳng & hòa nhập"} href={BASE_URL + "/binh-dang-va-hoa-nhap"}
                          items={itemsSubDropDownKey2}/>
            ),
        },
        {
            key: '3',
            label: (
               <DropDown isSubDropDown={true} title={"Bền vững"}
                                                       href={BASE_URL+"/ben-vung"}
                                                       items={itemsSubDropDownKey3}/>
            ),
        },
        {
            key: '4',
            label: (
                <DropDownItem title={"Đạo đức và trách nhiệm"} href={BASE_URL + "/"}/>
            ),
        },
    ];
    const itemsDropDown3 = [
        {
            key: '1',
            label: (
                <DropDownItem title={"Chúng tôi là ai"} href={BASE_URL + "/chung-toi-la-ai"}/>
            ),
        },
    ];
    const iconSrc = "https://images.ctfassets.net/ywowj8d94i8y/7znyJc3Y7SecEoKSYKWoaQ/1236329e586995b3dd96701a57a6fd33/P_G_Logo_RGB.svg"
    return (
        <div className={"w-full h-auto fixed bg-white text-black  p-4 z-50"}>

            <a href={BASE_URL}><img src={iconSrc} className={`absolute right-1/2  top-${isViewportTop ? '7' : '0'} ${isViewportTop ? 'scale-[1.2]' : 'scale-1'} h-full py-2 transition-all duration-300`} /></a>

            <div className={"flex justify-between px-4  items-center "}>
                <ButtonHover className={"lg:flex hidden rounded-full flex items-center z-30 text-[13px]"}>
                    <AiOutlineGlobal className={"mr-3"}/>
                    Việt Nam
                </ButtonHover>
                <SearchOutlined size={20} className={"text-primary block lg:hidden"}/>
                <div className={"hidden left-0 right-0 fixed w-full mx-5 lg:flex"}>
                    <div className={"flex w-1/2 justify-end"}>
                        <div className={"w-1/3 mr-[10px] text-end font-bold"}><DropDown
                            title={"Các nhãn hiệu của chúng tôi"}
                            items={itemsDropDown1}/></div>
                        <div className={"w-1/3 mr-[35px] text-start font-bold"}><DropDown
                            title={"Ảnh hưởng của chúng tôi"}
                            items={itemsDropDown2}/></div>
                    </div>
                    <div className={"w-1/2 text-start font-bold"}><DropDown title={"Câu chuyện của chúng tôi"}
                                                                            items={itemsDropDown3}/></div>
                </div>
                <Button
                    className={"hidden lg:block rounded-full w-96-important text-center inline-flex justify-center items-center "}
                    icon={<SearchOutlined className={"text-2xl font-thin text-center "}/>} type="primary" ghost>
                </Button>
                <AiOutlineMenu onClick={showDrawer} className={"block lg:hidden text-primary"} size={20}/>
            </div>
            <Drawer
                className="header-drawer text-primary bg-white bg-opacity-50"
                placement="top"
                closable={false}
                onClose={onClose}
                open={open}
                height="100vh"
                width="100vw"
            >
                <div className={"flex justify-between w-full"}>
                    <button onClick={onClose}
                            className={"w-8 h-8 rounded-full text-primary flex items-center justify-center border-2 border-primary"}>X
                    </button>
                    <button className={"hover:border-3 hover:text-font flex items-center justify-center rounded-full flex items-center z-30 border-2 border-primary p-3"}>
                           <AiOutlineGlobal className={"mr-3"}/>
                        Việt Nam
                    </button>
                </div>
                <div className="border-b-2 border-gray-500 w-full my-10"></div>
                <Collapse className={"my-10"}>
                    <Panel className={"panel-custom"}
                           header={<><img className={"w-16 h-16"}
                                          src={"https://images.ctfassets.net/ywowj8d94i8y/3fxkNu9J2rom5woepw6XD3/e1d823ddf2070b9c37c0608eed223678/Our_Impact_Green.svg"}/>
                               <span className={"font-bold text-primary flex items-center justify-center mx-5"}>Các nhãn hiệu của chúng
                               tôi</span></>} key="1">
                        <div className={"flex flex-col gap-5"}>
                            <DropDownItem title={"Các nhãn hiệu"} href={BASE_URL + "/cac-nhan-hieu-va-cac-san-pham"}/>
                            <DropDownItem title={"Đổi mới"} href={BASE_URL + "/doi-moi"}/>
                            <DropDownItem title={"An toàn sản phẩm"} href={BASE_URL + "/an-toan-san-pham"}/>
                            <DropDownItem title={"Thành phần"} href={BASE_URL + "/thanh-phan"}/>
                            <DropDownItem title={"#BECRUELYFREE"} href={BASE_URL+"/cruelty-free"}/>
                        </div>
                    </Panel>
                </Collapse>
                <Collapse className={"my-10"}>
                    <Panel className={"panel-custom"}
                           header={<><img className={"w-16 h-16"}
                                          src={"https://images.ctfassets.net/ywowj8d94i8y/6fknki68vDXik3Dj9icbet/1592eae3a5bc9b3310b2cde93f722e40/Brands_Blue.svg"}/>
                               <span className={"font-bold text-primary flex items-center justify-center mx-5"}>Ảnh hưởng của chúng
                                   tôi</span></>} key="1">
                        <div className={"flex flex-col gap-5"}>
                            <DropDownItem title={"Ảnh hưởng cộng đồng"} href={BASE_URL + "/anh-huong-cong-dong"}/>
                            <Collapse>
                                <Panel
                                    header={<>
                                        <a href={BASE_URL + "/binh-dang-va-hoa-nhap"}>
                                            <h1 className={"font-bold text-primary"}>
                                                Bình đẳng & hòa nhập
                                            </h1>
                                        </a>

                                    </>}
                                    key="1">
                                    <div className={"flex flex-col gap-5"}>
                                        <DropDownItem title={"Bình đẳng giới"} href={BASE_URL + "/binh-dang-gioi"}/>
                                        <DropDownItem title={"Người khuyết tật"} href={BASE_URL + "/nguoi-khuyet-tat"}/>
                                        <DropDownItem title={"LGBTQ+"} href={BASE_URL + "/lgbtq"}/>
                                    </div>
                                </Panel>
                            </Collapse>
                            <Collapse>
                                <Panel
                                    header={<>
                                        <a href={BASE_URL + "/ben-vung"}><h1 className={"font-bold text-primary"}>
                                            Bền vững </h1></a>
                                    </>}
                                    key="1">
                                    <div className={"flex flex-col"}>
                                        <DropDownItem title={"Làm đẹp có trách nhiệm"}
                                                      href={BASE_URL + "/lam-dep-co-trach-nhiem"}/>
                                    </div>
                                </Panel>
                            </Collapse>
                            <DropDownItem title={"Đạo đức và trách nhiệm doanh nghiệp"}
                                          href={BASE_URL + "/dao-duc-va-trach-nhiem-doanh-nghiep"}/>
                        </div>
                    </Panel>
                </Collapse>
                <Collapse className={"my-10"}>
                    <Panel className={"panel-custom"}
                           header={<><img className={"w-16 h-16"}
                                          src={"https://images.ctfassets.net/ywowj8d94i8y/55V86qXP561o9MxQ0ZIqKO/b75704911756968caf45dd880324b639/Our_Story_Blue.svg"}/>
                               <span className={"font-bold text-primary flex items-center justify-center mx-5"}>Câu chuyện của chúng
                               tôi</span></>} key="1">
                        <div className={"flex flex-col"}>
                            <DropDownItem title={"Chúng tôi là ai"} href={BASE_URL + "/chung-toi-la-ai"}/>
                        </div>
                    </Panel>
                </Collapse>
                <div className="border-b-2 border-gray-500 w-full my-10"></div>
                <li className={"my-3"}><a href={"https://vn.pg.com/lien-he-voi-chung-toi/"}> Liên hệ với chúng tôi</a></li>
                <li className={"my-3"}><a href={"https://www.pgcareers.com/"}> Cơ hội việc làm<ArrowUpOutlined rotate={45}/></a></li>
                <Collapse className={"my-3"}>
                    <Panel className={"text-primary"} key={1} header={"Đối tác và nhà đầu tư"}>
                        <li><a href={"https://www.pginvestor.com/corporate-profile/default.aspx"}>Nhà đầu
                            tư <ArrowUpOutlined rotate={45}/></a></li>
                        <li><a href={"https://www.pgconnectdevelop.com/"}>Làm đối tác với chúng tôi</a><ArrowUpOutlined
                            rotate={45}/></li>
                        <li><a href={"https://pgsupplier.com/"}>Nhà cung cấp</a><ArrowUpOutlined rotate={45}/></li>
                    </Panel>
                </Collapse>
                <Collapse className={"my-3"}>
                    <Panel key={1} header={"Công ty chúng tôi"}>
                        <li><a href={"https://vn.pg.com/lanh-dao/"}>Lãnh đạo</a></li>
                        <li><a href={"https://vn.pg.com/cau-truc-va-quan-tri/"}> Cấu trúc và lãnh đạo</a></li>
                        <li><a href={"https://vn.pg.com/chinh-sach-va-thuc-thi/"}>Chính sách & thực hành</a></li>
                        <li><a href={"https://news.pg.com/home/default.aspx"}>Lưu trữ</a></li>
                        <li><a href={"https://us.pg.com/citizenship-report-2022/recognitions-and-awards/"}> Giải thưởng
                            và công nhận</a><ArrowUpOutlined rotate={45}/></li>
                        <li><a href={"https://vn.pg.com/bao-cao-phat-trien-ben-vung/"}>Tin tức</a><ArrowUpOutlined
                            rotate={45}/></li>
                    </Panel>
                </Collapse>
                <li className={"my-3"}><a href={"https://vn.pg.com/so-do-trang-web/"}>Sơ đồ trang web</a></li>
                <Collapse className={"my-3"}>
                    <Panel key={1} header={"Legal"}>
                        <li><a href={"https://privacypolicy.pg.com/en-US"}>Thông tin bảo mật</a><ArrowUpOutlined rotate={45}/></li>
                        <li> <a href={"https://termsandconditions.pg.com/vi-vn/"}>Điều khoản & điều lệ</a><ArrowUpOutlined rotate={45}/></li>
                        <li><a href={"https://privacypolicy.pg.com/en-US"}>AdChoices</a><ArrowUpOutlined rotate={45}/></li>
                    </Panel>
                </Collapse>
                <div className={"flex flex-col justify-center items-center w-full mt-10"}>
                    <div className={"flex flex-row gap-3"}>
                        <AiFillLinkedin size={28}/>
                        <AiFillFacebook size={28}/>
                        <AiFillInstagram size={28}/>
                        <AiFillYoutube size={28}/>
                    </div>
                    <p>© 2024 Procter & Gamble</p>
                </div>
            </Drawer>

        </div>
    )
}
export default Header;