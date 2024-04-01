import {Dropdown, Space} from "antd";
import {DownOutlined} from "@ant-design/icons";

const DropDown = ({items, title,isSubDropDown,href}) => {
    let align = {
        offset: [0, 0]
    }
    let textBold = ""
    if(isSubDropDown){
         align = {
            offset: [200, -25]
        }
        textBold ="font-[600]"
    }
    return (

        <Dropdown  align={
            align
        } overlayClassName="dropdown-menu-custom ant-dropdown-menu" menu={{items}}>
            <a href={href}>
                <Space className={`text-primary text-[14px] ${textBold}`}>
                    {title}
                    <DownOutlined/>
                </Space>
            </a>
        </Dropdown>

    )
}
export default DropDown;