import _ from 'lodash';

const colValues=[[1,2,3,4,5,6,7,8,9],[4,5,32,25,5,45,23],[12,42,42,4242,515,5],[4,2,2,41,4,5,11,1],[334,4,5],[5,2,34],[5,6,6],[1,2],[2,11],[4,2,1],[]];
const rowValue = [3,4,5,6,1,3,5,];
const val = []

let v = Math.floor((Math.random()*9)+1);
let foundRowValue = _.includes(rowValue,v);
let foundColValue = _.includes(colValues[9],v);
while (foundRowValue||foundColValue) {
    console.log('found');
    v = Math.floor((Math.random()*9)+1);
    foundRowValue = _.includes(rowValue,v);

    foundColValue = _.includes(colValues[9],v);
}
//store value of each row
// rowValue.push(v);
// //store value of each column
// colValues[2].push(v)
val.push(v);

console.log(colValues);
console.log(rowValue);
console.log(val);
