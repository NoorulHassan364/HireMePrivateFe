import axios from "../axiosConfig";

class Routes {
  postJob(id, data) {
    return axios.post(`/job/jobPost/${id}`, data);
  }

  getJobs(id) {
    return axios.get(`/job/getJobs/${id}`);
  }

  getJob(id) {
    return axios.get(`/job/getJob/${id}`);
  }

  editJob(id, data) {
    return axios.patch(`/job/editJob/${id}`, data);
  }

  getServiceJobs(service) {
    return axios.get(`/job/getServiceJobs/${service}`);
  }

  applyJob(user_id, jobId) {
    return axios.patch(`/job/applyJob/${user_id}/${jobId}`);
  }

  deleteJob(_id) {
    return axios.delete(`/job/deleteJob/${_id}`);
  }

  addFavorite(user_id, job_id) {
    return axios.patch(`/job/addJobFavorite/${user_id}/${job_id}`);
  }

  removeFavorite(user_id, job_id) {
    return axios.patch(`/job/removeJobFavorite/${user_id}/${job_id}`);
  }

  getFavorites(_id) {
    return axios.get(`/job/getJobFavorites/${_id}`);
  }

  addToHire(user_id, job_id) {
    return axios.patch(`/job/addToHire/${user_id}/${job_id}`);
  }

  removeFromHire(user_id, job_id) {
    return axios.patch(`/job/removeFromHire/${user_id}/${job_id}`);
  }

  getHiredPeople(job_id) {
    return axios.get(`/job/getHiredPeople/${job_id}`);
  }

  activeToogle(job_id, isActive) {
    return axios.patch(`/job/jobActiveToggle/${job_id}/${isActive}`);
  }
}

export default new Routes();
