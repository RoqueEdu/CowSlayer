{ //SKILLS MENU

const videoElement = document.getElementById("magiaVideo");
//const skillIconElement = document.getElementById("skillIcon");
const skillNameElement = document.getElementById("SkillName");
const skillDescElement = document.getElementById("SkillDesc");
let lastClicked = "";


 //SkillsObjects
const hammer = {
    
    videoID:"holyCross.mp4",
    icon:"img/skills/holyCross.png",
    skillName:"Holy Cross",
    skillDesc:"Conjura uma cruz que orbita o local, aplicando dano em todos que que a tocam"

};
const fireAura =  {
    videoID:"fireAura.mp4",
    icon:"img/skills/fireAura.png",
    skillName:"Fire Aura",
    skillDesc:"Cria uma área de fogo em volta do personagem que passivamente queima todos que estejam por perto."
};

const poisonPotion = {
    videoID:"poisonPotion.mp4",
    icon:"img/skills/poisonPotion.png",
    skillName:"Poison Potion",
    skillDesc:"Joga uma poção de veneno no local, envenenando quem passar por sua nuvem de fumaça."
};

const lightning = {
    videoID:"lightningStrike.mp4",
    icon:"img/skills/lightning.png",
    skillName:"Skies Fury",
    skillDesc:"Lança uma lança elétrica que se espalha no impacto, criando vários raios secundários."
};







const videoFolder = "img/skills/videos/";

 //find and add onclick to skills
const hammerButton = document.getElementById("hammer");
hammerButton.onclick = function(){SkillsMenu(hammer, hammerButton)};

const poisonPotionButton = document.getElementById("poisonPotion");
poisonPotionButton.onclick = function(){SkillsMenu(poisonPotion, poisonPotionButton)};

const fireAuraButton = document.getElementById("fireAura");
fireAuraButton.onclick = function(){SkillsMenu(fireAura, fireAuraButton)};

const lightningButton = document.getElementById("lightning");
lightningButton.onclick = function(){SkillsMenu(lightning, lightningButton)};


//first command to fix menuing
SkillsMenu(hammer, hammerButton);



function SkillsMenu(id, element) {

    if (element == lastClicked)
         return;

    lastClicked.className = "magiasButtons" ;
    element.className = "magiasButtonsClicked";     

   // skillIconElement.src = id.icon;
    skillNameElement.innerHTML = id.skillName;
    skillDescElement.innerHTML = id.skillDesc;

    videoElement.src = videoFolder + id.videoID;

    lastClicked = element;

}

}
///////////////////////////////////




{////RUNE MENU


//RUNES OBJECTS
const ManaRuneOBJ = {

runeImage:"img/runes/Mana Rune.png",
runeName:"Mana Rune",
runeDesc:"Diminui uso de mana em X%"


}
const DoubleRuneOBJ = {

    runeImage:"img/runes/Double Cast Rune.png",
    runeName:"Double Cast Rune",
    runeDesc:"Chance de soltar duas habilidades seguidas sem uso de mana"
    
}
const ExplosionRuneOBJ = {

    runeImage:"img/runes/Explosion Area Rune.png",
    runeName:"Explosion Rune",
    runeDesc:"Aumenta tamanho de skills explosivas ou em área"
    
}
const ProjectileRuneOBJ = {

    runeImage:"img/runes/Projectile Speed Rune.png",
    runeName:"Projectile Rune",
    runeDesc:"Aumenta velocidade de projéteis"
    
}
const FireRuneOBJ = {

    runeImage:"img/runes/Fire Rune.png",
    runeName:"Fire Rune",
    runeDesc:"Aumenta dano elemental de fogo"
    
}
const IceRuneOBJ = {

    runeImage:"img/runes/Ice Rune.png",
    runeName:"Ice Rune",
    runeDesc:"Aumenta dano elemental de gelo"
    
}
const LightRuneOBJ = {

    runeImage:"img/runes/Lightning Rune.png",
    runeName:"Lightning Rune",
    runeDesc:"Aumenta dano elemental de raio"
    
}
const PoisonRuneOBJ = {

    runeImage:"img/runes/Poison Rune.png",
    runeName:"Poison Rune",
    runeDesc:"Aumenta dano elemental de veneno"
    
}
const NormalRuneOBJ = {

    runeImage:"img/runes/Normal Rune.png",
    runeName:"Normal  Rune",
    runeDesc:"Aumenta dano não-elemental"
    
}
    


//////////////////SETUP
const runeDisplay = document.getElementById("RuneImage");
const runeNameDisplay = document.getElementById("RuneName");
const runeDescDisplay = document.getElementById("RuneDescription");
let lastRuneClicked = "";
//////


{//find rune ids and store em

const manaRuneElement = document.getElementById("ManaRune");
manaRuneElement.onclick = function(){RuneMenu(ManaRuneOBJ, manaRuneElement)};
//
const doubleRuneElement = document.getElementById("DoubleRune");
doubleRuneElement.onclick = function(){RuneMenu(DoubleRuneOBJ, doubleRuneElement)};
//
const explosionRuneElement = document.getElementById("ExplosionRune");
explosionRuneElement.onclick = function(){RuneMenu(ExplosionRuneOBJ, explosionRuneElement)};
//
const projectileRuneElement = document.getElementById("ProjectileRune");
projectileRuneElement.onclick = function(){RuneMenu(ProjectileRuneOBJ, projectileRuneElement)};
//
const fireRuneElement = document.getElementById("FireRune");
fireRuneElement.onclick = function(){RuneMenu(FireRuneOBJ, fireRuneElement)};
//
const iceRuneElement = document.getElementById("IceRune");
iceRuneElement.onclick = function(){RuneMenu(IceRuneOBJ, iceRuneElement)};
//
const lightRuneElement = document.getElementById("LightRune");
lightRuneElement.onclick = function(){RuneMenu(LightRuneOBJ, lightRuneElement)};
//
const poisonRuneElement = document.getElementById("PoisonRune");
poisonRuneElement.onclick = function(){RuneMenu(PoisonRuneOBJ, poisonRuneElement)};
//
const normalRuneElement = document.getElementById("NormalRune");
normalRuneElement.onclick = function(){RuneMenu(NormalRuneOBJ, normalRuneElement)};

RuneMenu(ManaRuneOBJ, manaRuneElement);
}



function RuneMenu (newSrc, RuneClicked) {


    if (lastRuneClicked == RuneClicked)
     return;

    lastRuneClicked.className = "magiasButtons" ;

    RuneClicked.className = "magiasButtonsClicked";     

    runeDisplay.src = newSrc.runeImage;
    runeNameDisplay.innerHTML = newSrc.runeName;
    runeDescDisplay.innerHTML = newSrc.runeDesc;
   
    lastRuneClicked = RuneClicked;


}

}

///////////////////

