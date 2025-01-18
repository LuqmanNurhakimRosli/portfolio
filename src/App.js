import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react";
import AppRoutes from './AppRoutes'; 
import Layout from './components/layout/Layout';
import LoadingSpinner from './components/common/LoadingSpinner';
import ErrorBoundary from './components/common/ErrorBoundary';
import './App.css';

export default function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Layout>
          <Suspense fallback={<LoadingSpinner />}>
            <AppRoutes />
            <Analytics />
          </Suspense>
        </Layout>
      </BrowserRouter>
    </ErrorBoundary>
  );
}