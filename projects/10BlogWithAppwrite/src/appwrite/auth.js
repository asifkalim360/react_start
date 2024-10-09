import {Client, Account, ID} from "appwrite" 
import conf from "../conf/conf";

export class AuthService {
    client = new Client(); 
    account; 

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        
            this.account = new Account(this.client)
    }

    // Sign-Up functionality.
    async createAccount({email, password, name})
    {
        try {
            const userAccount =  await this.account.create(ID.unique(), email, password, name)
            if(userAccount)
            {
                //call another method.
                return this.login({email, password})

            } else {
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    // Sign-In Functionality. 
    async login({email, password}) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    //Find Current User
    async getCurrentUser()
    {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite service: ",error)
            throw error;
        }
        // return null;
    }

    //logout 
    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite Service :: logout :: error: ", error);
            
            throw error;
        }
    }

}
    
const authService = new AuthService();

export default authService
