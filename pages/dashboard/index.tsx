import React from 'react'
import SideNav from '../../components/organisms/SideNav/SideNav'
import AppPageLayout from '../../components/templates/AppPageLayout/AppPageLayout';
import MainContent from '../../components/templates/MainContent/MainContent'
import styles from './index.module.css';
const Dashboard = () => {
  return (
    <AppPageLayout>
        <MainContent/>
    </AppPageLayout>
  )
}

export default Dashboard
