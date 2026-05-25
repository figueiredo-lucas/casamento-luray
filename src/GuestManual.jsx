import { STAGES } from "./constants"

const GuestManual = ({ setCurrStage }) => {
    return (
        <>
            <div className="flex flex-col gap-4">
                <div className="title">
                    Manual do Convidado
                </div>
                <div className="text-center max-w-[80%] mx-auto">Aqui reunimos tudo que vocês precisam para aproveitar esse dia com tranquilidade ao nosso lado: traje, horários, localização e alguns detalhes especiais preparados com carinho.</div>
            </div>
            <div className="bar">
                <div>
                    <div className="small-icon" style={{ backgroundImage: "url('/mini/cal-roxo.png')" }} />
                    <span className="font-bold">Data</span>
                    <span>29 de Agosto às 16h30</span>
                </div>
                <div>
                    <div className="small-icon" style={{ backgroundImage: "url('/mini/local-roxo.png')" }} />
                    <span className="font-bold">Local</span>
                    <span>
                        <a target="_blank" className="font-bold underline cursor-pointer"
                        href="https://www.google.com/maps/place/Mans%C3%A3o+Atrium/data=!4m2!3m1!1s0x0:0xb7c19f43275455cd?sa=X&ved=1t:2428&ictx=111">Mansão Atrium</a>
                        <br />Brasília, DF.</span>
                </div>
                <div>
                    <div className="small-icon" style={{ backgroundImage: "url('/mini/traje-roxo.png')" }} />
                    <span className="font-bold">Traje</span>
                    <span>Passeio Completo</span>
                </div>
                <div className="hide-sm">
                    <div className="small-icon" style={{ backgroundImage: "url('/mini/rsvp-roxo.png')" }} />
                    <span className="font-bold">RSVP</span>
                    <span>até 29 de Julho</span>
                </div>
                <div className="hide-sm">
                    <div className="small-icon" style={{ backgroundImage: "url('/mini/hotel-roxo.png')" }} />
                    <span className="font-bold">Hospedagem</span>
                    <span>Águas Claras (recomendado)</span>
                </div>
            </div>
            
            <div className="flex gap-6">
                <div className="side-card">
                    <div className="square-img bg1"></div>
                    <div className="link-card"
                        onClick={() => setCurrStage(STAGES.GIFT_LIST)}>
                        <span>LISTA DE PRESENTES</span>
                        <span className="text-xl text-[#7a4787]">▶</span>
                    </div>
                </div>
                <div className="side-card">
                    <div className="square-img bg2"></div>
                    <div className="link-card"
                        onClick={() => setCurrStage(STAGES.RSVP)}>
                        <span>CONFIRMAR PRESENÇA</span>
                        <span className="text-xl text-[#7a4787]">▶</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-6 mt-6">
                <div className="items-list">
                    <div className="icon-rounded" style={{ backgroundImage: "url('/mini/check-roxo.png')" }}></div>
                    <div className="flex flex-col flex-1">
                        <div className="subtitle">Confirme sua presença com antecedência</div>
                        <div className="content flex flex-col gap-3">
                            Sua presença é muito importante para nós! Por isso, pedimos que nos avise com antecedência se poderá comparecer. Isso nos ajudará a organizar tudo da melhor forma possível.
                            <div className="flex flex-col text-xs">
                                <strong>Não estou conseguindo confirmar minha presença. E agora?</strong>
                                Caso não consiga fazer o RSVP pelo site, pode ligar ou mandar uma mensagem no Whatsapp para nossa cerimonialista, a Lys (61) 98307-9291.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="items-list">
                    <div className="icon-rounded" style={{ backgroundImage: "url('/mini/ticket-roxo.png')" }}></div>
                    <div className="flex flex-col flex-1">
                        <div className="subtitle">Respeite a lista de convidados</div>
                        <div className="content">Sabemos que é natural querer compartilhar esse momento com pessoas queridas, mas pedimos que respeitem nossa lista de convidados. Cada nome foi pensado com muito carinho para estar presente nesse momento tão especial de nossas vidas.</div>
                    </div>
                </div>
                <div className="items-list">
                    <div className="icon-rounded" style={{ backgroundImage: "url('/mini/traje-roxo.png')" }}></div>
                    <div className="flex flex-col flex-1">
                        <div className="subtitle">Traje do evento</div>
                        <div className="content">O traje é Passeio Completo! É bom também pensar em um sapato que seja confortável e adequado para jardins, já que boa parte da festa será em um! Por favor, só evite vestido totalmente branco e vestido laranja ou ternos beges para que você não seja confundido com os madrinhas e padrinhos.</div>
                    </div>
                </div>
                <div className="items-list">
                    <div className="icon-rounded" style={{ backgroundImage: "url('/mini/presente-roxo.png')" }}></div>
                    <div className="flex flex-col flex-1">
                        <div className="subtitle">Lista de Presente</div>
                        <div className="content">Não temos lista de presentes físicos, porque já moramos juntos e temos muitas coisas, mas pensamos em algumas soluções para quem quiser e puder dar algum presente. Nós estamos planejando uma lua de mel e ficaríamos felizes em receber 'experiências' como presente de casamento! </div>
                    </div>
                </div>
                <div className="items-list">
                    <div className="icon-rounded" style={{ backgroundImage: "url('/mini/anel-roxo.png')" }}></div>
                    <div className="flex flex-col flex-1">
                        <div className="subtitle">Participe da cerimônia</div>
                        <div className="content">A Cerimônia é um dos momentos mais significativos para nós, noivos, e sua presença faz toda a diferença. Esteja presente, tire muitas fotos, curta com a gente!</div>
                    </div>
                </div>
                <div className="items-list">
                    <div className="icon-rounded" style={{ backgroundImage: "url('/mini/relogio-roxo.png')" }}></div>
                    <div className="flex flex-col flex-1">
                        <div className="subtitle">Seja pontual</div>
                        <div className="content">A Cerimônia é um momento único e delicado. Chegar a tempo nos permitirá compartilhar essa alegria sem interrupções. Contamos com sua pontualidade.</div>
                    </div>
                </div>
                <div className="items-list">
                    <div className="icon-rounded" style={{ backgroundImage: "url('/mini/festa-roxo.png')" }}></div>
                    <div className="flex flex-col flex-1">
                        <div className="subtitle">Divirta-se muito</div>
                        <div className="content">Esse é um dia de celebração, queremos ver vocês felizes!</div>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default GuestManual