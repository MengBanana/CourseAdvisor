import axios from "axios";


export const register = newUser => {
  return axios
    .post("users/register", {
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      username: newUser.username,
      password: newUser.password,
      email: newUser.email,
      bio: newUser.bio,
      image: newUser.image
    })

    .then(response => {
      console.log( "Registered ");
    });
};

export const login = user => {
  return axios 
    .post("users/login", {
      username: user.username,
      password: user.password
    })

    .then(response => {
      localStorage.setItem("usertoken", response.data);
      return response.data;
    })

    .catch(err => {
      console.log(err);
    });
};


