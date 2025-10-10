import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const fetchDepartments = async () => {
    try {
        const response = await axios.get(`${API_URL}/departments`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching departments: ' + error.message);
    }
};

export const fetchStudents = async () => {
    try {
        const response = await axios.get(`${API_URL}/students`);
        //console.log(response.data);
        return response;
    } catch (error) {
        throw new Error('Error fetching students: ' + error.message);
    }
};