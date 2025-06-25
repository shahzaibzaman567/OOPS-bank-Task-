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
    #models = ["XR-22", "Clean-MAX", "Defender-X", "Vision-9", "FlyBot-1"];
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
 Mod.getprofile();
 Mod.getprofile();

 let i=0

//   using  genrater function  to show the data of robot and his owner number vise 
async function* AIPower(){
let Res=await fetch("https://jsonplaceholder.typicode.com/users");
let data=await Res.json();

// let card=document.querySelector(".card-title");
 yield  data[i++].name


}









 // <!-- arraay  of robots -->
                        
// <!-- ; -->

// <!-- return models[Math.floor(Math.random() * models.length)]; -->
//                                 <!-- CSS -->

//       <!-- transform: scale(1.03);
//       box-shadow: 0 6px 20px rgba(0,0,0,0.2);
//     } 