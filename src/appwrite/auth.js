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
                alert("Account created successfully!");
                await this.login({ email, password });
                return userAccount;
            } else {
                return null;
            }
        } catch (error) {
            alert(error.message);
            return null; 
        }
    }    

    async login({ email, password }) {
        try {
            const session = await this.account.createEmailPasswordSession(email, password);
            alert("Login successful!");
            return session;
        } catch (error) {
            alert(error.message);
            return null;
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
            await this.account.deleteSessions();
            alert("You are logged out!");
            return true; 
        } catch (error) {
            alert(error.message);
            return false;
        }
    }
    
}

const authService = new AuthService();  //converting into object to use the class

export default authService