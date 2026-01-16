const form=document.getElementById("simple-form");
form.addEventListener("submit",(e)=>{
    e.preventDefault();

    const name=document.getElementById("name").value;
    const age=document.getElementById("age").value;
    const python=document.getElementById("python").checked;
    const javascript=document.getElementById("javascript").checked;

    let skills=[];
    if(python)skills.push("python");
    if(javascript)skills.push("javascript");

    let skilltext="no programming language";
    if(skills.length===1)skilltext=skills[0];
    if(skills.length===2)skilltext=skills.join(" and ");

    document.getElementById("output").textContent=`my name is ${name},i am ${age}years old and can code in ${skilltext}.`
})