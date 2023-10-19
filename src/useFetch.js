import { useEffect, useState } from 'react';

const useFetch = url => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {  
        setTimeout(() => {
            fetch(url)
            .then(response => {
                if(!response.ok) {
                  throw Error('could not fetch the data for that resource')  
                }
                return response.json();
            })
            .then(data => {
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch(error => {
                setIsPending(false);
                setError(error.message);
            })
        }, 1000);
    }, [url]);  // when the url changes, this function is re-rerun

    return { data, isPending, error };  // Normally, when we call a hook it returns something. This also could be a array
    // This values were used because we want to have access to them, in the file were we are calling
}

export default useFetch;