import axios from "axios";
import React from "react";

const App = () => {
  const [user, setUser] = React.useState({});

  React.useEffect(() => {
    const getUser = async () => {
      const res = await axios.get("/users/6290ca566aa3c0d35a2b382e");
      setUser(res.data);
      console.log(user);
    };
    getUser();
  }, []);
  return <h1>welcome1 {JSON.stringify(user)}</h1>;
};

export default App;
