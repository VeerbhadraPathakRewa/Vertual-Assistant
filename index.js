let box = document.querySelector(".box");
let btn = document.querySelector("button");
const speakFunc = (input) => {
    let speakInput = new SpeechSynthesisUtterance(input);
    // speakInput.rate=1;
    // speakInput.pitch=1;
    // speakInput.volume=1
    speakInput.lang = 'en-IN'
    window.speechSynthesis.speak(speakInput);
}
window.onload = () => {
    // speakFunc("hello Akanksha Tiwari");
    // greetingFunc();
}
const greetingFunc = () => {
    let date = new Date();
    let hour = date.getHours()
    if (hour >= 0 && hour < 12) {
        speakFunc("Good Morning Dear, How can I help you!")
    } else if (hour >= 12 && hour < 16) {
        speakFunc("Good AfterNoon Dear, How can I help you!")
    } else {
        speakFunc("Good Morning Dear, How can I help you!")
    }
}
const startVoiceInput = () => {
    if (`webkitSpeechRecognition` in window) {
        let recog = new webkitSpeechRecognition();
        recog.leng = "en-US";
        recog.onresult = (e) => {

            let spokenText = e.results[0][0].transcript;
            handleCommands(spokenText.toLowerCase());
            box.classList.remove("btn-box");
            btn.innerHTML = '<i class="fa-solid fa-microphone-lines-slash"></i>'

        }
        recog.start();

    } else {
        alert("Your Broweser don nott support voice recognition")
    }
}
btn.onclick = () => {
    box.classList.add("btn-box");
    btn.innerHTML = '<i class="fa-solid fa-microphone-lines"></i>'
    startVoiceInput();
}
const handleCommands = (command) => {
    console.log(command)
    if (command.includes("who are you") || command.includes("hu r u") || command.includes("tum kaun ho") || command.includes("kaun ho tum")) {
        speakFunc("I am Virtual Asistance, Developed by Veerbhadra Pathak Sir");
    } else if (command.includes("google.com") || command.includes("google") || command.includes("open google.com")) {
        speakFunc("Opening")
        window.open("https://Google.com")
    }
    else if (command.includes("Google.com") || command.includes("google") || command.includes("open google.com")) {
        speakFunc("Opening")
        window.open(`https://Google.com`)
    }
    else if (command.includes("Calcuator") || command.includes("open calculator") || command.includes("open google.com")) {
        speakFunc("Opening calculator")
        window.open(`calculator://`)
    }

    else {
        speakFunc(`This is, What i Found on internet regarding ${command}`)
        window.open(`https://www.google.com/search?q=${command}`)
    }


}
