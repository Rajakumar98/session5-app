import { useState } from "react";
import { Card } from "react-bootstrap";
import Button from "./Button";

export function Cards({prod, idx, setCount, count}){
  const [show, setShow] = useState(false);

  // var hide = false;
  // function setHide(param){
  //   hide = param
  // }
  //  setHide(!hide)
  //  setCount(!hide)
  //  console.log(!hide)

  function addToCart(){
    setShow(!show)
    setCount(count + 1)
  }

  function removeFromCart(){
    setShow(!show)
    setCount(count - 1)
  }

  return (
      <Card  style={{ width: "18rem" }}>
        <Card.Img variant="top" src={prod.productImage} />
        <Card.Body>
          <Card.Title>{prod.productName}</Card.Title>
          <Card.Text> RS {prod.price} </Card.Text>
          <Card.Text> ♥ {prod.rating} </Card.Text>
        {/* conditional rendering */}

        {!show ? <Button
        name="Add Cart"
        bgClr="lightskyblue"
        onClick={addToCart}
        />:""}

         {/* {!show ? <Button
           variant="primary"
           onClick={addToCart}
           >Add cart</Button> : ""}

           {show ? <Button 
           variant="danger"
           onClick={removeFromCart}
           >remove cart</Button> : ""} */}

         {show ? <Button
         name="Remove Cart"
         bgClr="green"
         clr="white"
         onClick={removeFromCart}
         />:""}  

        </Card.Body>
      </Card>
  )
}