import axios from "axios";

const login = (username, password) => {
  const credential = { username, password };

  return new Promise((resolve, reject) => {
    axios
      .post("/auth/login", credential)
      .then((response) => {
        const token = response.data;
        setSession(token);

        const user = getUser();
        resolve(user);
      })
      .catch((error) => {
        reject(error.response.data);
      });
  });
};

const logout = () => {
  setSession(null);
};

const setSession = (accessToken) => {
  if (accessToken) {
    localStorage.setItem("access_token", accessToken);
    axios.defaults.headers.common["Authorization"] = "bearer " + accessToken;
  } else {
    localStorage.removeItem("access_token");
    delete axios.defaults.headers.common["Authorization"];
  }
};

const getUser = () => {
  // const accessToken = this.getAccessToken();
  try {
    const payload = "admin";
    return payload;
  } catch (error) {
    this.emit("onAutoLogout", "Access token missing.");
    return {};
  }
};

const authService = {
  login,
  logout,
};

export default authService;
