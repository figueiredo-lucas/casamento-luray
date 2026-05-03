import { useState } from 'react';
import './App.css'
import Header from './Header'
import SideBySideText from './SideBySideText'

const STAGES = {
    LANDING: 'LANDING',
    RSVP: 'RSVP',
    DRESS_CODE: 'DRESS_CODE',
    GIFT_LIST: 'GIFT_LIST',
}

function App() {

    const [currStage, setCurrStage] = useState(STAGES.LANDING)

    return (
        <>
            <Header onClick={() => setCurrStage(STAGES.LANDING)} />
            <div className="max-w-[64rem] mx-auto px-4 py-8 gap-12 flex flex-col">
                <div className={`flex flex-col gap-4 ${STAGES.LANDING !== currStage ? 'mb-12' : 'mb-0'}`}>
                    <div className="foto-capa"></div>
                    {/* <SideBySideText
                        size={14}
                        left={['Maria das Graças', 'José Arimatéia']}
                        right={['Maria Aparecida', 'Leonardo']} /> */}

                    {STAGES.LANDING === currStage && (
                        <div className="border-b pb-8">
                            <SideBySideText left={['29 de agosto de 2026', '16h30']} right={['Mansão Atrium', 'Park Way, Brasília']} />
                        </div>
                    )}
                </div>

                {STAGES.RSVP === currStage && (
                    <div className="flex flex-col gap-6 items-center">
                        <span className="text-center uppercase font-bold tracking-[0.4px] text-[40px] leading-[42px]">
                            Qual o código está no convite?
                        </span>
                        <div className="flex flex-col gap-2 w-full">
                            <span className="text-slate-500">Você pode informar o código que recebeu.</span>

                            <input
                                type="text" placeholder="Identificação do convite" className="input" />
                        </div>
                        <button className="button">Continuar</button>
                    </div>
                )}

                {STAGES.LANDING === currStage && (
                    <div className="flex gap-[60px] justify-center">
                        <button className="button w-[340px]"
                            onClick={() => setCurrStage(STAGES.RSVP)}>CONFIRMAR PRESENÇA</button>
                        <a className="button w-[340px]"
                            target="_blank" href="https://calendar.google.com/calendar/r/eventedit?dates=20260829T163000/20260829T230000&location=Mansão%20Atrium%2C%20Park%20Way%2C%20Brasília&text=Casamento%20Rayssa%20%26%20Lucas">ADICIONAR A AGENDA</a>
                        <button className="button w-[340px]">LISTA DE PRESENTES</button>
                    </div>
                )}


                {STAGES.DRESS_CODE === currStage && (
                    <div className="text-center uppercase font-bold tracking-[0.4px] text-[30px] leading-[42px] pb-12 border-b">
                        Manual do Convidado
                    </div>
                )}

                {/* <div className="flex gap-[40px] h-[270px] pb-[76px] mb-[64px]">
                    <div className="flex-1 dc dc-1"></div>
                    <div className="flex-1 dc dc-2"></div>
                    <div className="flex-1 dc dc-3"></div>
                </div>
                <div className="text-center uppercase font-bold tracking-[0.4px] text-[40px] leading-[42px] pb-[70px]">
                    Mood da Festa
                </div>
                <div className="flex gap-[40px] h-[270px] pb-[76px] border-b mb-[140px]">
                    <div className="flex-1 dc dc-1"></div>
                    <div className="flex-1 dc dc-2"></div>
                    <div className="flex-1 dc dc-3"></div>
                </div>
                <div className="text-center uppercase font-bold tracking-[0.4px] text-[30px] leading-[42px] mb-[70px]">
                    Drink da Noiva
                </div>
                <div className="flex gap-[40px] h-[650px]">
                    <div className="bg-[#ABC97D] rounded-t-[170px] flex-1"></div>
                    <div className="flex flex-col gap-[32px] items-center flex-1 justify-center tracking-[0.4px] text-[20px] leading-[30px]">
                        <span className="uppercase font-bold">Ingredientes</span>
                        <div className="flex flex-col">
                            <span className="poppins-regular">1. Garrafa de xxxx</span>
                            <span className="poppins-regular">2. cxxxxxxxxxxxxx</span>
                            <span className="poppins-regular">3. cxxxxxxxxxxxxx</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="uppercase font-bold">Harmonize com:</span>
                            <span className="poppins-regular">Série da XXX da Netflix!</span>
                        </div>
                    </div>
                </div>
                <div className="text-center uppercase font-bold tracking-[0.4px] text-[30px] leading-[42px] my-[70px]">
                    Drink do Noivo
                </div>
                <div className="flex gap-[40px] h-[650px] mb-[70px]">
                    <div className="flex flex-col gap-[32px] items-center flex-1 justify-center tracking-[0.4px] text-[20px] leading-[30px]">
                        <span className="uppercase font-bold">Ingredientes</span>
                        <div className="flex flex-col">
                            <span className="poppins-regular">1. Garrafa de xxxx</span>
                            <span className="poppins-regular">2. cxxxxxxxxxxxxx</span>
                            <span className="poppins-regular">3. cxxxxxxxxxxxxx</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="uppercase font-bold">Harmonize com:</span>
                            <span className="poppins-regular">Série da XXX da Netflix!</span>
                        </div>
                    </div>
                    <div className="bg-[#C7BFFF] rounded-t-[170px] flex-1"></div>
                </div> */}
                {/* <div className="spotify">
                    <div className="capa-spotify">
                        Capa Spotify
                    </div>
                </div> */}
                {/* <button className="btn p-4 bg-black w-[340px] text-white font-bold tracking-[0.2px]">Playlist</button> */}
                {/* <div className="text-center uppercase font-bold tracking-[0.4px] text-[30px] leading-[42px] my-[70px]">
                    Hospedagem e dicas úteis
                </div> */}
            </div >
        </>
    )
}

export default App
