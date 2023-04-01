    import Character from "./Character.js";
    import CharacterData from "./data.js";
    const decepticons = ["Megatron" , "Berserker"]
    let isWaiting = false

    function render(){
    document.getElementById("hero").innerHTML = Optimus.getCharacterHTML()
    document.getElementById("decepticons").innerHTML = decepticon.getCharacterHTML()

    }   
    document.getElementById("attack-btn").addEventListener("click", function(){
        if(!isWaiting){
            Optimus.setDiceHTML()
            decepticon.setDiceHTML()
            Optimus.takeDamage(decepticon.currentDiceScore)
            decepticon.takeDamage(Optimus.currentDiceScore)
       

        if(Optimus.dead){
            endGame()
        }else if(decepticon.dead){
            if(decepticons.length === 0){
                endGame()
            }else{
                isWaiting = true
                setTimeout(()=>{
                    getNewFighter()
                    isWaiting = false
                    render()
                },1500 )
                
            }
        }
        render()
        }

        

    })
    function endGame(){
        let endMessageHtml = ``
        if(Optimus.dead && decepticon.dead && decepticons.length === 0){
            endMessageHtml = `<h1 class="end-message"> The Game is Over! No wictors all Transformers dead </h1>`
        }else if(Optimus.dead){
            endMessageHtml = `<h1 class="end-message"> The Game is Over! The decepticons wins</h1>`
        } else if(decepticon.dead){
            endMessageHtml = `<h1 class="end-message"> The Game is Over! Optimus Wins</h1>`
        }
        
        setTimeout(() => {
            document.body.classList.add("body-endGame")
            document.body.innerHTML = endMessageHtml, 1500 })
    }
    function getNewFighter(){
        decepticon = new Character(CharacterData[decepticons.pop()])
        
    }
    
    const Optimus = new Character(CharacterData.Optimus)
    let decepticon = new Character(CharacterData.StarsCream)
    render()

