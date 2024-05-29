function PopupMonster() {
    let name = prompt("Hello! Vad heter du?");
    alert("Nice to meet you " + name);
    let age = prompt("Hur gammal är du?");
    if(age < 18){
        for(let i = 0; i < age; i++){
            alert("Grow up!");
        }
        
    }
    else {
        alert("Welcome to my nice webpage.");
    }
    let cool = confirm("So " + name + ", are you hot enough to be cool?")
    
    if(cool){
        alert("Yeeeeaah!")
    }
    else {
        alert("Bad day, uh?");
    }
}