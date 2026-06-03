import { ref, set, get, onValue } from 'firebase/database'
import { db } from './firebase'

// obter todos os convidados
export async function getAllGuests() {
    const snapshot = await get(ref(db, 'guests'))
    const data = snapshot.val()
    if (!data) return []
    return Object.entries(data).flatMap(([code, guests]) =>
        Object.values(guests).map(guest => ({ ...guest, code }))
    )
}

// ouvir todos os convidados em tempo real; retorna função de unsubscribe
export function listenAllGuests(callback) {
    return onValue(ref(db, 'guests'), snapshot => {
        const data = snapshot.val()
        if (!data) return callback([])
        callback(
            Object.entries(data).flatMap(([code, guests]) =>
                Object.values(guests).map(guest => ({ ...guest, code }))
            )
        )
    })
}

// salvar dados do convidado
export function saveGuestData(code, idx, data) {
    return set(ref(db, 'guests/' + code + '/' + idx), data)
}

// obter dados do convidado uma única vez (sem listener)
export async function getGuestData(code) {
    const guestRef = ref(db, 'guests/' + code)
    const snapshot = await get(guestRef)
    return snapshot.val()
}

// // ouvir mudanças no convidado
// export function listenGuestData(code, callback) {
//     const guestRef = ref(db, 'guests/' + code)
//     onValue(guestRef, snapshot => {
//         callback(snapshot.val())
//     })
// }