import React from 'react'
import Components from '../../ReactNativeElements'

function Product(props) {


  return (
    <Components.View key={props.id} style={props.cardStyle}>

      <Components.Image  style={props.imageStyle} src={props.image} alt="No Profile Picture"/>
      <Components.View  style={props.infoStyle}>
      <Components.Text ><Components.Text style={{fontWeight: "bold"}}>title: </Components.Text>{props.title}</Components.Text>
      <Components.Text><Components.Text style={{fontWeight: "bold"}}>description: </Components.Text>{props.description}</Components.Text>
      <Components.Text><Components.Text style={{fontWeight: "bold"}}>category: </Components.Text>{props.category}</Components.Text>
      <Components.Text><Components.Text style={{fontWeight: "bold"}}>price: ZAR</Components.Text>{props.price}</Components.Text>
      <Components.Text><Components.Text style={{fontWeight: "bold"}}>rate:</Components.Text>{props.rate}</Components.Text>
      <Components.Text><Components.Text style={{fontWeight: "bold"}}>stork:</Components.Text>{props.count}</Components.Text>
      </Components.View >
    </Components.View>
  )
}

export default Product