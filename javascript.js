let leftArrowFunction = function(){
    console.log('Left')
}

let rightArrowFunction = function(){
    hiddenArr.push(displayArr[0])
    displayArr.shift()
    displayArr.push(hiddenArr[0])
    hiddenArr.shift()
    console.log(displayArr)
    console.log(hiddenArr)
}

let displayArr = ([0, 1, 2])
let hiddenArr = ([3, 4])

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