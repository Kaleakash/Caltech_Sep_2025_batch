import React, { useEffect, useState } from 'react';
import { fetchDepartments } from '../services/api';
import Loader from './Shared/Loader';

const DepartmentList = () => {
    const [departments, setDepartments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getDepartments = async () => {
            try {
                const data = await fetchDepartments();
                setDepartments(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getDepartments();
    }, []);

    if (loading) {
        return <Loader />;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h2>Department List</h2>
            <ul>
                {departments.map(department => (
                    <li key={department.id}>{department.departmentName}</li>
                ))}
            </ul>
        </div>
    );
};

export default DepartmentList;