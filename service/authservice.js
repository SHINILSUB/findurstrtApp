import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
  } from "firebase/auth";


class AuthService {
    constructor(){
        this.firebaseAuth = getAuth();
        this.googleProvider = new GoogleAuthProvider();
    };
    getProvider(providerName){
        switch(providerName){
            case 'Google':
                return this.googleProvider;
            default:
                throw new Error(`not supported provider:${providerName}`)
        }
    };
    login(providerName){
        const authProvider = this.getProvider(providerName)
        return signInWithPopup(this.firebaseAuth, authProvider)
    };
    logout(){
        this.firebaseAuth.signOut();
    };
    onAuthChange(onUserChanged){
        this.firebaseAuth.onAuthStateChanged((user)=>{onUserChanged(user)})
    };
}
export default AuthService;