import type User from '../../../Types/User';
import { useNavigate } from 'react-router-dom';

interface CardProps {
    user: User;
}

export default function Card({ user }: CardProps) {
    const navigate = useNavigate();

    return (
        <div className="max-w-3xl w-full bg-white shadow-xl rounded-3xl p-10 mx-auto my-6 transition-transform hover:scale-105 hover:shadow-2xl duration-300">

            {/* Back Button */}
            <button
                onClick={() => navigate('/')}
                className="mb-6 px-5 py-2 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors cursor-pointer"
            >
                ← Back to Users
            </button>

            <h2 className="text-3xl font-extrabold mb-6 text-gray-800">{user.name}</h2>
            <div className="text-gray-700 space-y-4 text-base sm:text-lg">
                <p><strong>Username:</strong> {user.username}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Phone:</strong> {user.phone}</p>
                <p><strong>Website:</strong> <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{user.website}</a></p>
                <p><strong>Address:</strong> {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
                <p><strong>Company:</strong> {user.company.name}</p>
                <p><strong>Catch Phrase:</strong> {user.company.catchPhrase}</p>
                <p><strong>Business:</strong> {user.company.bs}</p>
            </div>
        </div>
    );
}
