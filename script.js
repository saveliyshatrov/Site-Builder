function takeStyleHeader(){
    return 'header{'+
           'height: 60px;'+
           'left: 0px;'+
           'top: 0px;' +
           'position: fixed;'+
           'width: 100%;'+
           'display: flex;'+
           'justify-content: center;' +
           'align-items: center;' +
           'border-bottom: 2px solid black;'+
           'background-color: white;' +
           '}';
}

function takeStyleFooter() {
    return 'footer{'+
           'height: 60px;'+
           'background-color: white;'+
           'left: 0px;'+
           'bottom: 0px;' +
           'position: fixed;'+
           'width: 100%;'+
           'display: flex;'+
           'justify-content: center;' +
           'align-items: center;' +
           'border-top: 2px solid black;'+
           '}';
}

function takeStyleMain(){
    return 'main{'+
           'margin-top: 60px;' +
           //'background-color: purple;'+
           '}';
}

function createElementMY(){
    /*
    var header = document.createElement('header')
    header.innerText = 'HEADER'
    var main =  document.createElement('main')
    main.innerText = "MAIN"
    var footer = document.createElement('footer')
    footer.innerText = 'FOOTER'
    var doc = document.getElementById('iframe');
    var style = document.createElement('style');
    style.textContent = 'body {' +
                        '  margin: 0px;' +
                        '  background-color: white;'+
                        '  font-family: Arial;' +
                        '}';

    style.textContent += takeStyleHeader();
    style.textContent += takeStyleFooter();
    style.textContent += takeStyleMain();
    //style.textContent += takeStyleFooter();
    console.log(style.textContent)
    doc.contentDocument.head.appendChild(style);
    doc.contentDocument.body.appendChild(header);
    doc.contentDocument.body.appendChild(main);
    doc.contentDocument.body.appendChild(footer);*/

    let page = new Page();
    page = page.takePage();

    var iframe = document.getElementById("iframe");
    var elmnt = iframe.contentWindow.document;
    iframe.contentWindow.document.open();
    iframe.contentWindow.document.write(page);
    iframe.contentWindow.document.close();
    /*
    var meta_1 = document.createElement('meta')
    meta_1.name = 'viewport'
    meta_1.content = 'width=device-width, initial-scale=1.0'
    elmnt.head.appendChild(meta_1)*/
    var meta_2 = document.createElement('meta');


    //var elem = ifrDoc.createElement("div");
    //elem.textContent = 'Test';
    //ifrDoc.body.appendChild(elem);
}

function Preview(){
    var iframe = document.getElementById("iframe");
    var elmnt = iframe.contentWindow.document;
    console.log(typeof(elmnt.documentElement.outerHTML));
}

function DownloadHTML(){
    Preview()
    var iframe = document.getElementById("iframe");
    var elmnt = iframe.contentWindow.document;
    download('page1.html', elmnt.documentElement.outerHTML);
}

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
  }
  
  // Start file download.
var mobile = document.getElementById('selected-mobile');
var tablet = document.getElementById('selected-tablet');
var desktop = document.getElementById('selected-desktop');
var iframe = document.getElementById('iframe');
var wP = document.getElementById('paddings');
var popup = document.getElementById('popup');
var popup_info = document.getElementById('popup-info')
var shadow = document.getElementById('shadow');
var popupSettings = document.getElementById('popup-settings');
var popupMenuLeft = document.getElementById('popup-menu-left');
var popupMenuRight = document.getElementById('popup-menu-right');
var pcl = document.getElementById('pcl');
var pcl_cancel = document.getElementById('pcl-cancel');

pcl_cancel.addEventListener('click', ()=>{hidepcl();}, false);
function hidepcl(){
    pcl.style.marginTop = '0px';
    pcl.style.marginLeft = '0px';
    pcl.classList.add('d-none');
}

function selectionMobile(){
    mobile.classList.add('active');
    tablet.classList.remove('active');
    desktop.classList.remove('active');
    iframe.classList.remove('Tablet-iframe');
    iframe.classList.remove('Desktop-iframe');
    iframe.classList.add('Phone-iframe');
    wP.classList.remove('desktop-paddings');
    wP.classList.remove('tablet-paddings');
    wP.classList.add('phone-paddings');
    iframe.width = 375;
    iframe.height = 812;
}
function selectionTablet(){
    mobile.classList.remove('active');
    tablet.classList.add('active');
    desktop.classList.remove('active');
    iframe.classList.remove('Desktop-iframe');
    iframe.classList.remove('Phone-iframe');
    iframe.classList.add('Tablet-iframe');
    wP.classList.remove('desktop-paddings');
    wP.classList.add('tablet-paddings');
    wP.classList.remove('phone-paddings');
    iframe.width = 768;
    iframe.height = 1024;
}
function selectionDesktop(){
    mobile.classList.remove('active');
    tablet.classList.remove('active');
    desktop.classList.add('active');
    iframe.classList.remove('Phone-iframe');
    iframe.classList.remove('Tablet-iframe');
    iframe.classList.add('Desktop-iframe');
    wP.classList.add('desktop-paddings');
    wP.classList.remove('tablet-paddings');
    wP.classList.remove('phone-paddings');
    iframe.width = 1920;
    iframe.height = 1080;
}

document.getElementById('selected-mobile').addEventListener('click', ()=>{selectionMobile()}, false);
document.getElementById('selected-tablet').addEventListener('click', ()=>{selectionTablet()}, false);
document.getElementById('selected-desktop').addEventListener('click', ()=>{selectionDesktop()}, false);

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
    popupSettings.classList.remove('d-none');
    popupMenuLeft.classList.remove('d-none');
    popupMenuRight.classList.remove('d-none');
    document.getElementById('popup-menu-header-settings').innerText = NameElem
    shadow.classList.remove('d-none');
}
function hidePopUpSettings(){
    popupSettings.classList.add('d-none');
    popupMenuLeft.classList.add('d-none');
    popupMenuRight.classList.add('d-none');
    shadow.classList.add('d-none');
}

document.addEventListener('click', function(e){
    hidepcl();
    e = e || window.event;
    var target = e.target || e.srcElement;
    if(target.classList[0] == 'pcl-button' && Memory.takeClickedElem() !== ''){
        if(target.innerText == 'cancel'){
            Memory.setClickedElem('');
            Memory.setOptionPCL('');
            Memory.setElemFromMenuElements('');
        } else {
            Memory.setOptionPCL(target);
        }
        if(target.innerText == 'remove element'){
            if(Memory.takeClickedElem().innerText == 'Header'){
                showPopUp_info('Warning', `Element "${Memory.takeClickedElem().innerText}" can not be deleted`);
            }
            if(Memory.takeClickedElem().innerText == 'Main'){
                showPopUp_info('Warning', `Element "${Memory.takeClickedElem().innerText}" can not be deleted`);
            }
            if(Memory.takeClickedElem().innerText == 'Footer'){
                showPopUp_info('Warning', `Element "${Memory.takeClickedElem().innerText}" can not be deleted`);
            }
            if(Memory.takeClickedElem().innerText != 'Footer' && Memory.takeClickedElem().innerText != 'Main' && Memory.takeClickedElem().innerText != 'Header'){
                $(Memory.takeClickedElem()).parent().remove();
            }
        }
    }
    if(target.classList[0] == 'elem' && Memory.takeClickedElem() !== '' && Memory.takeOptionPCL() !== ''){
        Memory.setElemFromMenuElements(target);
        addElemToTree();
    }
    if(target.classList == 'elem-t'){
        showPopUpSettings(target.innerText);
    }
}, false);

window.oncontextmenu = function (e) {
    e = e || window.event;
    var target = e.target || e.srcElement;
    if(target.classList[0] == 'elem-t'){
        Memory.setClickedElem(target);
    }
};

function addElemToTree(){
    choice = Memory.takeOptionPCL();
    if(choice == 'add to layer up'){
        $(`<li><div class="elem-t" oncontextmenu="showpcl()">${Memory.takeElemFromMenuElements()}</div></li>`).insertBefore($(Memory.takeClickedElem()).parent());
    }
    if(choice == 'add inside'){
        $(Memory.takeClickedElem()).parent().append(`<ul><li><div class="elem-t" oncontextmenu="showpcl()">${Memory.takeElemFromMenuElements()}</div></li></ul>`);
    }
    if(choice == 'add to layer down'){
        $(`<li><div class="elem-t" oncontextmenu="showpcl()">${Memory.takeElemFromMenuElements()}</div></li>`).insertAfter($(Memory.takeClickedElem()).parent());
    }
}

class memory{
    constructor(){
        this.clickedElem = '';
        this.optionPCL = '';
        this.elemFromMenuElements = '';
    }
    setClickedElem(clickedElem){
        this.clickedElem = clickedElem;
    }
    takeClickedElem(){
        return this.clickedElem;
    }
    setOptionPCL(Option){
        this.optionPCL = Option.innerText;
    }
    takeOptionPCL(){
        return this.optionPCL;
    }
    setElemFromMenuElements(elemFromMenuElements){
        this.elemFromMenuElements = elemFromMenuElements.innerText;
    }
    takeElemFromMenuElements(){
        return this.elemFromMenuElements;
    }
}
var Memory = new memory();
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

function handler(e) {
    e = e || window.event;

    var pageX = e.pageX;
    var pageY = e.pageY;

    // IE 8
    if (pageX === undefined) {
        pageX = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        pageY = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }

    return [pageX, pageY];
}

function showpcl(){
    array = handler();
    pcl.classList.remove('d-none');
    if((array[1] + document.getElementById('pcl').clientHeight) > document.body.clientHeight){
        pcl.style.marginTop = `${array[1] - document.getElementById('pcl').clientHeight}px`;
    }
    if((array[1] + document.getElementById('pcl').clientHeight) < document.body.clientHeight){
        pcl.style.marginTop = `${array[1]}px`;
    }
    //pcl.style.marginTop = `${array[1] - document.getElementById('pcl').clientHeight/2}px`;
    pcl.style.marginLeft = `${array[0]}px`;
}

/*$(document).ready(function(){
    $(window).resize(function(){
      alert('hello')
    });
  });*/