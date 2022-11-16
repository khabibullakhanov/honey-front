import React from 'react'
import MyOrders from '../../Components/MyOrders/MyOrders'
import "./Orders.css"
import { Search } from "../../Components/Search/Search"



export function Orders() {
  return (
    <div id='order-container'>
      <Search />
      <MyOrders />
    </div>
  )
}
