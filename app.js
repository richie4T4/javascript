const form=document.getelementbyld("simple-form");
form.addeventlistener("submit",(e)=>{
    e.preventdefault();

    const name=document.getelementbyld("name").value;
    const age=document.getelementbyld("age").value;
    const python=document.getelementbyld("python").checked;
    const javascript=document.getelementbyld("javascript").checked;

    let skills=[];
    if(python)skills.push("python");
    if(javascript)skills.push("javascript");

    let skilltext="no programming language";
    if(skills.length===1)skilltext=skills[0];
    if(skills.length===2)skilltext=skills.join("and");

    document.getelementbyld("output").textcontent="my name is ${name},i am ${age}years old and can code in ${skilltext}."
})