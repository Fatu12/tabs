import React,{useReducer, useState} from 'react'
import Form1 from './components/Form1'
import Form2 from './components/Form2'
import Form3 from './components/Form3'


function App(){
  const [tabColor, setTabColor] = useState({
    tabHight: 50,
    tabWidth : 50,
    color: ""
  })
  const [tabArray, setTabArray] = useState([< Form1/>,<Form2/>,< Form3/>])


  // we going to display the tabs what ever the user clicked, so it doesn't display all at ones
  const [displayTab, setDisplayTab] = useState({
    tab1: true,
    tab2: false,
    tab3:false
  })

  const handlerTabChange =(e, idx)=>{
       e.preventDefault();
       if(idx === 0){
        setDisplayTab({
          tab1: true, 
          tab2: false,
          tab3: false
        })
       }
       if(idx === 1){
        setDisplayTab({
          tab1: false,
          tab2: true,
          tab3: false
        })
       }
       if(idx === 2){
        setDisplayTab({
          tab1: false,
          tab2: false,
          tab3: true
        })
       }


  }
  return (
    <div>
      {/* <div>
        {
          tabArray.map((tab,index) => (
            <p key={index}>
            <a Onclick = {(e) => handlerTabChange(e,index)}href="">{`Tab ${index}`}</a>
            </p>
          ))
        }
      </div> */}
        <ul className='d-inline-flex' style={{margin :"auto", width:"50", textAlign: "left"}}>
           {
            tabArray.map((tab,index)=>(
              <li key={index} className='g-col-6' style={{listStyle: "none"}}>
       
              
                {/* bad ticks because we want to use variables like f" in python */}
                <a onClick = { (e) => handlerTabChange(e, index)} href="">{`Tab${index}`}</a>
              </li>
            ))
           }
          </ul>
      {
        displayTab.tab1? <Form1/>: null
      }
      {
        displayTab.tab2? <Form2/>: null
      }
      {
        displayTab.tab3? <Form3/>: null
      }

    </div>
  );
}

export default App;