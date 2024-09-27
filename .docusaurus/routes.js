import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog/',
    component: ComponentCreator('/blog/', '29c'),
    exact: true
  },
  {
    path: '/blog/archive/',
    component: ComponentCreator('/blog/archive/', '1d9'),
    exact: true
  },
  {
    path: '/blog/authors/',
    component: ComponentCreator('/blog/authors/', '347'),
    exact: true
  },
  {
    path: '/blog/first-post/',
    component: ComponentCreator('/blog/first-post/', '281'),
    exact: true
  },
  {
    path: '/blog/tags/',
    component: ComponentCreator('/blog/tags/', 'e17'),
    exact: true
  },
  {
    path: '/blog/tags/tag/',
    component: ComponentCreator('/blog/tags/tag/', '3c1'),
    exact: true
  },
  {
    path: '/info/',
    component: ComponentCreator('/info/', '628'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '2bc'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', 'eb6'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '3bb'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', '3ef'),
            routes: [
              {
                path: '/creations/',
                component: ComponentCreator('/creations/', '767'),
                exact: true,
                sidebar: "creationsbar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
