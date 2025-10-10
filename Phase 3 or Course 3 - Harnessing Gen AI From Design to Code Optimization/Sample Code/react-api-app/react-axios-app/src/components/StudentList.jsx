import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from './Shared/Loader';
import { fetchStudents } from '../services/api';

const StudentList = () => {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchStudentsDetails = async () => {
            try {
                const response = await fetchStudents();
                console.log(response.data);
                setStudents(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchStudentsDetails();
    }, []);

    if (loading) {
        return <Loader />;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h2>Student List</h2>
            <ul>
                {students.map(student => (
                    <li key={student.id}>{student.studentName}</li>
                ))}
            </ul>
        </div>
    );
};

export default StudentList;