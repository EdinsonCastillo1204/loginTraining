import { Document } from "mongoose";

export interface Login extends Document {
    
    
    readonly name: string;
    readonly lastname: string;
    readonly userName: string;
    readonly password: string;


}