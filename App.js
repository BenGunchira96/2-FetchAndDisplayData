import React, { useState } from 'react'; 
import AutoRefreshDataModal from './components/AutoRefreshDataModal';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  return (
    <div style={{ padding: '20px' }}>
      <button onClick={openModal} style={{ padding: '10px 20px', fontSize: '16px' }}>Open Modal</button>
      <AutoRefreshDataModal show={modalVisible} onClose={closeModal} />
    </div>
  );
};

export default App;

