import { useEffect, useState } from 'react';

function useFetch(url, options = {}) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!url) {
            setLoading(false);
            setError("No URL provided");
            return;
        }

        const fetchData = async () =>  {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(url, options);

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`)
                }

                const result = await response.json();
                setData(result);
            } catch (error) {
                setError(error.message || "something went wrong while fetching API");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [])

    return { data, loading, error };
}

export default useFetch;