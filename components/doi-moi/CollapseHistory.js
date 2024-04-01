import React from 'react';
import { Collapse } from 'antd';
import ItemCollapseHistory from "@/components/doi-moi/ItemCollapseHistory";
const { Panel } = Collapse;
const itemsTimeLine1 = [
    {
        timeLine: "1837",
        title: " William Procter & James Gamble thành lập P&G",
        img: "https://images.ctfassets.net/ywowj8d94i8y/6LWrOADXhwbFneKYkoQqOG/19c5dbf2ceab50a50155cfff5342bc56/Photo_of_William_Procter___James_Gamble.png?fm=webp"
    },
    {
        timeLine: "1879",
        title: "Phát triển xà phòng Ivory",
        img: "https://images.ctfassets.net/ywowj8d94i8y/7d3uNIoU23ltTmxWUDooa4/5a3357b4a0033e495a9834e4e66ab217/Ivory_soap.png?fm=webp"
    },
    {
        timeLine: "1890",
        title: "P&G mở phòng thí nghiệm nghiên cứu và phát triển đầu tiên",

        img: "https://images.ctfassets.net/ywowj8d94i8y/6yELTjn2tBYBsxpLWcizYm/a19990bae305854e7dfdd29bcb66aba6/P_G-s_first_R_D_Lab.png?fm=webp"
    },
    {
        timeLine: "1904",
        title: "King C. Gillette đăng ký bằng sáng chế cho dao cạo râu an toàn",
        img: "https://images.ctfassets.net/ywowj8d94i8y/6XyyGg8qNKicaxAsYLlYrX/ede63e7006cfa90847e654d39ec5c216/King_C._Gillette_patents_safety_razor.png?fm=webp"
    },
    {
        timeLine: "1924",
        title: "P&G thực hiện cuộc nghiên cứu người tiêu dùng đầu tiên",
        img: "https://images.ctfassets.net/ywowj8d94i8y/5b4c1GPtvO9XxPWL2KbZQ3/427ddab2280790e29ebeac40c16982f9/Historic_image_of_P_G_performing_first_consumer_research.png?fm=webp"
    },
    {
        timeLine: "1931",
        title: "Neil McElroy thành lập ban quản lý thương hiệu",
        img: "https://images.ctfassets.net/ywowj8d94i8y/3W4DqEL452SWs8psgb9nlK/0b3fd0299ead4bcc6bb6eb72bf182254/Portrait_of_Neil_McElroy.png?fm=webp"
    },
    {
        timeLine: "1946",
        title: "Giới thiệu bột giặt Tide",
        img: "https://images.ctfassets.net/ywowj8d94i8y/5XFywuiXdifRsLPBtvZUZj/772a32fb7f53f75450448e539ae89035/Old_Tide_logo_image.png?fm=webp"
    },
    {
        timeLine: "1955",
        title: "Ra mắt kem đánh răng Crest",
        img: "https://images.ctfassets.net/ywowj8d94i8y/1MaGz05wNjXTxqDn2uvwDD/a7a79cfe99ee3c9c6f0660cce589c473/Crest_toothpaste.png?fm=webp"
    },

]
const itemsTimeLine2 =  [
    {
        timeLine: "1961",
        title: "Giới thiệu bỉm tã Pampers",
        img: "https://images.ctfassets.net/ywowj8d94i8y/2rsy12mYGr2OW6wMzHc2ta/c08e3c9c37fe68d99bc807103c50dc60/Pamper_introduction_in_1961.png?fm=webp"
    },
    {
        timeLine: "1961",
        title: "Ra mắt dầu gội Head & Shoulders",
        img: "https://images.ctfassets.net/ywowj8d94i8y/1vOuH2KYZPzpYkBdfr32X1/b3c0d2967d055bc8348f7df88fd99b6f/Head___Shoulders_shampoo_1961_packaging.png?fm=webp"
    },
    {
        timeLine: "1983",
        title: "Ra mắt băng vệ sinh Always",
        img: "https://images.ctfassets.net/ywowj8d94i8y/7hRa8YC0hjKWSR5nRbRoe7/a916bc83b946cf9fa87ff5c6dc77f34a/1983_Always_pads_packaging.png?fm=webp"
    },
    {
        timeLine: "1999",
        title: "Ra mắt Swiffer",
        img: "https://images.ctfassets.net/ywowj8d94i8y/7oul9U4uBZFOsrhTPo3x6L/5ae8f617c3647b361c68b8e1df85f334/1999_Swiffer_product_packaging.png?fm=webp"
    },
    {
        timeLine: "2003",
        title: "Olay Regenerist ra mắt",
        img: "https://images.ctfassets.net/ywowj8d94i8y/3ArHKXSXg2ZbQF7FaHvFpg/cf3ccd9b9ce9cf14b7cca2861e9250aa/Olay_Regenerist_product_packaging.png?fm=webp"
    },
    {
        timeLine: "2012",
        title: "Giới thiệu Downy Unstopables",
        img: "https://images.ctfassets.net/ywowj8d94i8y/4GzL7AOnlTcLL3YuqnXCso/672d7d5d306d20cb158534ef716b9425/Unstopables_Product_Shot.png?fm=webp"
    },
    {
        timeLine: "2012",
        title: "TidePODS ra mắt",
        img: "https://images.ctfassets.net/ywowj8d94i8y/2nmN9k4wPZMbD5FL4QeVuV/35c7efbdd941fb2da4d58866130c9326/TidePODS_debut.png?fm=webp"
    },
    {
        timeLine: "2012",
        title: "Giới thiệu Vicks ZZZQuil",
        img: "https://images.ctfassets.net/ywowj8d94i8y/7MnrrqCvT18P0Wu5LoGurS/75f6e357d2cde51fe1da74259eaf3045/Vicks_ZZZQuil_packaging.png?fm=webp"
    },
]
const itemsTimeLine3 =  [
    {
        timeLine: "2018",
        title: "GilletteLabs ra mắt Dao cạo râu phát nhiệt",
        img: "https://images.ctfassets.net/ywowj8d94i8y/7c3dN05V293Mt1HUj8Z7xm/11c9354dafa1c1ccb8bd9f28d43a283d/GilletteLabs_Heated_Razor.png?fm=webp"
    },
    {
        timeLine: "2019",
        title: "Giới thiệu bàn chải điện Oral-B iO",
        img: "https://images.ctfassets.net/ywowj8d94i8y/3pahxPqr5ZsxIMRcANsNhb/503650053f6eeab1a40b929e98632cff/Oral-B_iO_electric_toothbrush.png?fm=webp"
    },
    {
        timeLine: "2019",
        title: "Ra mắt nước xịt chén đĩa Dawn Powerwash",
        img: "https://images.ctfassets.net/ywowj8d94i8y/7dpg3f3gPjNzj5lOyAzpfb/ac5f8a48cf1227904039107f7d39d219/Dawn_Powerwash_dish_spray.png?fm=webp"
    },
    {
        timeLine: "2020",
        title: "Sản phẩm tẩy rửa 24 giờ Microban24 ra mắt",
        img: "https://images.ctfassets.net/ywowj8d94i8y/4p8bORcgVAhAuSSBa3GDfy/4552d444032aab553f8b44dfdbdee170/Microban24_24-hour_cleaning_products.png?fm=webp"
    },
    {
        timeLine: "2021",
        title: "Ra mắt gel làm trắng răng Crest Whitening Emulsions",
        img: "https://images.ctfassets.net/ywowj8d94i8y/3AHod1CNwFWxkmHUeFZrDJ/c684f105d1247cb7c26e4548be05bf46/Crest_Whitening_Emulsions.png?fm=webp"
    },

]
const items = [
    {
        key: '1',
        label: 'This is panel header 1',
        children: <ItemCollapseHistory items={itemsTimeLine1}/> ,
    },
    {
        key: '2',
        label: 'Time line 2',
        children: <ItemCollapseHistory items={itemsTimeLine2}/>,
    },
    {
        key: '3',
        label: 'This is panel header 3',
        children: <ItemCollapseHistory  items={itemsTimeLine3}/>,
    },
];
const CollapseHistory = () => {
    const onChange = (key) => {
        console.log(key);
    };
    return <Collapse defaultActiveKey={['1']}>
        <Panel className={"panel-custom"} header="1837-1955" key="1">
            <ItemCollapseHistory items={itemsTimeLine1}/>
        </Panel>
        <Panel className={"panel-custom"} header="1961-2012" key="2">
            <ItemCollapseHistory items={itemsTimeLine2}/>
        </Panel>
        <Panel className={"panel-custom"} header="2012-2023 " key="3">
            <ItemCollapseHistory items={itemsTimeLine2}/>
        </Panel>
    </Collapse>;
};
export default CollapseHistory;