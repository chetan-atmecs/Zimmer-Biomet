import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const routes = [
  '/signup',
  '/login',
  '/overview',
  '/ehr-patient',
  // '/ehr-edit',
  '/summary',
  '/appointment',
  '/chat-doc',
  '/chat-patient',
  '/chat-assistant',
  '/crud-1',
  '/crud-2',
  '/report',
  '/ehr-view',
];

const NavigationArrows = ({title}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  const currentIndex = routes.indexOf(currentPath);

  const handleBackClick = () => {
    if (currentIndex > 0) {
      navigate(routes[currentIndex - 1]);
    }
  };

  const handleForwardClick = () => {
    if (currentIndex < routes.length - 1) {
      navigate(routes[currentIndex + 1]);
    }
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent:
            currentIndex === routes.length - 1 // Last Page
              ? 'space-between'
              : currentIndex === 0 // First Page
              ? 'flex-end'
              : 'space-between', // Other Pages
          marginBottom: '20px',
          marginTop: '10px',
          marginRight: '10px',
        }}
      >
        {/* Left item for the last route and all other routes except the first */}
        {currentIndex > 0 && (
          <div
            style={{
              backgroundColor: 'white',
              borderRadius: '50%',
              padding: '8px',
              cursor: 'pointer',
              marginTop: '10px',
              marginLeft: '10px',
              marginRight: '10px',
            }}
            onClick={handleBackClick}
          >
            <ArrowBackIcon style={{ color: 'black', width: '24px', height: '24px' }} />
          </div>
        )}
  
        {/* Center title */}
        <h2
          className="text-xl text-center text-white max-md:max-w-full p-3"
          style={{
            fontWeight: 'bold',
            fontSize: '29px',
            flexGrow: 1,
            textAlign: 'center',
          }}
        >
          {title}
        </h2>
  
        {/* Right item for all routes except the last */}
        {currentIndex < routes.length - 1 && (
          <div
            style={{
              backgroundColor: 'white',
              borderRadius: '50%',
              padding: '8px',
              cursor: 'pointer',
              marginTop: '10px',
              marginLeft: '10px',
              marginRight: '10px',
            }}
            onClick={handleForwardClick}
          >
            <ArrowForwardIcon style={{ color: 'black', width: '24px', height: '24px' }} />
          </div>
        )}
      </div>
    </>
  );
  
  
};

export default NavigationArrows;
