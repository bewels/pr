import { useState } from "react"
import axios from "axios";

export default function useHttp() {

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState('');

    const response = async (url, method = 'GET', data, headers = {}) => {

        const newData = JSON.stringify(data);

        const newHeaders = {
            ...headers,
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
        } 

        if(data) {
            newHeaders["Content-type"] = "application/json; charset=UTF-8";
        }
        
        setLoading(true);

        return await axios({
            method,
            url,
            data: newData,
            headers: newHeaders,
        })
        .then(res => {
            if(res.data.token) {
                localStorage.setItem('token', res.data.token);
            }

            setLoading(false);

            return res.data;
        })
        .catch(e => {
            setLoading(false);
            setError(e.response.data.massage);
        });
    }

    return {response, loading, error};
}