import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
//import Editable from './tableEdit'
//ReactDOM.render(<Editable />, document.getElementById('root'));

/*OFICIALL*/ 
import App from './login/login'
ReactDOM.render(<App />, document.getElementById('root'));


//import Example from './Components/tableFiltered02'
//import createRowData from "./Components/createRowData"

//ReactDOM.render(<Example rows={createRowData(50)} />, document.getElementById('root'));

//import EnhancedTable from './Components/checkBoxTable'
//ReactDOM.render(<EnhancedTable />, document.getElementById('root'));



/*
import BasicFiltering from './Components/TableFilter'
ReactDOM.render(<BasicFiltering />, document.getElementById('root'));

*/


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
