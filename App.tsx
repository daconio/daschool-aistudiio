import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import HackathonPage from './pages/HackathonPage';
import BasecampPage from './pages/BasecampPage';
import CommunityPage from './pages/CommunityPage';
import ProfilePage from './pages/ProfilePage';
import RankingPage from './pages/RankingPage';
import EducationPage from './pages/EducationPage';
import MyLearningPage from './pages/MyLearningPage';
import CourseViewerPage from './pages/CourseViewerPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import ProjectStageViewerPage from './pages/ProjectStageViewerPage';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HackathonPage />} />
          <Route path="/basecamp" element={<BasecampPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/ranking" element={<RankingPage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/my-learning" element={<MyLearningPage />} />
          <Route path="/course/antigravity" element={<CourseViewerPage />} />
          <Route path="/project/first-step" element={<ProjectDetailPage />} />
          <Route path="/project/first-step/stage/1" element={<ProjectStageViewerPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;