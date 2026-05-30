import { STAGES } from './constants'
import SideBySideText from './SideBySideText'

const LINK = "https://calendar.google.com/calendar/r/eventedit?dates=20260829T163000/20260829T230000&location=Mansão%20Atrium%2C%20Park%20Way%2C%20Brasília&text=Casamento%20Rayssa%20%26%20Lucas"

const LINK2 = "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Casamento+Rayssa+e+Lucas&dates=20260829T163000/20260829T230000&location=Mansao+Atrium,+Park+Way,+Brasilia&ctz=America/Sao_Paulo"

const Landing = ({ setCurrStage }) => {
    return (
        <>
            <div className="">
                <SideBySideText left={['29 de agosto de 2026', '16h30']} right={['Mansão Atrium', 'Park Way, Brasília']} />
            </div>
            <div className="flex flex-col gap-4">
                <div className="md:text-[40px] text-xl md:leading-[50px] font-bold tracking-[0.4px] text-center">
                    Venha pelo amor, fique pela festa!
                    {/* Estamos animados para te convidar para a nossa cerimônia no jardim, seguida de um jantar. Nos vemos lá! */}
                </div>
                <span className="text-center">Abaixo, você pode <span className="underline cursor-pointer" onClick={() => setCurrStage(STAGES.RSVP)}>confirmar sua presença</span> ou checar informações sobre o nosso evento.</span>
            </div>
            <div className='border-t'></div>
            {/* <div className="flex justify-between w-full md:flex-row flex-col gap-3 md:gap-8">
                <button className="button flex-1"
                    onClick={() => setCurrStage(STAGES.RSVP)}>CONFIRMAR PRESENÇA</button>
                <a className="button flex-1"
                    target="_blank" href="https://calendar.google.com/calendar/r/eventedit?dates=20260829T163000/20260829T230000&location=Mansão%20Atrium%2C%20Park%20Way%2C%20Brasília&text=Casamento%20Rayssa%20%26%20Lucas">ADICIONAR A AGENDA</a>
                <button className="button flex-1"
                    onClick={() => setCurrStage(STAGES.GIFT_LIST)}>LISTA DE PRESENTES</button>
            </div> */}
            {/* <div className="mood-festa flex flex-col items-center justify-center text-white text-center px-4">
                <span className="md:text-xl uppercase">Mood da Festa</span>
                <span className="title">Garden party</span>
                <span className="md:text-lg text-sm md:mt-8 mt-6">Para entrar na vibe do nosso casamento, preparamos também algumas dicas úteis.</span>
            </div> */}
            <div className="flex space-around md:gap-6 gap-4 md:flex-row flex-col">
                {/* <div className="garden flex-1"></div> */}
                <div className="card">
                    <div className="extra extra-2"></div>
                    <button className="button small"
                        onClick={() => setCurrStage(STAGES.RSVP)}>CONFIRMAR PRESENÇA</button>
                </div>
                <div className="card">
                    <div className="extra color-bg1"></div>
                    {/* <a className="button small" target="_blank" href={LINK}>ADICIONAR A AGENDA</a> */}
                        
                    <a className="button small" target="_blank" href={LINK2}>ADICIONAR A AGENDA</a>
                </div>
                <div className="card">
                    <div className="extra extra-1"></div>
                    <button className="button small" onClick={() => setCurrStage(STAGES.GUEST_MANUAL)}>MANUAL DO CONVIDADO</button>
                </div>
                <div className="card">
                    <div className="extra color-bg2"></div>
                    <button className="button small" onClick={() => setCurrStage(STAGES.GIFT_LIST)}>LISTA DE PRESENTES</button>
                </div>
                
            </div>
        </>
    )
}

export default Landing