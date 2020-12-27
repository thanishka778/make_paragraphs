function get_paragraph_1(){
var inputs=[];

for (var i=0; i<=6; i++){
    var all_inputs_store=document.getElementById("all_inputs_store"+i).value;
    console.log(all_inputs_store);
    inputs.push(all_inputs_store);
}
console.log(inputs);
document.getElementById("show_para_1").innerHTML=inputs.join(". ");
}

function get_paragraph_2(){
     inputs_of_second_para=[];
    
    for (var k=0; k<=6; k++){
        all_inputs_2_store=document.getElementById("all_inputs_2_store"+k).value;
        console.log(all_inputs_store);
        inputs.push(all_inputs_store);
    }
    console.log(inputs_of_second_para);
    document.getElementById("show_para_2").innerHTML=inputs.join(". ");
    }