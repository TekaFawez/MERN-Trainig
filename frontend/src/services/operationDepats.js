import axios from "axios";

export const getAll = (callback)=>{ 
    axios.get('http://localhost:7000/api/departs')
    .then((res)=> callback(res)) }

    export const add = (dept, callback)=>{ 
        axios.post('http://localhost:7000/api/departs',dept) 
        .then((res) => callback(res)) 
        .catch((err)=> callback(err)); 
    }
    export const remove = (id, callback)=>{ 
        axios.delete(`http://localhost:7000/api/departs/${id}`)
        .then((res)=> callback(res)) 
        .catch((err)=> callback(err)); }