
/**
 * Params:
 * - * Request Type: put, post, get, delete
 * - * URL: endpoint
 * - ? payload: data to send in case of need (POST, PUT için geçerli)
 * - ? config: axios request configutaion
 * - ? initialData: response datanın başlangıç değeri
 */

import axios from "axios";
import { useState } from "react"

export const REQ_TYPES = {
    POST: "post",
    GET: "get",
    PUT: "put",
    DELETE: "delete",
}

export const useAxios = ({
    requestType,
    endpointUrl,
    payload,
    initialData,
}) => {

    const [data, setData] = useState(initialData);

    //Request section

    const doRequest = () => {
        return axios[requestType](endpointUrl,payload ? payload :initialData , initialData)
            .then((resp) => {
                setData(resp.data);
            }).catch((err) => {
                console.log(`${endpointUrl} url'sine ${requestType} istegi yapilirken hata olustu.`);
            });
    };
    
    // return section

    return [data , doRequest];
}

