

//   using Encapsolation 
class IdModel{
    #models = ["XR-22", "Clean-MAX", "Defender-X", "Vision-9", "FlyBot-1"];
    #i=0
    method(){
        
        console.log( this.#models[this.#i++]);
    }
    //to  return  the models
     get(){
        return this.method()
     }

 }

 let x=new IdModel();
 x.get();
 x.get();
 x.get();






 // <!-- arraay  of robots -->
                        
// <!-- ; -->

// <!-- return models[Math.floor(Math.random() * models.length)]; -->
//                                 <!-- CSS -->

//       <!-- transform: scale(1.03);
//       box-shadow: 0 6px 20px rgba(0,0,0,0.2);
//     } 