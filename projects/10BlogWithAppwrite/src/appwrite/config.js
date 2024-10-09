import {Client, Account, ID, Databases} from "appwrite" 
import conf from "../conf/conf"; 


export class Service {
    client = new Client();
    databases; 
    storage;

    // construct
    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
            
            this.databases = new Databases(this.client)
            this.storage = new Storage(this.client)
    }

    // create post method
    async createPost({title, slug, content, featuredImage, status, userId})
    {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,        // databaseId
                conf.appwriteCollectionId,      // collectionId
                slug,                           // documentId
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                },          // data
            )
        } catch (error) {
            console.log("Appwrite Service :: createPost :: error: ", error);
            
        }
    }

    //update post method
    async updatePost(slug, {title, content, featuredImage, status})
    {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,        // databaseId
                conf.appwriteCollectionId,      // collectionId
                slug,                           // documentId
                {
                    title,
                    content,
                    featuredImage,
                    status,
                },          // data
            )
        } catch (error) {
            console.log("Appwrite Service :: updatePost :: error: ", error);
            
        }
    }

    //delete post method
    async deletePost(slug)
    {
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,        // databaseId
                conf.appwriteCollectionId,      // collectionId
                slug                         // documentId
            )
            return true;
        } catch (error) {
            console.log("Appwrite Service :: deletePost :: error: ", error);
            return false;
        }
    }

    //get single post method
    async getPost(slug)
    {
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,        // databaseId
                conf.appwriteCollectionId,      // collectionId
                slug                         // documentId
            )
        } catch (error) {
            console.log("Appwrite Service :: getPost :: error: ", error);
            return false;
        }
    }

    // get All posts method
    async getPosts(queries =[Query.equal("status", "active")])
    {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,        // databaseId
                conf.appwriteCollectionId,      // collectionId
                queries,
            )
        } catch (error) {
            console.log("Appwrite Service :: getPosts :: error: ", error);
            return false;
        }
    }


    // file upload method
    async uploadFile(file)
    {
        try {
            return await this.storage.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file,    
            )
        } catch (error) {
            console.log("Appwrite Service :: uploadFIle :: error: ", error);
            return false;
        }
    }

    // file delete method
    async deleteFile(fileId)
    {
        try {
            await this.storage.deleteFile(
                conf.appwriteBucketId,
                fileId,    
            )
            return true;
        } catch (error) {
            console.log("Appwrite Service :: deleteFIle :: error: ", error);
            return false;
        }
    }

    getFilePreview()
    {
        return this.storage.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }

}

const service = new Service()

export default service