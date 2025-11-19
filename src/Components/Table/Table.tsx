import { useNavigate } from "react-router-dom";
import { useState } from "react";
import type User from "../../Types/User";

interface tableProps {
    users: User[];
    search: string;
    searchFields: string[];
}

export default function Table({ users, search, searchFields }: tableProps) {
    const navigate = useNavigate();

    // Pagination State
    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 5;

    // Filter Users
    const filteredUsers = users.filter((user) =>
        searchFields.some((field: string) => user[field]?.toLowerCase().includes(search.toLowerCase())) // Error here with typescript
    );


    // Pagination Logic
    const totalPages = Math.ceil(filteredUsers.length / usersPerPage);
    const startIndex = (currentPage - 1) * usersPerPage;
    const currentUsers = filteredUsers.slice(startIndex, startIndex + usersPerPage);

    // Change Page
    const goToPage = (page: number) => {
        setCurrentPage(page);
    };

    const nextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const prevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    return (
        <div className="mt-10">
            <div className="overflow-x-auto w-full shadow-lg rounded-xl">
                <table className="min-w-full text-sm text-left border-collapse overflow-hidden">
                    <thead className="bg-gray-100 text-gray-700 uppercase text-sm font-semibold">
                        <tr>
                            <th className="px-6 py-3">Name</th>
                            <th className="px-6 py-3">Username</th>
                            <th className="px-6 py-3">Email</th>
                        </tr>
                    </thead>

                    <tbody className="bg-white divide-y divide-gray-200">
                        {currentUsers.map((user) => (
                            <tr
                                key={user.id}
                                className="hover:bg-gray-50 cursor-pointer transition-transform hover:scale-102 hover:shadow-xl duration-300"
                                onClick={() => navigate(`/user/${user.id}`)}
                            >
                                <td className="px-6 py-4 font-semibold">{user.name}</td>
                                <td className="px-6 py-4">{user.username}</td>
                                <td className="px-6 py-4">{user.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination Buttons */}
            <div className="flex items-center justify-center gap-3 mt-6">

                {/* Previous */}
                <button
                    onClick={prevPage}
                    disabled={currentPage === 1}
                    className="px-4 py-2 bg-gray-200 rounded-lg disabled:opacity-40"
                >
                    Prev
                </button>

                {/* Page Dots */}
                {Array.from({ length: totalPages }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToPage(index + 1)}
                        className={`w-3 h-3 rounded-full ${currentPage === index + 1
                            ? "bg-blue-500"
                            : "bg-gray-300"
                            }`}
                    />
                ))}

                {/* Next */}
                <button
                    onClick={nextPage}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 bg-gray-200 rounded-lg disabled:opacity-40"
                >
                    Next
                </button>
            </div>
        </div>
    );
}
