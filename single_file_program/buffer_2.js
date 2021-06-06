let arr = new Array("Raj", "gohil", "tatvasoft", "tech", "is", "nodejs");

for (let new_arr in arr) {
  console.log(new_arr + " : " + arr[new_arr]);
  var arr_buf = Buffer.from(arr[new_arr]);
  console.log(arr_buf.toString() + " hex value is " + arr_buf.toString("hex"));
}

let str = "string example lorem";
let buf = Buffer.from(str);
console.log(buf.toString());

//buffer str to hex
console.log(buf.toString("hex"));

//concat
console.log(Buffer.concat([arr_buf, buf]).toString());
