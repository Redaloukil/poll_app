import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';
import { request } from 'http';

const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT = 'localhost:3000/';

const encode = encodeURIComponent;
const responseBody = res => res.body;

//set default token to null 
let token = null;

//Call back to set the authorization token 
const tokenPlugin = req => {
  if (token) {
    req.set('authorization', `Token ${token}`);
  }
}

const requests = {
  get: url =>
    superagent.get(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
  del: url =>
    superagent.del(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
  put: (url, body) =>
    superagent.put(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody),
  post: (url, body) =>
    superagent.post(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody)
};


const Auth = {
  //request to get current user 
  current: () =>
    requests.get('users/current/'),
  //login request
  login: (email, password) =>
    requests.post('/users/login/', { user: { email, password } }),
  //signup request
  signup: (username, email, password) =>
    requests.post('/users/signup/', { user: { username, email, password } }),
  //update request
  save: user =>
    requests.put('/users/update/', { user })
};


const limit = (count, p) => `limit=${count}&offset=${p ? p * count : 0}`;
const omitSlug = article => Object.assign({}, article, { slug: undefined })

const Articles = {
  all: page =>
    requests.get(`/articles?${limit(10, page)}`),
  byAuthor: (author, page) =>
    requests.get(`/articles?author=${encode(author)}&${limit(5, page)}`),
  del: slug =>
    requests.del(`/articles/${slug}`),
  favorite: slug =>
    requests.post(`/articles/${slug}/favorite`),
  favoritedBy: (author, page) =>
    requests.get(`/articles?favorited=${encode(author)}&${limit(5, page)}`),
  feed: () =>
    requests.get('/articles/feed?limit=10&offset=0'),
  get: slug =>
    requests.get(`/articles/${slug}`),
  unfavorite: slug =>
    requests.del(`/articles/${slug}/favorite`),
  update: article =>
    requests.put(`/articles/${article.slug}`, { article: omitSlug(article) }),
  create: article =>
    requests.post('/articles', { article })
};
// all : page => {
  //     requests.get(`/polls?${limit(6 , page)}`)
  // },
// create : () => {
  //   requests.post('/polls/');
  // },
  // delete : (slug) => {
  //   requests.del(`/polls?${slug}`);
  // },
const Polls = {
  all : () => 
    requests.get('/polls/'),
  get : () => 
    requests.get('/polls/'),
  create : (poll) => 
    requests.post('/polls/' , {poll}) ,
    
  
}

const choices = {
  forPoll : (slug) => {
    requests.get(`/polls/${slug}/`);
  },
  create : (slug ,choice) => {
    requests.post(`/polls/${slug}/comments`, {choice});
  },
  del : (slug , id) => {
    requests.del(`/polls/${slug}/comments/${id}`);
  }
}

const Comments = {
  create: (slug, comment) =>
    requests.post(`/articles/${slug}/comments`, { comment }),
  delete: (slug, commentId) =>
    requests.del(`/articles/${slug}/comments/${commentId}`),
  forArticle: slug =>
    requests.get(`/articles/${slug}/comments`)
};

const Profile = {
  get: username =>
    requests.get(`/profiles/${username}`),
  follow: username =>
    requests.post(`/profiles/${username}/follow`),
  unfollow: username =>
    requests.del(`/profiles/${username}/follow`)
};

export default {
  Polls ,
  Articles,
  Auth,
  Comments,
  Profile,
  setToken: _token => { token = _token; }
};
