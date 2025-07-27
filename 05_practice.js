//Q1:Create_a_variable_of_type_string_and_try_to_add_a_number_to_it.
let a = "bibek";
let b = 21;
console.log(a + b)  // integre and string concatinate and form new string.  ( string(bibek) and integer(21) ) --> (string(bibek21))
//Q2:Also_Use_type_of_operator_to_find_the_datatype_of_the_string.
console.log(typeof (a + b))
//Q3:Create_a_constant_obj_in_JS_can_u_change_it_to_hold_a_number_later.
const a1 = {
  name: "bibek",
  sec: 1,
  roll: true
}
//Q4:adding&edit_new_key_or_value_inside_the_obj.
a1["marks"] = "marks is:45";
a1.attendeance = 28;
a1.roll = false;
a1["sec"] = 5;
console.log(a1)

//Q5;make_an_simple_dictationary_using_obj:
//const prompt = require("prompt-sync")();
//var word = prompt("enter_the_word:");
const b1 = {
  computer: "A_device_where_you_are_reading_now",
  time: "thing_you_are_wasting_now.._read_fast&movefast"
}

console.log(b1.time);
console.log(b1.computer);
