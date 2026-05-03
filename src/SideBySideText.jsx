const SideBySideText = ({ left, right }) => {
    return (
        <div className={`grid grid-cols-2 justify-between uppercase md:text-lg text-sm
            font-bold tracking-[0.4px]`}>
            <div className="flex flex-col text-left">
                {left.map(l => <span key={l}>{l}</span>)}
            </div>
            <div className="flex flex-col text-right">
                {right.map(r => <span key={r}>{r}</span>)}
            </div>
        </div>
    )
}

export default SideBySideText