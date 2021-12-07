import { database } from "../firebase";

export function registerUserForChat(name,email){
    database.ref("users").push({
        name,
        email
    });
}

export function writeMessages(content, email){
    database.ref("msgs").push({
        content,
        email,
        timeStamp:Date.now()
    })
}