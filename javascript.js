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
    displayImage0.textContent = getInfo.displayArr[0]
    displayImage1.textContent = getInfo.displayArr[1]
    displayImage2.textContent = getInfo.displayArr[2]
    displayImage3.textContent = getInfo.displayArr[3]
    displayImage4.textContent = getInfo.displayArr[4]
    return {
        publicMethod: function() {
            displayImage0.textContent = getInfo.displayArr[0]
            displayImage1.textContent = getInfo.displayArr[1]
            displayImage2.textContent = getInfo.displayArr[2]
            displayImage3.textContent = getInfo.displayArr[3]
            displayImage4.textContent = getInfo.displayArr[4]
        }
    } 
})()

let leftArrowFunction = (function(){
    console.log('Left')
})

let rightArrowFunction = (function(){
    getInfo.hiddenArr.push(getInfo.displayArr[0])
    getInfo.displayArr.shift()
    getInfo.displayArr.push(getInfo.hiddenArr[0])
    getInfo.hiddenArr.shift()
    populateDisplay.publicMethod()
    console.log(getInfo.displayArr)
    console.log(getInfo.hiddenArr)
})

/*let myFunction = (function(e) {
    let index = e.target.classList[0].slice(-1)
    let div = document.getElementById(`myDropdown${index}`)
    div.classList.toggle('show')
    return index
})

window.onclick = function(event) {
    if (!event.target.matches(`button`)) {
        let dropdowns = document.getElementsByClassName('dropdown-contentX');
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}*/