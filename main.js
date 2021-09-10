
const userField = document.getElementById("uname");
const pwordField = document.getElementById("pword");
const userWarning = document.getElementById("uname-warning");
const pwordWarning = document.getElementById("pword-warning");

userField.addEventListener("keydown", checkMonkey);
pwordField.addEventListener("keyup", checkLength);

async function checkMonkey(e) {
    if(e.target.value.includes("@")){
        userWarning.innerHTML = "Gebruikersnaam mag geen @ bevatten.";
    } else {
        userWarning.innerHTML = " ";
    }
}

async function checkLength(e) {
    if(e.target.value.length < 6) {
        pwordWarning.innerHTML = "Wachtwoord is te kort, gebruik minimaal 6 tekens."
    } else {
        pwordWarning.innerHTML = " ";
    }
}
