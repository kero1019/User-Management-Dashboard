import { useEffect, useState } from 'react';
import axios from 'axios';
import './index.css';
import Table from './Components/Table/Table';
import type User from './Types/User';

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users`);
        setUsers(response.data)
      } catch (error: any) {
        console.error("ERROR message is ==>", error.message);
        setError("Failed to load users. Please try again later.")
      } finally {
        setLoading(false);
      }
    }
    getUsers();
  }, []);


  if (error) {
    return (
      <div style={{ backgroundColor: "var(--secondBackgroundColor)" }} className="h-screen flex justify-center items-center p-4">
        <h1 className="text-3xl font-bold text-center">{error}</h1>
      </div>
    )
  }

  if (loading) {
    return (
      <div style={{ backgroundColor: "var(--secondBackgroundColor)" }} className="h-screen flex justify-center items-center p-4">
        <span className="loader"></span>
      </div>
    )
  }

  if (users.length === 0) {
    return (
      <div style={{ backgroundColor: "var(--secondBackgroundColor)" }} className="h-screen flex justify-center items-center p-4">
        <h1 className="text-3xl font-bold text-center">No Users Found</h1>
      </div>
    )
  }

  return (
    <div style={{ backgroundColor: "var(--secondBackgroundColor)" }} className="min-h-screen p-4 md:p-10 lg:p-20">
      <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-10 text-center md:text-left'>Users</h1>

      <div className="flex flex-col sm:flex-row sm:items-center mb-6 gap-4 bg-gray-200 px-4 py-2 rounded-2xl ">
        <input
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
          className='flex-1 px-4 py-2 focus:outline-none'
          type="text"
          placeholder="Search by name, username... 🔍"
        />

      </div>

      {/* Table Data */}
      <Table  users={users} search={search} />
    </div>
  )
}

export default App;
