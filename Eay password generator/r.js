PasswordEL = document.getElementById("password");
btnEL = document.getElementById("btn");

btnEL.addEventListener("click",() => {
    getPassword()
 })

function getPassword() {
    const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz@%#$^&#( )_+?><:{}[]'";

    let password = ""
    let passwordLength = 12

    for (let i = 0; i < passwordLength; i++) {
        let ramdomNumber = Math.floor(Math.random()*chars.length);
    password += chars.substring(ramdomNumber,ramdomNumber +1)    
    }
    PasswordEL.value = password  
   
}

