import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';
import { request } from 'http';

const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT = 'http://localhost:3000/';

const responseBody = res => res.body;

//set default token to null 
let token = null;

//Call back to set the authorization token 
const tokenPlugin = req => {
  if (token) {
    // req.set('authorization', `Token ${token}`);
    req.set('authorization', `${token}`);
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

const Home = {
  // availble api 
  ping:()=> {
    requests.get('');
  }
}

const Auth = {
  //request to get current user 
  current: () =>
    requests.get('user/'),
  //login request
  login: (username, password) =>
    requests.post('users/login/', {  username, password } ),
  //signup request
  signup: (username, password) =>
    requests.post('users/signup/', { username, password } ),
  //update request
  save: user =>
    requests.put('users/update/', { user })
};


const limit = (count, p) => `limit=${count}&offset=${p ? p * count : 0}`;
const omitSlug = article => Object.assign({}, article, { slug: undefined })

// const Articles = {
//   all: page =>
//     requests.get(`articles?${limit(10, page)}`),
//   del: slug =>
//     requests.del(`articles/${slug}`),
//   get: slug =>
//     requests.get(`/articles/${slug}`),
//   update: article =>
//     requests.put(`/articles/${article.slug}`, { article: omitSlug(article) }),
//   create: article =>
//     requests.post('/articles', { article })
// };

const Polls = {
  all : () => 
    requests.get('polls/'),
  get : id => 
    requests.get(`polls/${id}`),
  create : ({poll}) => 
    requests.post('polls/' , {poll}) ,
}

const Posts = {
  all: () =>
    requests.get(`posts/`),
  get: id =>
    requests.get(`posts/${id}`),
  del: slug =>
    requests.del(`posts/${slug}`),
  create : ({post}) => 
    requests.post(`posts/`,{post})
}

const Choices = {
  forPoll : (slug) => {
    requests.get(`polls/${slug}/`);
  },
  create : (slug ,choice) => {
    requests.post(`polls/${slug}/comments`, {choice});
  },
  del : (slug , id) => {
    requests.del(`polls/${slug}/comments/${id}`);
  }
}

const Comments = {
  create: (slug, comment) =>
    requests.post(`articles/${slug}/comments`, { comment }),
  delete: (slug, commentId) =>
    requests.del(`articles/${slug}/comments/${commentId}`),
  forArticle: slug =>
    requests.get(`articles/${slug}/comments`)
};



export default {
  Home,
  Auth,
  Polls ,
  Posts,
  Choices,
  // Comments,
  setToken: _token => { token = _token; }
};
