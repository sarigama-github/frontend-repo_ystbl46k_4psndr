import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Test from './Test'
import { Login, Signup } from './components/Auth'
import Dashboard from './components/Dashboard'
import CardEditor from './components/CardEditor'
import PublicCard from './components/PublicCard'
import Pricing from './components/Pricing'
import Features from './components/Features'
import Layout from './components/Layout'
import './index.css'

function withLayout(el){
  return <Layout>{el}</Layout>
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={withLayout(<App />)} />
        <Route path="/features" element={withLayout(<Features />)} />
        <Route path="/pricing" element={withLayout(<Pricing />)} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/cards/new" element={<CardEditor />} />
        <Route path="/cards/:slug" element={<PublicCard />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
