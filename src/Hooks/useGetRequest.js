import axios from 'axios';
import { useEffect, useState } from 'react'

export default function useGetRequest(url, params = {}) {

    const [data, setData] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get(url, {
                params: params
            })
            setData(data);
        }
        fetchData();
    }, [url])

    return data;
}
