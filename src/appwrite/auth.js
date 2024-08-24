import conf from "../conf/conf";
import { Account, Client, ID } from "appwrite";

//can use it everywhere
export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                alert("Account created successfully!")
                return this.login({ email, password });
            } else {
                return userAccount;
            }
        } catch (error) {
            alert(error);
        }
    }

    async login({ email, password }) {
        try {
            alert("Login successfull!")
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            alert(error);
        }
    }
    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log(error);
        }
        return null;
    }
    async logout() {
        try {
            alert("You are logged out!")
            return await this.account.deleteSessions();
        } catch (error) {
            alert(error);
        }
    }
}

const authService = new AuthService();  //converting into object to use the class

export default authService