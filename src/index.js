import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'

import { Layout } from './components/layout'
import { LayoutMainPage } from './components/layout-main-page'
import { Terms } from './components/terms'
import { MainPage } from './pages/main'

import './index.css'
import { BookPage } from './pages/book'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route element={<LayoutMainPage />}>
            <Route path="/" element={<Navigate to="/books/all" />} />
            <Route path="/books" element={<Navigate to="/books/all" />} />
            <Route path="/books/:category" element={<MainPage />} />
            <Route path="/terms" element={<Terms contentView="terms" />} />
            <Route
              path="/contract"
              element={<Terms contentView="contract" />}
            />
          </Route>
          <Route path="/books/:category/:bookId" element={<BookPage />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
)
