import CharacterData  from "./data.js";


function Character(data){
    Object.assign(this, data)
    
    // Dice Array  && HTML Functions
    // 
    this.percantage = 100
    this.maxHealth = this.health
     this.getDiceHTMLPlaceHolder = function(){
        return new Array(this.diceCount).fill(0).map(function(){
            return `<p> </p>`
        }).join("")
    }
   
    this.dead = false
    this.setDiceHTML = function(){
        this.currentDiceScore = this.getRandomDiceArray()
        this.diceHTML = this.currentDiceScore.map(function(dice){
            return `<p>${dice}</p>`
        }).join(" ")
       
    }

    this.getRandomDiceArray = function(){
        
        return new Array(this.diceCount).fill(0).map(function(){
          
            return Math.floor((Math.random()*6)+1)
        })  
        
    }
    this.diceHTML = this.getDiceHTMLPlaceHolder()
    // ===== 
    // =====
    this.takeDamage = function(damageArray){

        this.health -=  damageArray.reduce(function(total, currentDamage){
            return total + currentDamage
     })

     if(this.health <= 0){
        this.health = 0
        this.dead = true
    }    

        this.percantage = (this.health * 100) / this.maxHealth
    }

    this.getCharacterHTML = function (){
        const {name, health, image, diceCount, diceHTML, percantage,} = this
        let className =  percantage > 60 ? "no-danger-level"
        : percantage > 30 ? "low-danger-level"
        : "high-danger-level"
        
        return `
        <h2>${name}</h2>
            <div class="img-area">
                <img src="${image}" alt="${name}">
            </div>
            
            <h3>Health: <span>${health}</span></h3>
            <div class="health-bar">
                <div class="health ${className}" style="width: ${percantage}%"></div>
            </div>
            <div class="dice-area">
           ${diceHTML}
            </div>
        `   
       
    }
}

export default Character