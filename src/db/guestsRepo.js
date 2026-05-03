import { ref, set, onValue } from 'firebase/database'
import { db } from './config'

// salvar dados do convidado
export function saveGuestData(code, idx, data) {
    return set(ref(db, 'guests/' + code + '/' + idx), data)
}

// ouvir mudanças no convidado
export function listenGuestData(code, callback) {
    const guestRef = ref(db, 'guests/' + code)
    onValue(guestRef, snapshot => {
        callback(snapshot.val())
    })
}