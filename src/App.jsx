import { useState } from "react";
import { getUser, logout } from "./utils/localStorageHelper";
import Auth from "./pages/Auth";
import Home from "./pages/Home";

export default function App() {
  const [user, setUser] = useState(getUser());

  if (!user) {
    return <Auth onAuth={setUser} />;
  }

  return (
    <div>
      <button onClick={logout} className="bg-red-500 text-white p-2">
        Logout
      </button>
      <Home user={user} />
    </div>
  );
}
