import React from "react";
import "./Table.css";
import cal from "./icon.png";
import plus from "./plus.png";


function Table() {
    return(
        <>
         <table class="table-main" >
      <tr class="tr" >
        <th class="tr">Role </th>
        <th class="tr">Region</th>
        <th class="tr">Cost/hr</th>
        <th class="tr">weeks</th>
        <th class="tr">Cost</th>

      </tr>
      <tr class="tr">
        <td class="tr">persuit manager</td>
        <td class="tr" >NA</td>
        <td class="tr"><input type="text"/></td>
        <td class="tr">6 <button ><a href="./Calender"><img src={cal} alt="no" /></a></button></td>
        <td class="tr">$1100</td>
      </tr>
      <tr>
        <td class="tr">project manager</td>
        <td class="tr" >NA</td>
        <td class="tr"><input type="text"/></td>
        <td class="tr">6 <button ><a href="./Calender"><img src={cal} alt="no" /></a></button></td>
        <td class="tr">$880</td>
      </tr>
    </table>
    <div class="img-plus">
      <button class="img-btn"><img src={plus} alt="no"/></button>
    </div>
        </>
    )
}

export default Table;