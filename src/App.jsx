import { useState } from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import Header from './Header'
import Rsvp from './Rsvp';
import { STAGES } from './constants';
import Landing from './Landing';
import GiftList from './GiftList';
import GuestManual from './GuestManual';

function App() {

    const [currStage, setCurrStage] = useState(STAGES.LANDING)

    return (
        <>
            <div className="mx-auto md:gap-8 gap-6 flex flex-col">
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

                {STAGES.LANDING !== currStage
                        && <div className="relative flex flex-col gap-6">
                    <div className="cursor-pointer flex items-center gap-2 md:absolute pb-2 top-2"
                            onClick={() => setCurrStage(STAGES.LANDING)}><FaChevronLeft /> Voltar</div>

                    {STAGES.GUEST_MANUAL === currStage && (
                        <GuestManual setCurrStage={setCurrStage} />
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
                </div>}
                <div className="mx-auto w-32 h-10" style={{ backgroundImage: "url('/chave2.png')", backgroundSize: "100%", backgroundPosition: "cover" }}></div>
            </div >
        </>
    )
}

export default App
