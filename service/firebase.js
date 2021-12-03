import firebase from 'firebase'

const firebaseConfig = {
    apiKey:process.env.REACT_APP_FiREBASE_API_KEY,
    authDomain:process.env.REACT_APP_FiREBASE_AUTH_DOMAIN,
    databaseURL:process.env.REACT_APP_FiREBASE_DB_URL,
    projectId:process.env.REACT_APP_FiREBASE_PROJECT_ID
}


const firebaseApp = firebase.initializeApp(firebaseConfig)
export default firebaseApp