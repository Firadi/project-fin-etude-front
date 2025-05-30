import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_BASE_URL}/api/agences`;;

//Post
export const registerAgency = async (formData) => {
  const l3aba = {
    nom: formData.nom.trim(),
    tel: formData.tel.trim(),
    directeurFirstName: formData.directeurFirstName.trim(),
    directeurLastName: formData.directeurLastName.trim(),
    directeurEmail: formData.directeurEmail.trim(),
    directeurPassword: formData.directeurPassword
  };

  const response = await axios.post(API_URL, l3aba);
  return response.data;
};

//Get
export const getAllAgencies = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

//Get by id
export const getAgencyById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

//Put
export const updateAgency = async (id, formData) => {
  const l3aba = {
    nom: formData.nom.trim(),
    tel: formData.tel.trim(),
    email: formData.email.trim(),
    directeurName: formData.directeurName.trim(),
    directeurEmail: formData.directeurEmail.trim(),
    directeurPassword: formData.directeurPassword
  };

  const response = await axios.put(`${API_URL}/${id}`, l3aba);
  return response.data;
};

//Delete
export const deleteAgency = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};

export default {
  registerAgency,
  getAllAgencies,
  getAgencyById,
  updateAgency,
  deleteAgency,
};