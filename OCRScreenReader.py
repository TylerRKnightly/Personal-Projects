import random
import time
import pyautogui
import numpy as nm
import cv2
from PIL import ImageGrab
import pytesseract

pytesseract.pytesseract.tesseract_cmd ='c:\\Program Files\\Tesseract-OCR\\tesseract'

#Base Gem price and setting up Dictonary
gemPrice = 8
items = {"Level 1 Crimson Flame": gemPrice
    , "Level 1 Annihilation": gemPrice
    , "Level 2 Crimson Flame": gemPrice*3
    , "Level 2 Annihilation": gemPrice*3
    , "Level 3 Crimson Flame": gemPrice*3*3
    , "Level 3 Annihilation": gemPrice*3*3
    , "Level 4 Crimson Flame": gemPrice*3*3*3
    , "Level 4 Annihilation": gemPrice*3*3*3
    , "Level 5 Crimson Flame": gemPrice*3*3*3*3
    , "Level 5 Annihilation": gemPrice*3*3*3*3
    , "Level 6 Crimson Flame": gemPrice*3*3*3*3*3
    , "Level 6 Annihilation": gemPrice*3*3*3*3*3
    , "Level 7 Crimson Flame": gemPrice*3*3*3*3*3*3
    , "Level 7 Annihilation": gemPrice*3*3*3*3*3*3
    , "Level 8 Crimson Flame": gemPrice*3*3*3*3*3*3*3
    , "Level 8 Annihilation": gemPrice*3*3*3*3*3*3*3
    , "Level 9 Crimson Flame": gemPrice*3*3*3*3*3*3*3*3
    , "Level 9 Annihilation": gemPrice*3*3*3*3*3*3*3*3
    , "Level 10 Crimson Flame": gemPrice*3*3*3*3*3*3*3*3*3*0.5
    , "Level 10 Annihilation": gemPrice*3*3*3*3*3*3*3*3*3}

# Funtion for Screengrab and OCR reading of price
def ss():
    cap = ImageGrab.grab(bbox =(1205, 218, 1327, 254))
    return pytesseract.image_to_string(
        cv2.cvtColor(nm.array(cap), cv2.COLOR_BGR2GRAY), 
        lang ='eng', config='--psm 10')
    time.sleep(1)
# Function to buy item
def buyItem():
    pyautogui.moveTo(855, 243, duration = 2)
    pyautogui.click()
    pyautogui.moveTo(1302, 825, duration = 2)
    pyautogui.click()
    pyautogui.moveTo(853, 606, duration = 2)
    pyautogui.click()
    pyautogui.moveTo(696, 472, duration = 2)
    pyautogui.click()
    time.sleep(2)
    
#This starts up the Market, opens the correct window, and buyout from low to high.
def startUp():
    pyautogui.moveTo(1809, 1049, duration = 1)
    pyautogui.click()
    pyautogui.moveTo(1809, 757, duration = 2)
    pyautogui.click()
    pyautogui.moveTo(211, 62, duration = 1)
    pyautogui.click()
    pyautogui.moveTo(1271, 187, duration = 1)
    time.sleep(3)
    pyautogui.click()
    time.sleep(1)
    pyautogui.click()
    time.sleep(1)
    pyautogui.click()

#Loop to iterate through Keys.
startUp()
while True:
    for key in items:
        delayOne = random.randrange(1, 3)
        delayTwo = random.randrange(3, 14)
        delayThree = random.randrange(2, 19)
        pyautogui.moveTo(969, 141, duration=delayOne)
        pyautogui.click()
        time.sleep(1)
        pyautogui.write(key)
        pyautogui.press('enter')
        time.sleep(2)
        ss()
        tesstr = int(ss())
        #while tesstr <= items[key]:
            #buyItem()
            #ss()
            #tesstr = ss()
        #time.sleep(delayTwo)
        pyautogui.moveTo(1196, 143, duration = 1)
        pyautogui.click()
        print(tesstr)


        
    
