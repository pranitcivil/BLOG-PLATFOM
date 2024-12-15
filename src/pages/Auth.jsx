import { useState } from "react";
import { setUser } from "../utils/localStorageHelper";

export default function Auth({ onAuth }) {
  const [username, setUsername] = useState("");

  const handleLogin = () => {
    const user = { username };
    setUser(user);
    onAuth(user);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Login</h1>
      <input
        type="text"
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border p-2 w-full mb-4"
      />
      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white px-4 py-2"
      >
        Login
      </button>
    </div>
  );
}
