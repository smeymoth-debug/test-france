function speakFrench(text){
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "fr-FR";
    speech.rate = 0.9;
    speechSynthesis.speak(speech);
}