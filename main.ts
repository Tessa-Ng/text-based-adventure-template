//  Intro Scene and Game setup
function introScene() {
    story.printCharacterText("The Text-Based-Adventure Template")
    story.printCharacterText("Edit this text to show your introduction")
    firstScene()
}

//  First scene
function firstScene() {
    story.printCharacterText("Chapter 1: Do you go left or right ?")
    story.showPlayerChoices("Left", "Right")
    let choice = story.getLastAnswer()
    if (choice == "Left") {
        story.printCharacterText("You go Left")
        secondSceneA()
    } else if (choice == "Right") {
        story.printCharacterText("You go Right")
        secondSceneB()
    }
    
}

//  Second scenes
function secondSceneA() {
    story.printCharacterText("Chapter 2:  Choose an option")
    story.showPlayerChoices("A", "B")
    let choice = story.getLastAnswer()
    if (choice == "A") {
        story.printCharacterText("You Clicked A")
        thirdSceneA()
    } else if (choice == "B") {
        story.printCharacterText("You Clicked B")
        thirdSceneB()
    }
    
}

function secondSceneB() {
    story.printCharacterText("Chapter 2: Choose an option")
    story.showPlayerChoices("Foo", "Bar")
    let choice = story.getLastAnswer()
    if (choice == "Foo") {
        story.printCharacterText("You chose Foo")
        thirdSceneC()
    } else if (choice == "Bar") {
        thirdSceneD()
    }
    
}

//  Third Scenes
function thirdSceneA() {
    gameEnd()
}

function thirdSceneB() {
    gameEnd()
}

function thirdSceneC() {
    gameEnd()
}

function thirdSceneD() {
    gameEnd()
}

function gameEnd() {
    game.setGameOverMessage(true, "GAME OVER!")
}

function gameSetup() {
    story.setSoundEnabled(true)
    story.setPagePauseLength(10000, 20000)
}

//  Load the game
introScene()
