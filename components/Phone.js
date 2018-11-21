import React from 'react'
import '../static/sass/components/Phone.sass'

const Phone = (props) => (
  <a className="Phone" href={"tel:" + props.number}>
    {parsePhoneNumber(props.number)}
  </a>
)

const parsePhoneNumber = (number) => {
  if (typeof number == "undefined")
    return "";

  let string = number[0] == "+" ? number.slice(2) : number.slice(1);

  if (string.length != 10)
    return "incorrect number";
  return "+7 (" + string.slice(0, 3) + ") " + string.slice(3, 6) + "-" + string.slice(6, 8) + "-" + string.slice(8, 10);
}

export default Phone