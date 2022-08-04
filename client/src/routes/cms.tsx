import React from 'react';
import { Routes, Route } from 'react-router-dom';

const CMS = React.lazy(() => import('../pages/CMS'));
const AllPosts = React.lazy(() => import('../pages/CMS/AllPosts'));
const NewPost = React.lazy(() => import('../pages/CMS/NewPost'));

function CMSRoutes() {
  return (
    <React.Suspense>
      <Routes>
        <Route path="/" element={<CMS />}>
          <Route index element={<AllPosts />} />
          <Route path="new-post" element={<NewPost />} />
        </Route>
      </Routes>
    </React.Suspense>
  );
}

const cmsRoutes = [
  {
    path: '/cms/*',
    element: <CMSRoutes />
  }
];

export default cmsRoutes;
