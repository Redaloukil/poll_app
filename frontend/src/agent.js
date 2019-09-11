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
  current: () =>
    requests.get('user/'),
  login: (username, password) =>
    requests.post('users/login/', {  username, password } ),
  signup: (username, password) =>
    requests.post('users/signup/', { username, password } ),
  save: user =>
    requests.put('users/update/', { user }),
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
  create : ( {title , description} ) => 
    requests.post('polls/' , {title , description }) ,
  update : ( id , {title , description} ) => 
    requests.put(`polls/${id}` , {title , description})
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
  forPoll : (id) => {
    requests.get(`polls/${id}/choices/`);
  },
  create : (id,{choice}) => {
    requests.post(`polls/${id}/comments`, {choice});
  },
  del : (id, choiceId) => {
    requests.del(`polls/${id}/comments/${choiceId}`);
  }
}

// const Comments = {
//   create: (slug, comment) =>
//     requests.post(`articles/${slug}/comments`, { comment }),
//   delete: (slug, commentId) =>
//     requests.del(`articles/${slug}/comments/${commentId}`),
//   forArticle: slug =>
//     requests.get(`articles/${slug}/comments`)
// };



export default {
  Home,
  Auth,
  Polls ,
  Posts,
  Choices,
  // Comments,
  setToken: _token => { token = _token; }
};
