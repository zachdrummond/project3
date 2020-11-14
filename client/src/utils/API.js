import axios from "axios";

const API = {
  addAlgorithm: function (algorithm) {
    return axios.post("/api/algorithm", algorithm);
  },
  deleteAlgorithm: function (id) {
    return axios.delete(`/api/algorithm/${id}`);
  },
  editAlgorithm: function (id, algorithm) {
    return axios.put(`/api/algorithm/${id}`, algorithm);
  },
  getAllAlgorithms: function () {
    return axios.get("/api/algorithm");
  },
  getMyAlgorithms: function (jwt) {
    return axios.get(`/api/algorithm/user/${jwt}`);
  },
  getAlgorithm: function (id) {
    return axios.get(`/api/algorithm/${id}`);
  },
  postCode: function (input, mode) {
    return axios({
      method: "POST",
      url: "/api/code",
      data: { input, mode },
    });
  },
  login: function (userInfo) {
    return axios.post("/api/login", userInfo);
  },
  signup: function (userInfo) {
    return axios.post("/api/signup", userInfo);
  },
  deleteUser: function (jwt) {
    return axios.delete(`/api/user/${jwt}`);
  },
  editUser: function (jwt, user) {
    return axios.put(`/api/user/${jwt}`);
  },
  star: function(id, status, user) {
    return axios({
      url: `/api/star/${id}`,
      method: "POST",
      data: {
        status,
        user
      },
    })
  },
  getStar: function(id, user) {
    return axios({
      url: `/api/star/${id}/${user}`,
      method: "GET",
    })
  },
};

export default API;
