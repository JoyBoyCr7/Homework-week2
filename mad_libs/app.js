console.log("Ronard's world")

let words = {
    number:"",
    adjective:"",
    pluralNoun:"",
    adverb:"",
    anotherAdjective:""
}

//Interact With the User

function startMadlib(){
    words.number = prompt("give me a number")
    words.adjective = prompt("give me a adjective")
    words.pluralNoun = prompt("give me a pluralNoun")
    words.adverb = prompt("give me a adverb")
    words.anotherAdjective = prompt("give me a anotherAdjective")

}
startMadlib()

let alerttext = `Once upon a time a group of ${words.number} General Assembly graduates\n
got together and made a startup called ${words.adjective} Technologies.\n
Their goal was to create smart ${words.pluralNoun}.\n
They approached the challenge ${words.adverb}\n
which ultimately lead them to ${words.anotherAdjective} fame.`


alert(alerttext)
