let getInfo = (function(){
    let displayArr = ([0, 1, 2])
    let hiddenArr = ([3, 4])
    return {displayArr, hiddenArr}
})()

let populateDisplay = (function makeDisplay(){
    let displayImage0 = document.getElementById('displayImage0')
    let displayImage1 = document.getElementById('displayImage1')
    let displayImage2 = document.getElementById('displayImage2')
    let displayImage3 = document.getElementById('displayImage3')
    let displayImage4 = document.getElementById('displayImage4')
    let pageDisplay = document.getElementById('pageContents')
    displayImage0.textContent = getInfo.displayArr[0]
    displayImage1.textContent = getInfo.displayArr[1]
    displayImage2.textContent = getInfo.displayArr[2]
    displayImage3.textContent = getInfo.displayArr[3]
    displayImage4.textContent = getInfo.displayArr[4]
    pageDisplay.textContent = displayImage1.textContent
    document.getElementById(`dot1`).classList.toggle('highlight')
    return {
        populateCarousel: function() {
            displayImage0.textContent = getInfo.displayArr[0]
            displayImage1.textContent = getInfo.displayArr[1]
            displayImage2.textContent = getInfo.displayArr[2]
            displayImage3.textContent = getInfo.displayArr[3]
            displayImage4.textContent = getInfo.displayArr[4]
        },
        populatePage: function(index){
            let displayImage1 = document.getElementById('displayImage1')
            index = index || displayImage1.textContent
            pageDisplay.textContent = index
        }
    } 
})()

let leftArrowFunction = (function(){
    let hiddenArr1 = getInfo.hiddenArr[1]
    let displayArr2 = getInfo.displayArr[2]
    getInfo.hiddenArr.unshift(displayArr2)
    getInfo.displayArr.pop()
    getInfo.displayArr.unshift(hiddenArr1)
    getInfo.hiddenArr.pop()
    populateDisplay.populateCarousel()
    populateDisplay.populatePage()
})

let rightArrowFunction = (function(){
    getInfo.hiddenArr.push(getInfo.displayArr[0])
    getInfo.displayArr.shift()
    getInfo.displayArr.push(getInfo.hiddenArr[0])
    getInfo.hiddenArr.shift()
    populateDisplay.populateCarousel()
    populateDisplay.populatePage()
})

let navButtonFunction = (function(e){
    let currentIndex = document.getElementById('displayImage1').textContent.slice(-1)
    let newIndex = e.target.id.slice(-1)
    document.getElementById(`dot${newIndex}`).classList.add('highlight')
    if (currentIndex !== newIndex){
        document.getElementById(`dot${currentIndex}`).classList.remove('highlight')
    }
    if (newIndex > currentIndex){
        let clickAmount = newIndex - currentIndex
        let i;
        for (i = 0; i < clickAmount; i++){
            rightArrowFunction()
        }
    }else if (currentIndex > newIndex){
        let clickAmount = currentIndex - newIndex
        let i;
        for (i = 0; i < clickAmount; i++){
            leftArrowFunction()
        }
    }
    populateDisplay.populatePage(newIndex)
    //populateDisplay.populateCarousel()
})