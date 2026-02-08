import { ApolloProvider } from '@apollo/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import client from './lib/apollo-client'
import Header from './components/Header'
import TaskList from './components/TaskList'
import './styles/index.css'

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <main className="py-4">
            <Routes>
              <Route path="/" element={<TaskList />} />
              <Route path="/pending" element={<TaskList />} />
              <Route path="/completed" element={<TaskList />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <footer className="bg-dark text-white py-4 mt-5">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <h5 className="mb-3">Task Manager</h5>
                  <p className="text-muted">
                    A modern full-stack application built with Laravel 10, GraphQL, and React 19.2
                  </p>
                </div>
                <div className="col-md-6 text-md-end">
                  <div className="mb-2">
                    <span className="badge bg-info me-2">React 19.2</span>
                    <span className="badge bg-success me-2">Vite</span>
                    <span className="badge bg-warning">GraphQL</span>
                  </div>
                  <p className="text-muted mb-0">
                    <small>© {new Date().getFullYear()} Task Manager</small>
                  </p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App