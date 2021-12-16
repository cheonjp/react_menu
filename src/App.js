import React, {useState} from 'react'
import Item from './Item'
import menu from './menu'
import Categories from './Categories'
import './App.css';
const categories = ['all',... new Set(menu.map((item)=> {return item.category}))]

function App() {
  const [foot, setFoot]=useState(menu)

  const filterMenu = (category)=>{

    const newItems = menu.filter((item)=>{
      return item.category === category
      })

      if(category === 'all'){
        console.log('hello world')
        setFoot(menu)
      }else{

        setFoot(newItems)
      }
  }
  
  const createBtn =()=>{
    return(
      categories.map((btn)=>{
        return(
          <button class="btn" onClick ={()=>filterMenu(btn)}>{btn}</button>
        )
      })
    )
  }


  return (
    <div className="App">
      <h1>Menu</h1>
      <div className="line"></div>
      <div className="btnBox">{
        createBtn()
      }</div>
      <div className="container">
        <Item footMenu ={foot}/>
      </div>
    </div>
  );
}

export default App;
