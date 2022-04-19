import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { My_Layout_Main } from './components/layout/layout_antd';
import { useRootStore } from '.';



function App() {
  const rootStore = useRootStore()

  useEffect(() => {
      rootStore.setInitialStorageContents()
  }, [])
  return (
    <div className="App">
      <My_Layout_Main/>
    </div>
  );
}

export default App;