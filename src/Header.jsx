const Header = ({ onClick = () => { } }) => {
    return (
        <div className="cursor-pointer" onClick={onClick}>
            <h1 className="md:text-4xl text-3xl font-bold uppercase tracking-[0.4px]">Rayssa <span className="font-normal">&</span> Lucas</h1>
        </div>
    )
}

export default Header