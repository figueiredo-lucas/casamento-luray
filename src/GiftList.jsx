
import { useState } from 'react'
import QRCodeModal from './QRCodeModal'

const LISTA_PRESENTES = [
    {
        title: 'Garantir as comprinhas',
        price: 60,
        icons: ['/gifts/kimono.svg']
    },
    {
        title: 'Biscoitos para alimentar Cervos em Nara',
        price: 80,
        icons: ['/gifts/deer.svg']
    },
    {
        title: 'Degustação de Sakê',
        price: 100,
        icons: ['/gifts/shot.svg']
    },
    {
        title: 'Aula de japonês',
        price: 120,
        icons: ['/gifts/hiragana.svg']
    },
    {
        title: 'Passeio nos templos',
        price: 150,
        icons: ['/gifts/temple.svg']
    },
    {
        title: 'Relaxar num Onsen depois de andar 30 mil passos',
        price: 180,
        icons: ['/gifts/onsen.svg']
    },
    {
        title: 'Conhecer um Izakaya',
        price: 200,
        icons: ['/gifts/izakaya.svg']
    },
    {
        title: 'Ir num Sushi de verdade',
        price: 250,
        icons: ['/gifts/sushi.svg']
    },
    {
        title: 'Dária de hotel',
        price: 230,
        icons: ['/gifts/sleep.svg']
    },
    {
        title: 'Passeio de trem-bala',
        price: 320,
        icons: ['/gifts/shinkansen.svg']
    },
    {
        title: 'Passagem de avião',
        price: 500,
        icons: ['/gifts/airplane.svg']
    },
    {
        title: 'Um presente especial',
        price: 'Você escolhe o valor',
        icons: ['/gifts/gift.svg']
    },
]

const GiftList = () => {
    const [selectedGift, setSelectedGift] = useState(null)

    return (
        <>
            <div className="title">
                Lista de Presentes
            </div>
            <div className="flex flex-col gap-1">
                <span>Estamos organizando nossa lua de mel com muito carinho e, se quiserem, vocês podem nos ajudar a tornar essa viagem ainda mais especial. Escolham uma das opções abaixo ou contribuam com qualquer valor via PIX.
                    <br />Fiquem à vontade para dar apenas o que fizer sentido para vocês.</span>
                <strong>Mas, acima de tudo, o nosso maior presente é ter vocês com a gente nesse dia tão importante!</strong>
            </div>
            <div className="grid md:grid-cols-4 grid-cols-2 gap-4 gap-y-8">
                {LISTA_PRESENTES.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col shadow cursor-pointer"
                        onClick={() => setSelectedGift(item)}
                    >
                        <div className="bg-beige w-full flex items-center justify-center aspect-square">
                            {item.icons.map((icon, iconIndex) => (
                                <img key={iconIndex} src={icon} className="mx-1" />
                            ))}
                        </div>
                        <div className="flex flex-col items-center justify-center p-4">
                            <span className="font-bold">{item.title}</span>
                            <span className="text-sm text-slate-500">{typeof item.price === 'number' ? `R$ ${item.price}` : item.price}</span>
                        </div>
                    </div>
                ))}
            </div>
            {/* <span>
                Essas são só algumas ideias, mas fique à vontade para contribuir com o valor desejado, se puder e quiser!
                <br />
                No mais, sua presença é para nós o melhor presente! :)
            </span> */}

            <QRCodeModal
                isOpen={!!selectedGift}
                onClose={() => setSelectedGift(null)}
                gift={selectedGift}
            />
        </>
    )
}

export default GiftList