const myobject = {
    JS: "JavaScript",
    cpp: "C++",
    rb: "Ruby"
}

for (const key in myobject) {
 console.log(`${key} is shortcut for ${myobject[key]}`);
}