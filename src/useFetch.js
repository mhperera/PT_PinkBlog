import { useState, useEffect } from 'react';

// CUSTOM HOOK
const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null); 

    useEffect(() => {
        
        setTimeout(()=>{

            fetch(url) // promise

            .then(res => {

                // CHECK ERRORS COMING BACK FROM THE SERVER (This also catchs from the .catch() block) (To check change the endpoint)
                if(!res.ok){
                    throw Error('Could not fetch data for that resource.');
                }

                return res.json();
            })

            .then((data)=>{
                setData(data);
                setIsPending(false);
                setError(null);
            })

            // CHECK FOR THE NETWORK ERROR (To check this abort json server)
            .catch((err)=>{
                setIsPending(false);
                setError(err.message);
            })

        },1000)

    }, [url]);

    // RETURN AN OBJECT
    return {data, isPending, error } ;

}

export default useFetch;