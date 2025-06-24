//geter function is  a  function which uses step   by step 
//how to use genrater function  

function* Mygenrater(){
yield "value1"
yield "value2"
yield "value3"
yield "value4"
}
// save function in variable
let gen=Mygenrater();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

// the value  come undefine  and  done has return true
console.log(gen.next());
console.log(gen.next());

// one small example
console.log("Example of gerater function")

function* Exa(){
   let i=1;
    while(i <= 3){
        yield  i ;
        i++
    }
}
let Example=Exa();

console.log(Example.next());
console.log(Example.next());
console.log(Example.next());
//if  value  has  end  the  function  has return Done:true 
console.log(Example.next());
















