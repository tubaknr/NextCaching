export default async function MessagesLayout({ children }) {
    const response = await fetch('http://localhost:8080/messages', 
        // {
        // headers: { //configuration --> OLMAZSA: layout'daki ve page'deki fetch'lerin farkı kalmaz-->nextjs sadece 1 kere fetch eder. bu MEMOIZATION.
        // //  şu anda 2 farklı fetch algılıyor, 2 farklı fetch yapıyor.
        // // ama next15 de bu değiştirildi, her türlü 2 farklı fetch yapıyor.
        //     'X-ID': 'layout',
        // },

    // }
    {
        // cache: 'force-catch', // next14 deki fetch memoization, MORE CACHING MORE EFFICIENCY.
        cache: 'no-store' //dont cache it

    },
    {
        next: {
            // Getting some caching advantages but not caching forever.
            revalidate: 5 // for 5 secs, use the cache then delete it.

        }
    }
);

    const messages = await response.json();
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