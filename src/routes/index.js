import Vue from 'vue';
import VueRouter from 'vue-router';

import Index from '../containers/Index'
import About from '../containers/About'
import Profile from '../containers/Profile'
import Mail from '../containers/Mail'
import Friends from '../containers/Friends'
import QnA from '../containers/QnA'
import Video from '../containers/Video'
import Password from '../containers/Password'
import Room from '../containers/Room'
import Login from '../containers/Login'
import Register from '../containers/Register'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Index',
        component: Index
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/qna',
        name: 'QnA',
        component: QnA
    },
    {
        path: '/mail',
        name: 'Mail',
        component: Mail
    },
    {
        path: '/password',
        name: 'Password',
        component: Password
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile
    },
    {
        path: '/video',
        name: 'Video',
        component: Video
    },
    {
        path: '/friends',
        name: 'Friends',
        component: Friends
    },
    {
        path: '/room',
        name: 'Room',
        component: Room
    },
    {
      path: '*',
      redirect: '/'
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
  })
  
export default router;