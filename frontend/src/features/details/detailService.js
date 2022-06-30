import axios from 'axios'

const API_URL = "/form/save-details/";

const createDetail = async (detailData, token) => {
    const config = {
        headers: {
            Authorization:`Bearer ${token}`,
        },
  }
  
  const response = await axios.post(API_URL, detailData, config)
  console.log(response.data)

    return response.data
}

// Get user details
const getDetails = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL, config)

  return response.data
}

// Delete user goal
const deleteDetail = async (detailId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + detailId, config)
  
  return response.data
}

const detailService = {
	createDetail,
	getDetails,
	deleteDetail,
};
export default detailService

