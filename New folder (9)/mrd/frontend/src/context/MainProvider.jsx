import React, { createContext, useState } from 'react'
export const MainContext = createContext()
function MainProvider({ children }) {

  const [basket, setbasket] = useState([]);

  function IncreaseItem(items) {
    const index = basket.findIndex((x) => x.id === items.id);
    if (index !== -1) {
      basket[index].count++
      setbasket([...basket])
    }
    else {
      setbasket([...basket, { ...items, count: 1 }]);
    }
  }

  function DecreaseItem(items) {
    const index = basket.findIndex((x) => x.id === items.id);
    const num = basket[index]
    if (num.count > 1) {
      basket[index].count--
      setbasket([...basket])
    }
  }

  function RemoveBasket(items) {
    setbasket(basket.filter((x) => x.id !== items.id));
  }


  return (
    <>
      <MainContext.Provider value={{ IncreaseItem, DecreaseItem, RemoveBasket }}>
        {children}
      </MainContext.Provider>
    </>)
}

export default MainProvider