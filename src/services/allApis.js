import axios from "axios";

const base_url="https://contact-server-ymg5.onrender.com"

export const addContact = async (data) => {
    return await axios.post(`${base_url}/contacts`, data)
}
export const getContact = async () => {
    return await axios.get(`${base_url}/contacts`)
}
export const deleteContact = async (id) => {
    return await axios.delete(`${base_url}/contacts/${id}`)
}
export const checkApi = async (email) => {
    return await axios.get(`${base_url}/users?email=${email}`)
}
export const registerApi = async (data) => {
    return await axios.post(`${base_url}/users`, data)
}
export const loginApi = async (email,password) => {
    return await axios.get(`${base_url}/users?email=${email}&password=${password}`)
}
export const updateContact = async (id, updatedContact) => {
    return await axios.put(`${base_url}/contacts/${id}`, updatedContact);
}