import React, { useEffect, useState } from 'react'
import QRCode from 'qrcode'
import { Pix } from './pix'
import { PIX_CONFIG } from './constants'
import { saveMessage } from './db/messagesRepo'
import { MdClose } from 'react-icons/md'
import { BiCopy, BiQrScan, BiSolidKey } from 'react-icons/bi'

const TABS = {
    CHAVE: 'chave',
    QRCODE: 'qrcode',
}

const QRCodeModal = ({ isOpen, onClose, gift }) => {
    const [qrDataUrl, setQrDataUrl] = useState(null)
    const [pixPayload, setPixPayload] = useState(null)
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')
    const [sent, setSent] = useState(false)
    const [tab, setTab] = useState(TABS.CHAVE)

    const _formatCPF = cpf => {
        return cpf
            .replace(/\D/g, '')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d{1,2})/, '$1-$2')
            .replace(/(-\d{2})\d+?$/, '$1')
    }

    const handleSend = async () => {
        if (!name.trim() && !message.trim()) return
        await saveMessage(name.trim(), message.trim())
        setSent(true)
        setName('')
        setMessage('')
    }

    const handleClose = () => {
        setQrDataUrl(null)
        setPixPayload(null)
        setTab(TABS.CHAVE)
        setName('')
        setMessage('')
        setSent(false)
        onClose()
    }

    useEffect(() => {
        if (!isOpen || !gift) return
        
        const txid = gift.title
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/[^a-zA-Z0-9]/g, '')
            .slice(0, 25)
            
        const name = PIX_CONFIG.merchantName.normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/[^a-zA-Z0-9]/g, '')
            .slice(0, 25)

        const price = typeof gift.price === 'number' ? gift.price : 0

        const pix = new Pix(
            PIX_CONFIG.key,
            gift.title,
            name,
            PIX_CONFIG.merchantCity,
            txid,
            price
        )

        // eslint-disable-next-line
        setPixPayload(pix.getPayload())
        
        QRCode.toDataURL(pix.getPayload(), { width: 136, margin: 2 })
            .then(setQrDataUrl)
    }, [isOpen, gift])

    if (!isOpen) return null

    return (
        <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            onClick={handleClose}
        >
            <div
                className="bg-white rounded-2xl p-8 flex flex-col gap-4 max-w-sm w-full mx-4 relative items-start"
                onClick={(e) => e.stopPropagation()}
            >
                {/* <button
                    onClick={handleClose}
                    className="absolute top-2 right-2 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer rounded-full text-2xl w-12 h-12 flex items-center justify-center"
                >
                    <MdClose />
                </button> */}
                <h2 className="text-xl font-bold">{gift?.title}</h2>
                {typeof gift?.price === 'number' && <p className="text-slate-500">{`R$ ${gift?.price}`}</p>}

                <div className="flex w-full justify-start gap-2">
                    <div className={`flex gap-1 px-1 font-semibold items-center border-b-4 border-transparent cursor-pointer
                        ${tab === TABS.CHAVE ? 'text-purple border-purple' : ''}`}
                        onClick={() => setTab(TABS.CHAVE)}>
                        <BiSolidKey /> Chave Pix
                    </div>
                    <div className={`flex gap-1 px-1 font-semibold items-center border-b-4 border-transparent cursor-pointer
                        ${tab === TABS.QRCODE ? 'text-purple  border-purple' : ''}`}
                        onClick={() => setTab(TABS.QRCODE)}>
                        <BiQrScan /> QR Code
                    </div>
                </div>

                {/* <p className="text-xs text-slate-400 text-center">
                    Abra o app do seu banco, acesse Pix e escaneie o QR Code.
                </p> */}

                {tab === TABS.CHAVE && (
                    <div className="flex flex-col gap-2 text-left text-sm mb-[30px] w-full">
                        <div className="flex justify-between items-center">
                            <div className="flex flex-col">
                                <span>Chave Pix (CPF)</span>
                                <strong>{_formatCPF(PIX_CONFIG.key)}</strong>
                            </div>
                            <button onClick={() => navigator.clipboard.writeText(PIX_CONFIG.key)} className="text-slate-400 hover:text-slate-600 transition-colors cursor-pointer flex items-center gap-1 border rounded px-2">
                                <BiCopy /> Copiar
                            </button>
                        </div>
                        <div className="flex flex-col">
                            <span>Nome</span>
                            <strong>{PIX_CONFIG.merchantName}</strong>
                        </div>
                        <div className="flex flex-col">
                            <span>Banco</span>
                            <strong>{PIX_CONFIG.bankName}</strong>
                        </div>
                    </div>
                )}
                
                {tab === TABS.QRCODE && (
                    <div className="flex flex-col items-center gap-2 w-full">
                        <img src={qrDataUrl} alt="QR Code Pix" className="w-34 h-34 mx-auto" />
                        <button onClick={() => navigator.clipboard.writeText(pixPayload)} className="text-sm text-slate-400 hover:text-slate-600 transition-colors cursor-pointer flex items-center gap-1 border rounded px-2">
                            <BiCopy /> Copiar
                        </button>
                    </div>
                )}

                {/* {!sent && <div className="relative w-full">
                    <input className="input rounded-xl w-full mb-2 text-sm" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Seu nome" />
                    <textarea
                        placeholder="Se quiser, deixa um recadinho pra gente 💌"
                        className="w-full rounded-xl input input-bordered p-3 !pr-12 text-sm resize-none"
                        rows={3}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <button onClick={handleSend} className="absolute bottom-4.5 right-2.5 bg-slate-700 hover:bg-slate-900 text-white rounded-full w-8 h-8 flex items-center justify-center transition-colors cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 translate-x-px">
                            <path d="M3.478 2.405a.75.75 0 0 0-.926.94l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.405Z" />
                        </svg>
                    </button>
                </div>}
                {sent && (
                    <p className="text-sm text-purple text-center">Recado enviado! 💜</p>
                )} */}

                <div className="flex flex-col items-center gap-0.5 w-full">
                    <span className="text-lg">ありがとうございます</span>
                    <span className="text-sm text-slate-500">Muito Obrigado!</span>
                </div>


            </div>
        </div>
    )
}

export default QRCodeModal