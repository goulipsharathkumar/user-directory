import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import UserDetail from './pages/UserDetail';
import NotFound  from './pages/NotFound';

export default function App() {
  return (
    <Routes>
      <Route path="/"         element={<Dashboard />} />
      <Route path="/user/:id" element={<UserDetail />} />
      <Route path="*"         element={<NotFound />} />
    </Routes>
  );
}