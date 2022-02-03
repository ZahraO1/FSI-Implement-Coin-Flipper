// TODO: Declare any global variables we need


document.addEventListener('DOMContentLoaded', function () {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools
    console.log('Hi')

    // TODO: Add event listener and handler for flip and clear buttons
    let flip = document.querySelector("#flip")
    let headPage = document.querySelector("#heads")
    let head = 0
    let tailPage = document.querySelector("#tails")
    let tail = 0
    let headPercentagePage = document.querySelector("#heads-percent")
    let headPercentage = 0
    let tailPercentagePage = document.querySelector("#tails-percent")
    let tailPercentage = 0
    let coin = document.querySelector("img")
    let total = 0
    let message = document.querySelector("h3")
    flip.addEventListener("click",function(){
        //Math.random() to decide if it's heads or tails
        //1 = heads, 2 = tails
        let coinFlip = Math.round(Math.random()*2)
        if (coinFlip === 1)
        {
            //changes the image to heads
            coin.setAttribute("src","assets/images/penny-heads.jpg")
            console.log("You flipped heads!")
            head++
            total++
            headPercentage = Math.round(head/total * 100) 
            tailPercentage = Math.round(tail/total * 100)
            headPage.textContent = head
            headPercentagePage.textContent = headPercentage + "%"
            tailPercentagePage.textContent = tailPercentage + "%"
            message.textContent = "You Flipped Heads!"
            //increment head count 
            //update head percentage
            //update tail percentage????
            //maybe have a function for updating for both
        }
        else if (coinFlip === 2)
        {
            //changes the image to tails
            coin.setAttribute("src","assets/images/penny-tails.jpg")
            console.log("You flipped tails!")
            //increment tails count
            //update tail percentage
            //update head percentage
            tail++
            total++
            headPercentage = Math.round(head/total * 100)
            tailPercentage = Math.round(tail/total * 100)
            tailPage.textContent = tail
            headPercentagePage.textContent = headPercentage + "%"
            tailPercentagePage.textContent = tailPercentage + "%"
            message.textContent ="You Flipped Tails!"

        }
        else
        {
            console.log(coinFlip)
            message.textContent ="It's a tie!"
            //may it's the same as last time
        }
    })
    // Flip Button Click Handler
        // TODO: Determine flip outcome
        // TODO: Update image and status message in the DOM

        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell


    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)
    let clearBtn = document.querySelector("#clear")
    clearBtn.addEventListener('click',function(){
        message.textContent = "Let's Get Rolling!"
        head = 0
        tail = 0
        headPercentage = 0
        tailPercentage = 0
        total = 0
        headPage.textContent = 0
        headPercentagePage.textContent = "0%"
        tailPage.textContent = 0
        tailPercentagePage.textContent = "0%"
    })
})