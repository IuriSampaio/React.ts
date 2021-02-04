import React from 'react';
import Routes from './routes';
import GlobalStyle from './style/GlobalStyles';

const App: React.FC = () => {
  return( 
    <>
      <Routes />
      <GlobalStyle isDark={true}/>    
    </>
  )
}

export default App;
