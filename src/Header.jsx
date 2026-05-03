const Header = ({ onClick = () => { } }) => {
    return (
        <div className="border-t border-b py-4 cursor-pointer" onClick={onClick}>
            <h1 className="text-[50px] leading-[42px] font-bold uppercase tracking-[0.4px]">Rayssa & Lucas</h1>
        </div>
    )
}

export default Header