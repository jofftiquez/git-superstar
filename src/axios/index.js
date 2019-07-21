import axios from 'axios';

export const getStars = async (username, token) => {
  let final = [];
  
  const request = axios.create({
    baseURL: process.env.GITHUB_API
  });
  
  const { data } = await request.get(`/users/${username}?token=${token}`);
  
  if (!data.public_repos) {
    console.log(data.message);
    return
  }

  let pages = Math.ceil(data.public_repos / 100),
    i = pages,
    repos = []
  
  while (i--) {
    let { data } = await request.get(`/users/${username}/repos?per_page=100&page=${(i + 1)}`);
    repos = repos.concat(data);
    pages--;
  }

  return repos;
};