export default function AppDataGrid(props) {

const mapYandexSched= props.arrData.map(
(itemArrMap,index)=>(<div className="card" key={itemArrMap.id}>
   <div className="headCard">

       <table>
               <tbody key={itemArrMap._id}>
               <tr>
                   <td><b>Country:</b> {itemArrMap.country}</td>
                   <td><b>City:</b> {itemArrMap.city}</td>
                   <td><b>Name:</b> {itemArrMap.name}</td>
               </tr>
               <tr>
                   <td><b>Altitude:</b>{itemArrMap.altitude}</td>
                   <td><b>Longitude:</b>{itemArrMap.longitude}</td>
                   <td><b>Overall Students:</b>{itemArrMap.overallStudents}</td>
                   <td><b>Overall Sum:</b>{itemArrMap.overallSum}</td>
               </tr>
               </tbody>
       </table>






   </div>
</div>)
);

return(
       <div>
           {/*<h3>"AppYandexSched" component is here!!</h3>*/}
           {mapYandexSched}
       </div>
)
}