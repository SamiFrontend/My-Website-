// import { image } from './_module' ; 
import menu from '../assets/icon/menu.svg' ; 
import myimage from '../assets/img/sami.jpeg' ; 
import bg from '../assets/img/background.jpg' ; 
import rightArrow from '../assets/icon/right-arrow.svg' ; 
// icon social 
import whats from '../assets/icon/whatsapp.svg' ;
import github from '../assets/icon/github.svg' ;
import gmail from '../assets/icon/gmail.svg' ;

let $ = ( elm ) => document.querySelector(elm) ; 



export function initLoadImage() {
    $('#menu').src = menu ; 
    $('#bg-home').src = bg ; 
    $('#my-image').src = myimage ; 
    $('#right-arrow').src = rightArrow ; 
    $('#left-arrow').src = rightArrow ; 
    $('#gmail').src = gmail ;
    $('#whats').src = whats ;
    $('#github').src = github ;

}
