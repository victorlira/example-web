import { createUserWithEmailAndPassword, getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import DAOService from "./DAOService";

class LoginService {

    constructor() {
        this.auth = getAuth();
    }

    async login(email, senha) {
        try {
            const userCredencial = await signInWithEmailAndPassword(this.auth, email, senha);
            return userCredencial.user;
        } catch(error) {
            console.log('erro ao realizar login: ', error.message);
            throw error;
        }
    }

    async createUser(nome, perfil, email, senha) {
        try {
            const userCredencial = await createUserWithEmailAndPassword(this.auth, email, senha);

            const dao = new DAOService('professores');

            await dao.insert( { nome: nome, perfil: perfil, userId: userCredencial.user.uid } );

            console.log(userCredencial.user);
            return userCredencial;
        } catch(error) {
            console.log('Erro ao criar usuário', error.message);
            throw error;
        }
    }


    async recoverPassword(email) {
        try {
            await sendPasswordResetEmail(this.auth. email);
        } catch(error) {
            throw error;
        }
    }
}

export default LoginService;