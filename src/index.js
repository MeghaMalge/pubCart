import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';


export default function Index() {
  return (
    <React.Fragment>
      <App></App>
    </React.Fragment>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
