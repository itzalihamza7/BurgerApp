import React, { useState } from "react";
import './Burger.css';
import { BurgerContent } from "./BurgerContent";
export default function Burger() {
  const [lettuce, setLettuce] = useState(0);
  const [tomato, setTomato] = useState(0);
  const [cheese, setCheese] = useState(0);
  const [meat, setMeat] = useState(0);
  const [total, setTotal] = useState(1.50);

  const addRemoveIngredient = (action, ingredient) =>{
    if (action === 'add') {
    switch (ingredient){
      case 'lettuce':{
        setTotal(total+0.65);
        setLettuce(lettuce+1);
        break;
      }
      case 'tomato':{
        setTotal(total+0.50);
        setTomato(tomato+1);
        break;
      }
      case 'cheese':{
        setTotal(total+1.50);
        setCheese(cheese+1);
        break;
      }
      case 'meat':{
        setTotal(total+3.00);
        setMeat(meat+1);
        break;
      }
      default: break;
    }
  }
  else {
    switch (ingredient){
      case 'lettuce':{
        setTotal(lettuce >0 ? total-0.65 : total);
        setLettuce(lettuce >0 ? lettuce-1 : 0);
        break;
      }
      case 'tomato':{
        setTotal(tomato >0 ? total-0.50 : total);
        setTomato(tomato >0 ? tomato-1 : 0);
        break;
      }
      case 'cheese':{
        setTotal(cheese >0 ? total-1.50 : total);
        setCheese(cheese >0 ? cheese-1 : 0);
        break;
      }
      case 'meat':{
        setTotal(meat >0 ? total-3.00 : total);
        setMeat(meat >0 ? meat-1 : 0);
        break;
      }
      default: break;
    }
  }
  }

    const getTotal = () =>{
      return total;
    }

  return (
    <>
      <div className="burger-ingredients">
        <div className="burger-top"></div>
          <BurgerContent lettuce={lettuce} tomato = {tomato} cheese = {cheese} meat = {meat}/>
        <div className="burger-bot"></div>
      </div>
      <div className="ingredients-block">
        <p>{getTotal()}</p>
        <p>Lettuce</p>
        <div className="ingredients-btns">
          <button onClick={() => addRemoveIngredient('add', 'lettuce')} className="ingredients-btn">Add</button>
          <button onClick={() => addRemoveIngredient('remove', 'lettuce')} className="ingredients-btn">Remove</button>
        </div>
        <p>Tomato</p>
        <div className="ingredients-btns">
          <button onClick={() => addRemoveIngredient('add', 'tomato')} className="ingredients-btn">Add</button>
          <button onClick={() => addRemoveIngredient('remove', 'tomato')} className="ingredients-btn">Remove</button>
        </div>
        <p>Cheese</p>
        <div className="ingredients-btns">
          <button onClick={() => addRemoveIngredient('add', 'cheese')} className="ingredients-btn">Add</button>
          <button onClick={() => addRemoveIngredient('remove', 'cheese')} className="ingredients-btn">Remove</button>
        </div>
        <p>Meat</p>
        <div className="ingredients-btns">
          <button onClick={() => addRemoveIngredient('add', 'meat')} className="ingredients-btn">Add</button>
          <button onClick={() => addRemoveIngredient('remove', 'meat')} className="ingredients-btn">Remove</button>
        </div>
      </div>
    </>
  );
}

