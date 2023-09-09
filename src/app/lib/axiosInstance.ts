
import axios, { AxiosInstance } from "axios";

const config = {
	backend: {
		baseURL: "http://localhost:8080",
	},
};

const server = config.backend.baseURL;

const axiosInstance: AxiosInstance = axios.create({
	baseURL: server,
	responseType: 'json',
	headers: {
		"Content-Type": "application/json",
	},
});

export default axiosInstance;