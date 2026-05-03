const Header = ({ onClick = () => { } }) => {
    return (
        <div className="border-t border-b py-3 cursor-pointer" onClick={onClick}>
            <h1 className="md:text-4xl text-3xl font-bold uppercase tracking-[0.4px]">Rayssa & Lucas</h1>
        </div>
    )
}

export default Header