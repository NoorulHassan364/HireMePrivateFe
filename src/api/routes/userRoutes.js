import axios from "../axiosConfig";

class Routes {
  getUser(_id) {
    return axios.get(`/user/getUser/${_id}`);
  }

  updateUser(_id, data) {
    return axios.patch(`/user/updateUser/${_id}`, data);
  }

  buildProfile(_id, data) {
    return axios.patch(`/user/buildProfile/${_id}`, data);
  }

  buildProfileUpdate(_id, data) {
    return axios.patch(`/user/buildProfileUpdate/${_id}`, data);
  }

  getCareGiver(service, emergency = false) {
    return axios.get(`/user/getCareGiver/${emergency}/${service}`);
  }

  addFavorite(_id, data) {
    return axios.patch(`/user/addFavorite/${_id}`, data);
  }

  removeFavorite(_id, data) {
    return axios.patch(`/user/removeFavorite/${_id}`, data);
  }

  getFavorites(_id) {
    return axios.get(`/user/getFavorites/${_id}`);
  }

  getBestMatch(service) {
    return axios.get(`/user/getBestMatch/${service}`);
  }

  addView(_id, data) {
    return axios.patch(`/user/addView/${_id}`, data);
  }

  getView(_id) {
    return axios.get(`/user/getView/${_id}`);
  }

  postReview(_id, data) {
    return axios.patch(`/user/postReview/${_id}`, data);
  }
}

export default new Routes();
