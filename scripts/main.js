/**
 * Created by Administrator on 2019/5/13.
 */
let myImage = document.querySelector('img');
myImage.onclick = function () {
    let src = myImage.getAttribute('src');
    if(src === 'images/firefox-icon.png'){
        myImage.setAttribute('src','images/firefox2.png')
    }else{
        myImage.setAttribute('src','images/firefox-icon.png')
    }
}