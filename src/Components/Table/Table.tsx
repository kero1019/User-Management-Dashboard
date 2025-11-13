import type User from '../../Types/User'
import { useNavigate } from 'react-router-dom';

interface tabelProps {
    users: User[];
    search: string;
}
export default function Table(props: tabelProps) {
    const { users, search } = props;
    const navigate = useNavigate();
    const filteredUsers = users.filter(
        (user) =>
            user.name.toLowerCase().includes(search.toLowerCase()) ||
            user.username.toLowerCase().includes(search.toLowerCase())
    );
    return (
        <div className="flex  mt-10 ">
            <div className="overflow-x-auto w-full shadow-lg rounded-xl ">
                <table className="min-w-full text-sm text-left border-collapse overflow-hidden">
                    <thead className="bg-gray-100 text-gray-700 uppercase text-sm font-semibold">
                        <tr>
                            <th className="px-6 py-3">Name</th>
                            <th className="px-6 py-3">Username</th>
                            <th className="px-6 py-3">Email</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 ">
                        {filteredUsers.map((user) => (
                            <tr key={user.id} className="hover:bg-gray-50 cursor-pointer transition-transform hover:scale-102 hover:shadow-xl duration-300 hover:overflow-hidden " onClick={() => navigate(`/user/${user.id}`)}>
                                <td className="px-6 py-4 font-semibold">{user.name}</td>
                                <td className="px-6 py-4">{user.username}</td>
                                <td className="px-6 py-4">{user.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
