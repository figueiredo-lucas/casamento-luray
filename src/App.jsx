import { useState } from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import Header from './Header'
import Rsvp from './Rsvp';
import { STAGES } from './constants';
import Landing from './Landing';
import GiftList from './GiftList';

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
                    <Landing setCurrStage={setCurrStage} />
                )}

                <div className="relative flex flex-col gap-6">
                    {STAGES.LANDING !== currStage
                        && <div className="cursor-pointer flex items-center gap-2 md:absolute pb-2 top-2"
                            onClick={() => setCurrStage(STAGES.LANDING)}><FaChevronLeft /> Voltar</div>}

                    {STAGES.GUEST_MANUAL === currStage && (
                        <div className="title">
                            Manual do Convidado
                        </div>
                    )}

                    {STAGES.RSVP === currStage && (
                        <Rsvp />
                    )}
                    
                    {STAGES.GIFT_LIST === currStage && (
                        <GiftList />
                    )}
                    
                    {STAGES.EXTRA_INFO === currStage && (
                        <div className="title">
                            Informações Extras
                        </div>
                    )}
                </div>

                


                

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
