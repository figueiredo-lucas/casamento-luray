import { useNavigate } from 'react-router-dom'
import SideBySideText from './SideBySideText'

const LINK = "https://calendar.google.com/calendar/r/eventedit?dates=20260829T163000/20260829T230000&location=Mansão%20Atrium%2C%20Park%20Way%2C%20Brasília&text=Casamento%20Rayssa%20%26%20Lucas"

const LINK2 = "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Casamento+Rayssa+e+Lucas&dates=20260829T163000/20260829T230000&location=Mansao+Atrium,+Park+Way,+Brasilia&ctz=America/Sao_Paulo"

const Landing = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className="">
                <SideBySideText left={['29 de agosto de 2026', '16h30']} right={['Mansão Atrium', 'Park Way, Brasília']} />
            </div>
            <div className="flex flex-col gap-4">
                <div className="md:text-[40px] text-xl md:leading-[50px] font-bold tracking-[0.4px] text-center">
                    Venha pelo amor, fique pela festa!
                </div>
                <span className="text-center">Abaixo, você pode <span className="underline cursor-pointer" onClick={() => navigate('/rsvp')}>confirmar sua presença</span> ou checar informações sobre o nosso evento.</span>
            </div>
            <div className='border-t'></div>
            <div className="flex space-around md:gap-6 gap-4 md:flex-row flex-col">
                <div className="card">
                    <div className="extra extra-2"></div>
                    <button className="button small"
                        onClick={() => navigate('/rsvp')}>CONFIRMAR PRESENÇA</button>
                </div>
                <div className="card">
                    <div className="extra color-bg1"></div>
                    <a className="button small" target="_blank" href={LINK2}>ADICIONAR A AGENDA</a>
                </div>
                <div className="card">
                    <div className="extra extra-1"></div>
                    <button className="button small" onClick={() => navigate('/manual')}>MANUAL DO CONVIDADO</button>
                </div>
                <div className="card">
                    <div className="extra color-bg2"></div>
                    <button className="button small" onClick={() => navigate('/lista')}>LISTA DE PRESENTES</button>
                </div>
            </div>
        </>
    )
}

export default Landing