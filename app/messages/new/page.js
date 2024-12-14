import { redirect } from "next/navigation";
import {addMessage} from "@/lib/messages";
import { revalidatePath } from "next/cache";

export default function NewMessagePage(){

    async function createMessage(formData) { // form server action 
        'use server';
        const message = formData.get("message");
        // console.log("MSG: ",message);
        addMessage(message); // lib sql INSERT INTO 
        // revalidatePath();
        redirect('/messages');
    }

    return(
        <>
        <h2>New message</h2>
        <form action={createMessage}>
            <p className="form-control">
                <label htmlFor="message">Your message</label>
                <textarea id="message" name="message" required rows="5"/>
            </p>
            <p className="form-actions">
                <button type="submit">Send</button>
            </p>
        </form>    
        </>
    )
}