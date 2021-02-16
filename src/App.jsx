import React, {useState} from 'react';
import './App.css';
import Modal from "./Modal/Modal";




const App = () => {

   const [modalActive, setModalActive] = useState()
  return (

    <div className="app"> 
      <main>

        <button className='open-btn' onClick={() => setModalActive(true)}>Заказ</button>
        </main> 
        <Modal active={modalActive} setActive={setModalActive}>
        
  
    <label for="fname">Дата заказа</label>
    <input type="date" id="fname" name="firstname" />

    <label for="lname">Цена товара</label>
    <input type="text" id="lname" name="lastname" placeholder="Price"/>

    <label for="product">Товар</label>
    <select id="product" name="product">
      <option value="хлеб">хлеб</option>
      <option value="рис">рис</option>
      <option value="молоко">молоко</option>
    </select>
  
    <input type="submit" value="Заказ"/>
  

            </Modal> 
            
    </div>
  );
}

export default App;