// async generator function
async function* fetchdata(countuser) {
   let count = 0;
 
   while (count < countuser) {
     let response = await fetch("https://jsonplaceholder.typicode.com/users");
     let data = await response.json();
 
     for (let i = 0; i < data.length; i++) {
       yield data[i]; // pura user object bhejte hain
       count++;
       if (count >= countuser) break;
     }
   }
 }
 
 // generator call
 let Data = fetchdata(10);
 
 // button click handler
 async function shownext() {
   let next = await Data.next(); // ✅ await lagana zaroori hai
 
   let card = document.querySelector(".card-title");
 
   if (!next.done) {
     let user = next.value; // ✅ ab user ek object hai
     card.innerHTML = `🤖 ${user.name}<br>📧 ${user.email}`;
     console.log(user.name);
   } else {
     card.innerHTML = `✅ All robots loaded`;
     document.querySelector(".btn-success").disabled = true; // ✅ button disable
   }
 }
 