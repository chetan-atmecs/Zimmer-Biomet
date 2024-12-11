import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Login from '../pages/Login';
import Signup from '../pages/Signup/SignUpPage';
import Dashboard from '../pages/Dashboard/VirtualAssistant';
import MainLayout from '../layouts/MainLayout/MainLayout';
import ChatInterfaceDoc from '../pages/ChatDoctor/ChatInterface';
import ChatInterfacePatient from '../pages/ChatPatient/ChatInterface';
import ChatInterfaceAssistant from '../pages/ChatAssistant/ChatInterface';
import EHRMainContent from '../pages/EHR_VIEW2/MainContent';
import MainPage from '../pages/EHR_EDIT/MainPage';
import LoginForm from '../pages/Login/LoginForm';
import Layout from '../pages/CRUD_1/Layout';
import App from '../pages/CRUD_2/App';
import MedicalReportGenerator from '../pages/MedicalReportGenerator/MedicalReportGenerator';
import MainPagePatient from '../pages/EHR_PATIENT/MainPage';
import ChatInterfaceSummary from '../pages/Summary/ChatInterface';
import AppointmentPage from '../pages/AppointmentScheduling/AppointmentPage';
import KnowledgeGraph from '../pages/KnowledgeGraphDashboard/KnowledgeGraph';
import Test from '../layouts/MainLayout/Test';
function AppRoutes() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Signup />} />

          <Route path="/chat-doc" element={<ChatInterfaceDoc />} />
          <Route path="/chat-patient" element={<ChatInterfacePatient />} />
          <Route path="/chat-assistant" element={<ChatInterfaceAssistant />} />

          <Route path="/appointment" element={<AppointmentPage />} />
          
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/overview" element={<Dashboard />} />
          <Route path="/ehr-view" element={<EHRMainContent />} />
          <Route path="/ehr-edit" element={<MainPage />} />
          <Route path="/ehr-patient" element={<MainPagePatient />} />
          <Route path="/crud-1" element={<Layout />} />
          <Route path="/crud-2" element={<App />} />
          <Route path='/report' element={<MedicalReportGenerator/>}/>

          <Route path='/knowledge' element={<KnowledgeGraph/>}/>
          <Route path='/summary' element={<ChatInterfaceSummary/>}/>
          <Route path='/test' element={<Test/>}/>

          
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default AppRoutes;
