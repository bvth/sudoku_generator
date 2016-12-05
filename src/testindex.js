import _ from 'lodash';

let val = []
let count=0;
let v =  Math.floor((Math.random()*9)+1);
while(count++<9){
    v =  Math.floor((Math.random()*9)+1);
    if(v==5){ console.log('clear');val=[];}
    val.push(v);
    console.log(val);
}
