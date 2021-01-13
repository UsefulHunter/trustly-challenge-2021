import axios from "axios";

const api = axios.create({
  baseURL:
    "https://cors-anywhere.herokuapp.com/https://voliveira.s3-sa-east-1.amazonaws.com/sneakers/index.json",
});

export { api };
