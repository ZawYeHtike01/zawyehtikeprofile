const text="Junior Web Developer";
const jwd=document.getElementById("jwd");
let count=0;
let intervel =setInterval(()=>{
    if(count==text.length){
        count=0;
        jwd.innerText="";
    }else{
        jwd.innerText+=text[count];
        count++;
    }
},200)

const text1="Thank You  ありがとう";
const take=document.getElementById("thanks");
let c=0;
let interver =setInterval(()=>{
    if(c==text1.length){
        c=0;
        take.innerText="";
    }else{
        take.innerText+=text1[c];
        c++;
    }
})