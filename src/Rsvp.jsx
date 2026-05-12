import { useState } from "react"
import { getGuestData, saveGuestData } from "./db/guestsRepo"
import { FaCheck, FaTimes } from "react-icons/fa"

const Rsvp = () => {

    const [guestCode, setGuestCode] = useState('')
    const [guests, setGuests] = useState(null)
    const [error, setError] = useState(null)

    const handleContinue = () => {

        getGuestData(guestCode).then(data => {
            
            if (!data) {
                setError('Código de convite inválido.')
                return
            }
                
            setGuests(data)
            console.log('Dados do convidado:', data)
        }).catch(error => {
            console.error('Erro ao obter dados do convidado:', error)
        })

    }

    const confirm = (guest, idx, isAttending) => {
        console.log(`Convidado ${isAttending ? 'confirmou presença' : 'não poderá comparecer'}`)
        const updatedGuests = guests.map((g, i) => i === idx ? { ...g, confirmed: isAttending } : g)
        setGuests(updatedGuests)
        saveGuestData(guestCode, idx, { ...guest, confirmed: isAttending })
    }

    if (!guests)
        return (<form className="flex flex-col gap-6 items-center" onSubmit={(e) => { e.preventDefault(); handleContinue() }}>
            <span className="title">
                Qual o código está no convite?
            </span>
            <div className="flex flex-col gap-2 w-full text-center mt-4">
                <span className="text-slate-500">Informe o código que recebeu.</span>
                {error && <span className="text-red-500">{error}</span>}
                <input
                    type="text" placeholder="Identificação do convite" className={`input ${error ? 'input-error' : ''}`}
                    onChange={(e) => setGuestCode(e.target.value)} value={guestCode} />
            </div>
            <button className="button" type="submit">Continuar</button>
        </form>)

    return (<div className="flex flex-col gap-6 items-center">
        <div className="flex flex-col gap-2">
            <span className="title">
                Confirme sua presença
            </span>
            <span className="text-center">Favor confirmar até o dia <strong>29 de Julho de 2026</strong>.</span>
        </div>
        <div className="flex flex-col w-full gap-4">
            <ul className="flex flex-col gap-2 w-full">
                {guests.map((guest, index) => (
                    <li key={index} className="flex items-center gap-2 bg-[#FFFBEB] py-2 px-4 rounded">
                        <span className="flex-1 text-left font-bold">{guest.name}</span>
                        <button className="cursor-pointer w-8 h-8 flex items-center justify-center"
                            onClick={() => confirm(guest, index, false)}>
                            <FaTimes className={`text-lg ${guest.confirmed === false ? 'text-red-500' : 'text-slate-300'}`} />
                        </button>
                        <button className="cursor-pointer w-8 h-8 flex items-center justify-center"
                            onClick={() => confirm(guest, index, true)}>
                            <FaCheck className={`text-lg ${guest.confirmed === true ? 'text-green-500' : 'text-slate-300'}`} />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    </div>)
}

export default Rsvp