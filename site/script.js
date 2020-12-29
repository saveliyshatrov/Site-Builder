var mobile = document.getElementById('selected-mobile');
var tablet = document.getElementById('selected-tablet');
var desktop = document.getElementById('selected-desktop');
var iframe = document.getElementById('iframe');
var wP = document.getElementById('paddings');
var pcl = document.getElementById('pcl');
var pcl_cancel = document.getElementById('pcl-cancel');
var showHide = document.getElementById('hide_show');
var ok_CSS_Settings = document.getElementById('ok-CSS-Settings');
var cancel_CSS_Settings = document.getElementById('close-CSS-Settings');


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


pcl_cancel.addEventListener('click', function(){hidepcl();}, false);

mobile.addEventListener('click', function(){selectionMobile();}, false);
tablet.addEventListener('click', function(){selectionTablet();}, false);
desktop.addEventListener('click', function(){selectionDesktop();}, false);

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
        if(target.innerText == 'show/hide elements'){
            let length = $(Memory.takeClickedElem()).parent().children().length;
            console.log(length)
            let elems = $(Memory.takeClickedElem()).parent().children();
            console.log(elems)
            for(let i = 1; i < length; i++){
                let len = elems[i].classList.length;
                if(len == 1){
                    Memory.takeClickedElem().classList.remove('border-left');
                    Memory.takeClickedElem().classList.add('border-none');
                    elems[i].classList.remove('d-none');
                }
                if(len == 0){
                    Memory.takeClickedElem().classList.remove('border-none');
                    Memory.takeClickedElem().classList.add('border-left');
                    elems[i].classList.add('d-none');
                }
            }
        }
    }
    if(target.classList[0] == 'elem' && Memory.takeClickedElem() !== '' && Memory.takeOptionPCL() !== ''){
        Memory.setElemFromMenuElements(target);
        addElemToTree();
    }
    //if(target.classList == 'elem-t'){
    //    showPopUpSettings(target.innerText);
    //    target.click();
    //}
}, false);

window.addEventListener('load', function(){
    document.body.style.transform = `scale(${window.innerWidth/1440})`;
    document.body.style.transformOrigin = '0 0';
});

window.oncontextmenu = function (e) {
    e = e || window.event;
    var target = e.target || e.srcElement;
    if(target.classList[0] == 'elem-t'){
        Memory.setClickedElem(target);
    }
};

function MakeEmptyMemory(){ 
    Memory.setElemFromMenuElements("");
    Memory.setOptionPCL("");
    Memory.setClickedElem("");
}

function addElemToTree(){
    choice = Memory.takeOptionPCL();
    if(choice == 'add to layer up'){
        $(`<li><div class="elem-t" oncontextmenu="showpcl()" onclick="setElement(this)" data-style="">${Memory.takeElemFromMenuElements()}</div></li>`).insertBefore($(Memory.takeClickedElem()).parent());
        MakeEmptyMemory();
    }
    if(choice == 'add inside'){
        $(Memory.takeClickedElem()).parent().append(`<ul><li><div class="elem-t" oncontextmenu="showpcl()" onclick="setElement(this)" data-style="">${Memory.takeElemFromMenuElements()}</div></li></ul>`);
        MakeEmptyMemory();
    }
    if(choice == 'add to layer down'){
        $(`<li><div class="elem-t" oncontextmenu="showpcl()" onclick="setElement(this)" data-style="">${Memory.takeElemFromMenuElements()}</div></li>`).insertAfter($(Memory.takeClickedElem()).parent());
        MakeEmptyMemory();
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

class LastClickedElement{
    constructor(){
        this.LastClickedElement = "";
    }
    setLastClickedElement(element){
        this.LastClickedElement = element;
    }
    getLastClickedElement(){
        return this.LastClickedElement;
    }
}

function showpcl(){
    array = handler();
    pcl.classList.remove('d-none');
    if((array[1] + document.getElementById('pcl').clientHeight) > document.body.clientHeight){
        pcl.style.marginTop = `${(array[1] - document.getElementById('pcl').clientHeight)/(window.innerWidth/1440)}px`;
    }
    if((array[1] + document.getElementById('pcl').clientHeight) < document.body.clientHeight){
        pcl.style.marginTop = `${array[1]/(window.innerWidth/1440)}px`;
    }
    //pcl.style.marginTop = `${array[1] - document.getElementById('pcl').clientHeight/2}px`;
    pcl.style.marginLeft = `${array[0]/(window.innerWidth/1440)}px`;
}

$(document).ready(function(){
    $(window).resize(function(){
        document.body.style.transform = `scale(${window.innerWidth/1440})`;
        document.body.style.transformOrigin = '0 0';
    });
});