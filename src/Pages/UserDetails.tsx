import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import type User from '../Types/User';
import Card from '../Components/Table/Card/Card';

export default function UserDetails() {
    const { id } = useParams<{ id: string }>();
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
                setUser(response.data);
            } catch (err: any) {
                setError("Failed to fetch user data");
            } finally {
                setLoading(false);
            }
        };
        fetchUser();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    if (!user) return <div>No user found</div>;

    return (
<div className="  md:p-8 lg:p-10 w-full max-w-4xl mx-auto">
    <Card user={user} />
</div>

    );
}
