import axios from 'axios';

export const getStars = async (username) => {
  let final = [];
  
  const request = axios.create({
    baseURL: 'https://api.github.com'
  });
  const { data } = await request.get(`/users/${username}`);
  
  if (!data.public_repos) {
    console.log(data.message)
    return
  }

  var pages = Math.ceil(data.public_repos / 100),
    i = pages,
    repos = []
  
  while (i--) {
    let { data } = await request.get(`/users/${username}/repos?per_page=100&page=${(i + 1)}`);
    repos = repos.concat(data);
    pages--;
  }

  return repos;
};