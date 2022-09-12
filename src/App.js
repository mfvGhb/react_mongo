import fetch from 'cross-fetch';
import { useState , useContext} from "react";
import AppDataGrid from "./AppDataGrid";
import "./styles.css";
import logo from './logo.svg';
import './App.css';

function App() {
console.log('--------------5455 --------------') ;
let objPropsInit={name:"Empty", arrData:[]};
let [arrComponents, setArrComponents]=useState([AppDataGrid(objPropsInit)]) ;
//.......................................................................
let getData=async () =>{
console.log('get data  ' ,  new Date());
        try{
            const res = await fetch("http://127.0.01:3001/p99");
            // if (res.status >= 400) { throw new Error("Bad response from server"); }
            const user = await res.json();
            console.log('user***>>',user);
            let objProps1={name:"Data", arrData:user} ;
            setArrComponents([AppDataGrid(objProps1)])  ;
        } catch (err) { console.error(err);  }
}
//..........................................................................
//.......................................................................
let setData=async () =>{
        console.log('set data p98 ' ,  new Date());
        try{
            const res = await fetch("http://127.0.01:3001/p98");
            // if (res.status >= 400) { throw new Error("Bad response from server"); }
            const user = await res.json();
            console.log('user***>>',user);
            let objProps1={name:"Data", arrData:user} ;
            setArrComponents([AppDataGrid(objProps1)])  ;
        } catch (err) { console.error(err);  }
}
//..........................................................................

return (
        <div>
            <h1>Hello Mongo Node !</h1>
            <button className="bt1" onClick={getData}>Get Data</button>
            <button className="bt1" onClick={setData}>Set Data</button>
            {arrComponents.map( (item,index)=> <div key={index}> {item} </div> )}
            {/* {[ arrComponents          ]}   */}
        </div>
);
}

export default App;
