//uses fech api of different robotos
async function* fechdata(countuser){

while(countuser<=10){

   let response= await fetch("https://jsonplaceholder.typicode.com/users");
    let data=await response.json();
 yield   data[0].name; 

}}

let data=fechdata(10);
setTimeout(()=>console.log(data),6000)

























//                                                  task

// <!-- <ul><h1>📝 Task Description (اردو میں):</h1>

        
// <li>    آپ نے ایک ایسا simple web project بنانا ہے جس میں:
// </li>
// <li>      ایک "Load Next Robot" بٹن ہو
// </li>
// <li>      ہر بار بٹن دبانے پر، ایک نیا robot کا data لایا جائے
// </li>
// <li>یہ data ایک API سے آئے: https://jsonplaceholder.typicode.com/users
// </li>
// <li>
//     ہر بار generator function سے data yield ہو
//     </li>
// <li>
//   generator function کے اندر while loop + await استعمال ہو
//     </li>
// <li>
//     جب تمام 10 robots ختم ہو جائیں، تو بٹن disable ہو جائے
//     </li>
// </ul> -->