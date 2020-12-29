var popup = document.getElementById('popup');
var popup_info = document.getElementById('popup-info');
var shadow = document.getElementById('shadow');
var popupSettings = document.getElementById('popup-settings');
var popupMenuLeft = document.getElementById('popup-menu-left');
var popupMenuRight = document.getElementById('popup-menu-right');

function popUp(title, text){
    let ph = document.getElementById('popup-header');
    ph.innerText = title;
    let pm = document.getElementById('popup-main');
    pm.innerText = text;
}

function popUp_info(title, text){
    let ph = document.getElementById('popup-header-info');
    ph.innerText = title;
    let pm = document.getElementById('popup-main-info');
    pm.innerText = text;
}

function showPopUp_info(title, text){
    popup_info.classList.remove('d-none');
    shadow.classList.remove('d-none');
    popUp_info(title, text);
}

function hidePopUp_info(){
    popup_info.classList.add('d-none');
    shadow.classList.add('d-none');
}

function showPopUp(title, text){
    popup.classList.remove('d-none');
    shadow.classList.remove('d-none');
    popUp(title, text);
}

function hidePopUp(){
    popup.classList.add('d-none');
    shadow.classList.add('d-none');
}

function showPopUpSettings(NameElem){
    //popupSettings.classList.remove('d-none');
    popupMenuLeft.classList.remove('d-none');
    //popupMenuRight.classList.remove('d-none');
    document.getElementById('popup-menu-header-settings').innerText = NameElem
    //shadow.classList.remove('d-none');
}
function hidePopUpSettings(){
    //popupSettings.classList.add('d-none');
    popupMenuLeft.classList.add('d-none');
    //popupMenuRight.classList.add('d-none');
    //shadow.classList.add('d-none');
}

document.getElementById('popUp').addEventListener('click', ()=>{
    showPopUp('Confirm', 'Are you shure?')
}, false);

document.getElementById('popUpYes').addEventListener('click', ()=>{
    hidePopUp();
}, false);

document.getElementById('popUpNo').addEventListener('click', ()=>{
    hidePopUp();
}, false);

document.getElementById('popUpOk').addEventListener('click', ()=>{
    hidePopUp_info();
}, false);


document.getElementById('popUp-settings').addEventListener('click', ()=>{
    showPopUpSettings();
}, false);

document.getElementById('popUpYesSettings').addEventListener('click', ()=>{
    hidePopUpSettings();
}, false);

document.getElementById('popUpNoSettings').addEventListener('click', ()=>{
    hidePopUpSettings();
}, false);

