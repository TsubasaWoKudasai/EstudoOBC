import calculate from "./calculate.js"
import copyToCB from "./copyToCB.js"
import themeSwitch from "./themeSwitch.js"
import { handlePress, handleClear, handleTyping } from "./keyHandler.js"



document.querySelectorAll(".charKey").forEach(function(charKeyBtn){
    charKeyBtn.addEventListener("click", handlePress)
})

document.getElementById("clear").addEventListener('click', handleClear)
document.getElementById("equal").addEventListener('click', calculate)
document.getElementById("input").addEventListener('keydown', handleTyping )
document.getElementById("copyToClipboard").addEventListener('click', copyToCB )
document.getElementById("themeSwitcher").addEventListener('click', themeSwitch )
