import { useState } from 'react';
import './App.css'
import Header from './Header'
import SideBySideText from './SideBySideText'
import Rsvp from './Rsvp';
import { FaBackward, FaChevronLeft, FaHeart } from 'react-icons/fa';

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
            <div className="max-w-[64rem] mx-auto md:gap-8 gap-6 flex flex-col">
                <Header onClick={() => setCurrStage(STAGES.LANDING)} />
                <div className="flex flex-col mb-4">
                    <div className="foto-capa"></div>
                    {/* <SideBySideText
                        left={['Maria das Graças Morais', 'José Arimatéia de Araújo']}
                        right={['Maria Aparecida Rocha', 'Leonardo Figueiredo']} /> */}
                </div>


                {STAGES.LANDING === currStage && (
                    <>
                        <div className="md:text-[40px] text-xl md:leading-[50px] font-bold tracking-[0.4px] text-center">
                            Estamos animados para te convidar para a nossa cerimônia no jardim, seguida de um jantar. Nos vemos lá!
                        </div>
                        <div className="border-t md:pt-8 pt-6">
                            <SideBySideText left={['29 de agosto de 2026', '16h30']} right={['Mansão Atrium', 'Park Way, Brasília']} />
                        </div>
                    </>
                )}

                {STAGES.RSVP === currStage && (
                    <div className="text-left relative">
                        <div className="cursor-pointer flex items-center gap-2 md:absolute pb-2 top-2" onClick={() => setCurrStage(STAGES.LANDING)}><FaChevronLeft /> Voltar</div>
                        <Rsvp />
                    </div>
                )}

                {STAGES.LANDING === currStage && (
                    <>
                        <div className="flex justify-between w-full md:flex-row flex-col gap-3 md:gap-8">
                            <button className="button flex-1"
                                onClick={() => setCurrStage(STAGES.RSVP)}>CONFIRMAR PRESENÇA</button>
                            <a className="button flex-1"
                                target="_blank" href="https://calendar.google.com/calendar/r/eventedit?dates=20260829T163000/20260829T230000&location=Mansão%20Atrium%2C%20Park%20Way%2C%20Brasília&text=Casamento%20Rayssa%20%26%20Lucas">ADICIONAR A AGENDA</a>
                            <button className="button flex-1">LISTA DE PRESENTES</button>
                        </div>
                        <div className="mood-festa flex flex-col items-center justify-center text-white text-center px-4">
                            <span className="md:text-xl uppercase">Mood da Festa</span>
                            <span className="uppercase font-bold tracking-[0.4px] md:text-4xl text-2xl">Garden party</span>
                            <span className="md:text-lg text-sm md:mt-8 mt-6">Para entrar na vibe do nosso casamento, preparamos também algumas dicas úteis.</span>
                        </div>
                        <div className="flex space-around md:gap-8 gap-6 md:flex-row flex-col">
                            <div className="garden flex-1"></div>
                            <div className="cartao">
                                <div className="extra extra-1"></div>
                                    <button className="button small">Manual do Convidado</button>
                            </div>
                            <div className="cartao">
                                <div className="extra extra-2"></div>
                                <button className="button small">Informações extras</button>
                            </div>
                        </div>
                    </>
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
