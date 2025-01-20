import React, { ReactNode, lazy } from 'react'

const Home = lazy(() => import('@/pages/Dashboard/Dashboard'))
const FeatureFlagsPage = lazy(() => import('flags/flags'))
const PagesCreator = lazy(() => import('@/pages/PageCreator/PagesCreator'))
// const ErrorPage = lazy(() => import('@/pages/ErrorPage/ErrorPage'))
const translationPage = lazy(() => import('translations/translations'))

interface HeadProps {
  title?: string
  description?: string
  imageUrl?: string
  imageAlt?: string
  siteName?: string
  url?: string
  children?: string | ReactNode
}

interface MetaProps extends Omit<HeadProps, 'title' | 'children'> {}
export interface RouteProps {
  component: React.ComponentType
  title?: string
  name?: string
  index?: boolean
  path: string
  meta?: MetaProps
  key?: string
}

export const routes: RouteProps[] = [
  {
    title: 'Home',
    name: 'Home',
    index: true,
    component: Home,
    path: '/',
    key: 'home',
  },
  {
    title: 'Feature Flags',
    name: 'featureFlags',
    path: 'flags',
    component: FeatureFlagsPage,
    key: 'flags',
  },
  {
    title: 'Pages Creator',
    name: 'pagesCreator',
    path: 'pages-creator',
    component: PagesCreator,
    key: 'pages-creator',
  },
  {
    title: 'Translations',
    name: 'Translations',
    path: 'translations',
    component: translationPage,
    key: 'translations-page',
  },
]
