import React, { useState, Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddProjects from './components/Addprojects';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import HomePage from './components/Pages/HomePage';
import Teams from './components/Teams';
import Progress from './components/Progress';
import TaskManager from './components/TaskManager';
import AuthPage from './components/AuthPage';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught in ErrorBoundary: ", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1 className="text-red-500 text-center mt-10">Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <ErrorBoundary>
        <div className="flex">
          <Navbar toggleSidebar={toggleSidebar} />
          <Sidebar isOpen={isSidebarOpen} />
          
          {/* Main content area */}
          <div className={`flex-1 mt-16 p-4 transition-all duration-300 ${isSidebarOpen ? "ml-64" : "ml-16"}`}>
            <AddProjects /> {/* Add Projects button */}
            <h1 className="text-2xl font-bold mb-4">Welcome to My App</h1>
            
            <Routes>
              <Route path="/auth" element={<AuthPage />} />
              <Route path="/homepage" element={<HomePage />} />
              <Route path="/teams" element={<Teams />} />
              <Route path="/progress" element={<Progress />} />
              <Route path="/taskmanager" element={<TaskManager />} />
            </Routes>
          </div>
        </div>
      </ErrorBoundary>
    </Router>
  );
};

export default App;
