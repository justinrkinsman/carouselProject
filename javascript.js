let getInfo = (function(){
    //let displayArr = ([0, 1, 2])
    let displayArr = new Array();
    displayArr[0] = new Image();
    displayArr[0].src = 'photo0.jpg'
    displayArr[0].alt = '0'
    displayArr[1] = new Image()
    displayArr[1].src = 'photo1.jpg'
    displayArr[1].alt = '1'
    displayArr[2] = new Image()
    displayArr[2].src = 'photo2.jpg'
    displayArr[2].alt = '2'
    //let hiddenArr = ([3, 4])
    let hiddenArr = new Array();
    hiddenArr[0] = new Image();
    hiddenArr[0].src = 'photo3.jpg'
    hiddenArr[0].alt = '3'
    hiddenArr[1] = new Image();
    hiddenArr[1].src = 'photo4.jpg'
    hiddenArr[1].alt = '4'
    let pageArr = new Array();
    pageArr[0] = new Image();
    pageArr[0].src = 'photo1.jpg'
    pageArr[0].alt = '1'
    return {displayArr, hiddenArr, pageArr}
})()
console.log(getInfo.pageArr)
//console.log(document.getElementsByTagName('img')[0].alt) //replace displayImage(i).textContent with this. Use index instead of [0]

let populateDisplay = (function makeDisplay(){
    let displayImage0 = document.getElementById('displayImage0')
    let displayImage1 = document.getElementById('displayImage1')
    let displayImage2 = document.getElementById('displayImage2')
    let displayImage3 = document.getElementById('displayImage3')
    let displayImage4 = document.getElementById('displayImage4')
    let pageDisplay = document.getElementById('pageContents')
    displayImage0.append(getInfo.displayArr[0])
    displayImage1.append(getInfo.displayArr[1])
    displayImage2.append(getInfo.displayArr[2])
    displayImage3.append(getInfo.displayArr[3])
    displayImage4.append(getInfo.displayArr[4])
    pageDisplay.append(getInfo.pageArr[0])   //FIXME: make copy of image to put in here
    document.getElementById(`dot1`).classList.toggle('highlight')
    return {
        populateCarousel: function() {
            displayImage0.append(getInfo.displayArr[0])
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
    let currentIndex = document.getElementById('displayImage1').textContent.slice(-1)
    document.getElementById(`dot${currentIndex}`).classList.remove('highlight')
    let newIndex = getInfo.displayArr[1]
    document.getElementById(`dot${newIndex}`).classList.add('highlight')
    populateDisplay.populateCarousel()
    populateDisplay.populatePage()
    clearInterval(navTimer)
    navTimer = setInterval(rightArrowFunction, 5000)
})

let rightArrowFunction = (function(){
    getInfo.hiddenArr.push(getInfo.displayArr[0].src)
    getInfo.displayArr.shift()
    getInfo.displayArr.push(getInfo.hiddenArr[0].src)
    getInfo.hiddenArr.shift()
    let currentIndex = document.getElementById('displayImage1').children[0].alt
    document.getElementById(`dot${currentIndex}`).classList.remove('highlight')
    let newIndex = getInfo.displayArr[1].alt
    document.getElementById(`dot${newIndex}`).classList.add('highlight')
    populateDisplay.populateCarousel()
    populateDisplay.populatePage()
    clearInterval(navTimer)
    navTimer = setInterval(rightArrowFunction, 5000)
    console.log(getInfo.displayArr)
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
    clearInterval(navTimer)
    navTimer = setInterval(rightArrowFunction, 5000)
})

let navTimer = setInterval(rightArrowFunction, 5000)