// MORE CACHING MORE EFFICIENCY.

import { getMessages } from "@/lib/messages";

export default async function MessagesLayout({ children }) {
    // const response = await fetch('http://localhost:8080/messages'
    // , 
        // {
        // headers: { //configuration --> OLMAZSA: layout'daki ve page'deki fetch'lerin farkı kalmaz-->nextjs sadece 1 kere fetch eder. bu MEMOIZATION.
        // //  şu anda 2 farklı fetch algılıyor, 2 farklı fetch yapıyor.
        // // ama next15 de bu değiştirildi, her türlü 2 farklı fetch yapıyor.
        //     'X-ID': 'layout',
        // },

    // }
    // {
    //     // cache: 'force-catch', // next14 deki most aggressive caching, 
    //     cache: 'no-store' //dont cache it. next15+. it does not store the respons yielded by the request. it does not cache it. always  send a new request instead of caching the old request's response.
    //     // cache: 'default',
    //     // cache: 'no-cache'
    //     // cache: 'only-if-cached'
    //     // cache: 'reload'

    // },
    // {
    //     next: {
    // //         // Getting some caching advantages but not caching forever.
    //         revalidate: 5 // for 5 secs, use the cache, dont fetch. after 5 sec delete it and fetch if needed again.

    //     }
    // }
// );

    // const messages = await response.json();

    const messages = getMessages();
    // console.log("MSGS: ", messages)
    const totalMessages = messages.length;

    return(
        <>
            <h1>Important Messages</h1>
            <p>{totalMessages} messages found</p>
            
            <hr />

            {children}

        </>
    )

}