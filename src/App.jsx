import { useEffect, useState } from "react";
import axios from "axios";
export default function App() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://api.github.com/users/WesleyQDev")
      .then((response) => {
        setUser(response.data)
        setLoading(false)
      })
      .catch((error) => console.log(error))
      .finally(console.log("Request completed"))
  },[])

  console.log(user, "user");
  return (
    <div>
      {
        loading ?  (<h1>Carregando informações...</h1>) :(
          <>
            <input name="myInput" />
            <p>{user.login}</p>
            <img src={user.avatar_url} />
          </>
      )
      }
    </div>
  );
}