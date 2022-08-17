import axios from "../axiosConfig";

class Routes {
  login(data) {
    return axios.post("/auth/login", data);
  }
  signup(data) {
    return axios.post("/auth/signup", data);
  }
  resetPassword(id, data) {
    return axios.patch(`/auth/resetPassword/${id}`, data);
  }
  forgetPassword(data) {
    return axios.post(`/auth/forgetPassword`, data);
  }
  changePassword(_id, data) {
    return axios.patch(`/auth/changePassword/${_id}`, data);
  }
}

export default new Routes();
