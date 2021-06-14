module.exports.Image = function (src , alt = '') {
    let element = document.createElement('img') ; 

    element.src = src ; 
    element.alt = alt ; 


    return element ; 
} 