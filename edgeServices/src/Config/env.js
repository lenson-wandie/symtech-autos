import dotenv from 'dotenv'
import path from "path"
import {fileURLToPath} from "url"


const __filename= fileURLToPath(import.meta.url)
const __dirname=path.dirname(__filename)

const envPath = path.resolve(__dirname,"../../.env")
dotenv.config({ path: envPath });
 export const CORE_BASE_URL = process.env.CORE_BASE_URL
 export const CORE_API_KEY = process.env.CORE_API_KEY

if(!CORE_BASE_URL){
    throw new Error("CORE_BASE_URL missing")
}
if(!CORE_API_KEY){
    throw new Error("CORE_API_KEY missing")
}