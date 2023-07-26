/* eslint-disable no-useless-catch */
import Axios from "./Axios";
import react_base_url from "./Config"
// import config from 'config';
// const baseURL = 'https://jsonplaceholder.typicode.com'
const backendURL = react_base_url;

// eslint-disable-next-line no-unused-vars
export const get = (path, _data = null) => {
    return Axios.get(`${backendURL}/${path}`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            // console.log("login Error block", error)
            throw error;
        });
};

/*
  Description 
  @params
  path: Api end point 
  data: pass data in object form like 
    {
      name: 'Fred',
      email: 'Flintstone@gmail.com'
    }
*/
export const post = (path, data = null) => {
    return Axios.post(`${backendURL}/${path}`, data)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            throw error;
        });
};

export const putRequest = (path, data = null) => {
    try {
        return Axios.put(`${backendURL}/${path}`, data)
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                throw error;
            });
    } catch (error) {
        throw error;
    }
};

export const deleteRequest = (path, ids = null) => {
    return Axios.delete(`${backendURL}/${path}/${ids}`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            throw error;
        });
};

export const patch = (path, data = null) => {
    return Axios.patch(`${backendURL}/${path}`, data)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            throw error;
        });
};
