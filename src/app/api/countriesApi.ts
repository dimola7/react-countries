import axios from "axios";

export default axios.create({
    baseURL: "https://country-lookup-server.herokuapp.com/api/v1"
})