import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './screens/RootStack';

import {UserContext} from './contexts/UserContext';

function App() {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{user, setUser}}>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </UserContext.Provider>
  );
}

export default App;
