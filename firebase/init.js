import * as firebase from 'firebase'
import 'firebase/firestore'
import credentials from './credentials'

// export firestore db
export default !firebase.apps.length ? firebase.initializeApp(credentials.config).firestore() : firebase.firestore()
