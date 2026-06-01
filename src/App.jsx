import { FaChevronLeft } from 'react-icons/fa';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Header from './Header'
import Rsvp from './Rsvp';
import Landing from './Landing';
import GiftList from './GiftList';
import GuestManual from './GuestManual';
import { useEffect } from 'react';

function App() {
    const navigate = useNavigate()
    const location = useLocation()
    const isLanding = location.pathname === '/'

    useEffect(() => {
        window.scrollTo({ top: 0 })
    }, [location.pathname])

    return (
        <>
            <div className="mx-auto md:gap-8 gap-6 flex flex-col">
                <Header onClick={() => navigate('/')} />
                <div className="flex flex-col mb-4">
                    <div className="foto-capa"></div>
                </div>

                {!isLanding && (
                    <div className="relative flex flex-col gap-6">
                        <div className="cursor-pointer flex items-center gap-2 md:absolute pb-2 top-2"
                            onClick={() => navigate('/')}><FaChevronLeft /> Voltar</div>

                        <Routes>
                            <Route path="/manual" element={<GuestManual />} />
                            <Route path="/rsvp" element={<Rsvp />} />
                            <Route path="/lista" element={<GiftList />} />
                        </Routes>
                    </div>
                )}

                {isLanding && (
                    <Routes>
                        <Route path="/" element={<Landing />} />
                    </Routes>
                )}

                <div className="mx-auto w-32 h-10" style={{ backgroundImage: "url('/chave2.png')", backgroundSize: "100%", backgroundPosition: "cover" }}></div>
            </div>
        </>
    )
}

export default App
