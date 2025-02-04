# Intro Scene and Game setup
def introScene():
    story.print_character_text("The Text-Based-Adventure Template")
    story.print_character_text("Edit this text to show your introduction")
    firstScene()

# First scene
def firstScene():
    story.print_character_text("Chapter 1: Do you go left or right ?")
    story.show_player_choices("Left", "Right")
    choice = story.get_last_answer()

    if choice == "Left":
        story.print_character_text("You go Left")
        secondSceneA()

    elif choice == "Right":
        story.print_character_text("You go Right")
        secondSceneB()
    

# Second scenes
def secondSceneA():
    story.print_character_text("Chapter 2:  Choose an option")
    story.show_player_choices("A", "B")
    choice = story.get_last_answer()

    if choice == "A":
        story.print_character_text("You Clicked A")
        thirdSceneA()
    elif choice == "B":
        story.print_character_text("You Clicked B")
        thirdSceneB()

def secondSceneB():
    story.print_character_text("Chapter 2: Choose an option")
    story.show_player_choices("Foo", "Bar")
    choice = story.get_last_answer()
    
    if choice == "Foo":
        story.print_character_text("You chose Foo")
        thirdSceneC()
    elif choice == "Bar":
        thirdSceneD()

# Third Scenes
def thirdSceneA():
    gameEnd()

def thirdSceneB():
    gameEnd()

def thirdSceneC():
    gameEnd()

def thirdSceneD():
    gameEnd()

def gameEnd():
    game.set_game_over_message(True, "GAME OVER!")

def gameSetup():
    story.set_sound_enabled(True)
    story.set_page_pause_length(10000, 20000)

# Load the game
introScene()
