// Joan of Arc "properties".
let joanOfArcInfoParts = ["Real-Name", "Grew-Up", "Known-For", "Scars", "Symbolism"];

// Values for Joan's "properties".
let joanOfArcInfoValues = [
  "Jehanne la Pucelle.",
  "Domremy, a village in northeastern France.",
  "Peasant girl, daughter of a farmer, who rose to become Commander of the French army.",
  "Took an arrow to the shoulder and a crossbow bolt to the thigh while trying to liberate Paris.",
  "Stands for French unity and nationalism."
];

let realName = joanOfArcInfoParts[0] + ": " + joanOfArcInfoValues[0]
let grewUp = joanOfArcInfoParts[1] + ": " + joanOfArcInfoValues[1]
let knownFor = joanOfArcInfoParts[2] + ": " + joanOfArcInfoValues[2]
let scars = joanOfArcInfoParts[3] + ": " + joanOfArcInfoValues[3]
let Symbolism = joanOfArcInfoParts[4] + ": " + joanOfArcInfoValues[4]

let allInfo = {
  realName,
  grewUp,
  knownFor,
  scars,
  Symbolism,
  battleCry() {
    console.log("AAAAYYYYYYYYyyyyyy!!!!")
  },
  simpleCry: function () {
    console.log("Whahhhhhh... Wah wah wah!")
  }
}

// or... 
let joanofArc = {
  name: "Jehanne la Pucelle. :) ",
  hometown: "Domremy, a village in northeastern France.",
  kownFor: "Peasant girl, daughter of a farmer, who rose to become Commander of the French army.",
  scars: "Took an arrow to the shoulder and a crossbow bolt to the thigh while trying to liberate Paris.",
  symbolism: "Stands for French unity and nationalism.",
  battleCry() {
    console.log(this.name)
    console.log(`AAAAYYYYYYYYyyyyyy!!!! I am from  ${this.hometown}`)
    const simpleCry = () => {
      console.log(this)
    }
  }
}
console.log(joanofArc)
joanofArc.battleCry()