
const LISTA_PRESENTES = [
    {
        title: 'Conhecer um Izakaya',
        price: 50
    },
    {
        title: 'Degustação de Sakê',
        price: 70
    },
    {
        title: 'Cumprimentar cervos em Nara',
        price: 70
    },
    {
        title: 'Passear nos templos',
        price: 150
    },
    {
        title: 'Aula de japonês',
        price: 160
    },
    {
        title: 'Ir num Sushi de verdade',
        price: 200
    },
    {
        title: 'Comer Wagyu Beef',
        price: 150
    },
    {
        title: 'Passeio de trem-bala',
        price: 320
    },
    {
        title: 'Relaxar num Onsen depois de andar 30 mil passos',
        price: 200
    },
]

const GiftList = () => {
    return (
        <>
            <div className="title">
                Presentes
            </div>
            <span>Estamos planejando uma lua de mel e ficaríamos felizes em receber 'experiências' ou parte da viagem como presente de casamento. Você pode escolher dentre as experiências abaixo e fazer um PIX.</span>
            <div className="grid md:grid-cols-3 grid-cols-2 gap-4">
                {LISTA_PRESENTES.map((item, index) => (
                    <div key={index} className="flex flex-col hover:shadow-lg transition-shadow cursor-pointer">
                        <div className="bg-[#FFFBEB] w-full flex items-center justify-center py-8">
                            <img src="/chave-vert.png" />
                        </div>
                        <div className="flex flex-col items-center justify-center gap-1 p-4">
                            <span className="font-bold">{item.title}</span>
                            <span className="text-sm text-slate-500">R$ {item.price}</span>
                        </div>
                    </div>
                ))}
            </div>
            <span>
                Essas são só algumas ideias, mas fique à vontade para contribuir com o valor desejado, se puder e quiser!
                <br />
                No mais, sua presença é para nós o melhor presente! :)
            </span>
        </>
    )
}

export default GiftList