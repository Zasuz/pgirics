const DropDownItem = ({title, href}) => {
    return (
        <a href={href}>
            <span className={"text-primary py-10 font-[600]"}>{title}</span>
        </a>
    )
}
export default DropDownItem;