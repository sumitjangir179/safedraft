const conf = {
    appWriteUrl  : String(import.meta.env.VITE_APPWRITE_API_Endpoint),
    appWriteProjectId : String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appWriteDatabaseId : String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appWriteCollectionId : String(import.meta.env.VITE_APPWRITE_COLLECTION_ID)
}

export default conf