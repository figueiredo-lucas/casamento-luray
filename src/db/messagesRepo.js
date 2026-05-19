import { ref, push } from 'firebase/database'
import { db } from './firebase'

export function saveMessage(name, message) {
    return push(ref(db, 'messages'), { name, message })
}
