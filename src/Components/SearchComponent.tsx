import React from 'react'
interface SearchProps {
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
}
export default function SearchComponent({search, setSearch}: SearchProps) {
    return (

        <div className="flex flex-col sm:flex-row sm:items-center mb-6 gap-4 bg-gray-200 px-4 py-2 rounded-2xl ">
            <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className='flex-1 px-4 py-2 focus:outline-none'
                type="text"
                placeholder="Search by name, username... 🔍"
            />
        </div>
    )
}
