// data   of Robot
class Robot{
    roboWork=["Security  robo","Cleaning  Robo","CookRobo"]
 getprofile(){
    throw new Error ("cannot  use this  method   without  override!") 
 }

 Work(){
    let random=Math.random() * this.roboWork.length;
    let index=Math.floor(random)
return    this.roboWork[index]
 }

}


//   using Encapsolation 
class data extends Robot{
    #models = ["XR-22", "Clean-MAX", "Defender-X", "Vision-9", "FlyBot-1", "NeuroBot-Z1"  ,  "HydraCore-88" ,  " GigaClean-R5" ,  "  Sentinel-VX" , "AeroX-900"];
    
    #i=0
    method(){
        
       return  this.#models[this.#i++];
    }
    //to  return  the models
    
    getprofile(){
       let card=document.querySelector(".card-title");
     return  card.innerHTML= `  Robot :  ${this.method()} <br>Work     : ${this.Work()} `

    }
    get(){
        return console.log(this.method())
    }

 }

 let Mod=new data();
//  Mod.getprofile();
//  Mod.getprofile();


//   using  genrater function  to show the data of robot and his owner number vise 
let i=0;
async function* AIPower(){
let Res=await fetch("https://jsonplaceholder.typicode.com/users");
let data=await Res.json();
for(let user of data){
let user= data[i++];
 yield ` ID :  ${user.name }  <br>Name: ${user.id} `    
   }
}


//  button  
let btn=document.querySelector(".btn")
let Next = AIPower() ;
btn.addEventListener("click",async   ()=>{

let next=await Next.next()
if(!next.done){
let card=document.querySelector(".card-title");

card.innerHTML=`${Mod.getprofile()} <br>   ${next.value} <br>  `;

}else{
let btn=document.querySelector(".btn")
let card=document.querySelector(".card-title");

btn.disabled = true ;
btn.innerHTML="All robot has loaded "
card.innerHTML="All Robo has loaded"
}


}
)






// Robot  Models 
// — (AI-based thinking robot)

//  — (multi-tasking heavy-duty robot)

//  — (ultra precision cleaning robot)

// — (security surveillance robot)









 // <!-- arraay  of robots -->
                        
// <!-- ; -->

// <!-- return models[Math.floor(Math.random() * models.length)]; -->
//                                 <!-- CSS -->

//       <!-- transform: scale(1.03);
//       box-shadow: 0 6px 20px rgba(0,0,0,0.2);
//     } 