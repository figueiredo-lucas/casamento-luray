import { ref, set, get } from 'firebase/database'
import { db } from './firebase'

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