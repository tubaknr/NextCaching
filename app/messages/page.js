import Messages from "@/components/messages";
import { getMessages } from "@/lib/messages";

// bu sayfadaki tüm fetch'ler için tek 1 config. istenirse:
// export const revalidate = 5; // num of secs
export const dynamic = 'force-dynamic' // bu sayfadaki tüm fetch'lerin hepsini  her istendiğinde tekrar çek, sıfır cache. no-store ile aynı. avoids caching all.


export default function MessagesPage(){
    // const response = await fetch('http://localhost:8080/messages', 
    // {
    //     headers: {
    //         'X-ID': 'page',
    //     },
    // }
    // );
    const messages = getMessages();
    // const messages = await response.json();

    if(!messages || messages.length === 0){
        return <p>No messages found.</p>;
    }

    return <Messages messages={messages} />
}