import Header from 'Components/Header/Header'
import { lazy } from 'react'
const Login = lazy(() => import('Pages/Login/Login'))
const Post = lazy(() => import('Pages/Post/Post'))
const Signup = lazy(() => import('Pages/Signup/Signup'))
const Posts = lazy(() => import('Pages/Post/Posts'))
const Home = lazy(() => import('./Home'))

export { Header, Login, Post, Signup, Posts, Home }
