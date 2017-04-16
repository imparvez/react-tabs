import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App.jsx';


var data = [  
  { title: "Tab 1", content: "I am the content of the first tab." },
  { title: "Tab 2", content: "I am the content of the second tab." },
  { title: "Tab 3", content: "Third tab, buddy." }
];

ReactDom.render(<App data={data}/>, document.getElementById('root'));