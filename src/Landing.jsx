import { STAGES } from './constants'
import SideBySideText from './SideBySideText'

const Landing = ({ setCurrStage }) => {
    return (
        <>
            <div className="md:text-[40px] text-xl md:leading-[50px] font-bold tracking-[0.4px] text-center">
                Venha pelo amor, fique pela festa!
                {/* Estamos animados para te convidar para a nossa cerimônia no jardim, seguida de um jantar. Nos vemos lá! */}
            </div>
            <div className="border-t md:pt-8 pt-6">
                <SideBySideText left={['29 de agosto de 2026', '16h30']} right={['Mansão Atrium', 'Park Way, Brasília']} />
            </div>
            <div className="flex justify-between w-full md:flex-row flex-col gap-3 md:gap-8">
                <button className="button flex-1"
                    onClick={() => setCurrStage(STAGES.RSVP)}>CONFIRMAR PRESENÇA</button>
                <a className="button flex-1"
                    target="_blank" href="https://calendar.google.com/calendar/r/eventedit?dates=20260829T163000/20260829T230000&location=Mansão%20Atrium%2C%20Park%20Way%2C%20Brasília&text=Casamento%20Rayssa%20%26%20Lucas">ADICIONAR A AGENDA</a>
                <button className="button flex-1"
                    onClick={() => setCurrStage(STAGES.GIFT_LIST)}>LISTA DE PRESENTES</button>
            </div>
            <div className="mood-festa flex flex-col items-center justify-center text-white text-center px-4">
                <span className="md:text-xl uppercase">Mood da Festa</span>
                <span className="title">Garden party</span>
                <span className="md:text-lg text-sm md:mt-8 mt-6">Para entrar na vibe do nosso casamento, preparamos também algumas dicas úteis.</span>
            </div>
            <div className="flex space-around md:gap-8 gap-6 md:flex-row flex-col">
                <div className="garden flex-1"></div>
                <div className="card">
                    <div className="extra extra-1"></div>
                    <button className="button small" onClick={() => setCurrStage(STAGES.GUEST_MANUAL)}>Manual do Convidado</button>
                </div>
                <div className="card">
                    <div className="extra extra-2"></div>
                    <button className="button small" onClick={() => setCurrStage(STAGES.EXTRA_INFO)}>Informações extras</button>
                </div>
            </div>
        </>
    )
}

export default Landing