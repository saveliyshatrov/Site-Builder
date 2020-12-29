var nameOfStyle = getElementById('nameOfStyle');
var typeOfElement = getElementById('typeOfElement');
var colors = getElementById('colors');
var color = getElementById('color');
var backgroundColor = getElementById('background-color');
var borderTopLeftRadius = getElementById('borderTopLeftRadius');
var borderTopRightRadius = getElementById('borderTopRightRadius');
var borderBottomLeftRadius = getElementById('borderBottomLeftRadius');
var borderBottomRightRadius = getElementById('borderBottomRightRadius');
var borderTopWidth = getElementById('borderTopWidth');
var borderLeftWidth = getElementById('borderLeftWidth');
var borderRightWidth = getElementById('borderRightWidth');
var borderBottomWidth = getElementById('borderBottomWidth');
var borderTopColor = getElementById('borderTopColor');
var borderLeftColor = getElementById('borderLeftColor');
var borderRightColor = getElementById('borderRightColor');
var borderBottomColor = getElementById('borderBottomColor');
var text = getElementById('text');
var fontSize = getElementById('font-size');
var Font_size = getElementById('Font-size');
var placeholder = getElementById('placeholder');
var size = getElementById('size');
var width = getElementById('width');
var height = getElementById('height');
var margin = getElementById('margin');
var paddingTop = getElementById('paddingTop');
var paddingLeft = getElementById('paddingLeft');
var paddingRight = getElementById('paddingRight');
var paddingBottom = getElementById('paddingBottom');
var marginTop = getElementById('marginTop');
var marginLeft = getElementById('marginLeft');
var marginRigth = getElementById('marginRigth');
var marginBottom = getElementById('marginBottom');
var textAlign = getElementById('textAlign');

var placeholder = getElementById('placeholder');
var border = getElementById('border');
var borderRadius = getElementById('border-radius');
var border_color = getElementById('border-color');
var text_align = getElementById('text-align');
var type_of_element = getElementById('type-of-element');

var LCE = new LastClickedElement();
function setElement(element){
    showPopUpSettings(element.innerText);
    LCE.setLastClickedElement(element);
    hideNeedbleElements();
    try{
        let styles = JSON.parse(LCE.getLastClickedElement().getAttribute('data-style'));
        nameOfStyle.value = styles.nameOfStyle;
        typeOfElement.value = styles.typeOfElement;
        width.value = styles.width.replace('px', '');
        height.value = styles.height.replace('px', '');
        fontSize.value = styles.fontSize.replace('px', '');
        color.value = styles.color;
        textAlign.value = styles.textAlign;
        backgroundColor.value = styles.backgroundColor;
        borderTopWidth.value = styles.borderTopWidth.replace('px', '');
        borderLeftWidth.value = styles.borderLeftWidth.replace('px', '');
        borderRightWidth.value = styles.borderRightWidth.replace('px', '');
        borderBottomWidth.value = styles.borderBottomWidth.replace('px', '');
        borderTopLeftRadius.value  = styles.borderTopLeftRadius.replace('px', '');
        borderTopRightRadius.value = styles.borderTopRightRadius.replace('px', '');
        borderBottomLeftRadius.value = styles.borderBottomLeftRadius.replace('px', '');
        borderBottomRightRadius.value = styles.borderBottomRightRadius.replace('px', '');
        borderTopColor.value = styles.borderTopColor;
        borderLeftColor.value = styles.borderLeftColor;
        borderRightColor.value = styles.borderRightColor;
        borderBottomColor.value = styles.borderBottomColor;
        paddingTop.value = styles.paddingTop.replace('px', '');
        paddingLeft.value = styles.paddingLeft.replace('px', '');
        paddingRight.value = styles.paddingRight.replace('px', '');
        paddingBottom.value = styles.paddingBottom.replace('px', '');
        marginTop.value = styles.marginTop.replace('px', '');
        marginLeft.value = styles.marginLeft.replace('px', '');
        marginRigth.value = styles.marginRigth.replace('px', '');
        marginBottom.value = styles.marginBottom.replace('px', '');
        showNeedbleElements();
    } catch(e){}
}

nameOfStyle.addEventListener('change', function(){
    showNeedbleElements();
}, false);

function removeClass(elem, className){
    elem.classList.remove(className);
}

function removeDNone(elemArray){
    for(let i = 0; i < elemArray.length; i++){
        removeClass(elemArray[i], 'd-none');
    }
}

ok_CSS_Settings.addEventListener('click', function(){
    hidePopUpSettings();
    LCE.getLastClickedElement().setAttribute('data-style', JSON.stringify(generateJSONCSSStyle()));
}, false);
cancel_CSS_Settings.addEventListener('click', function(){hidePopUpSettings();}, false);

function addClass(elem, className){
    elem.classList.add(className);
}

function addDNone(elemArray){
    console.log(321);
    for(let i = 0; i < elemArray.length; i++){
        addClass(elemArray[i], 'd-none');
    }
}

function hideNeedbleElements(){
    typeOfElement.value = '';
    nameOfStyle.value = '';
    addDNone([placeholder, 
              Font_size, 
              colors, 
              size, 
              type_of_element,
              margin, 
              border, 
              borderRadius, 
              border_color, 
              text_align
             ]);
    nameOfStyle.value = "";
    typeOfElement.value = "";
    width.value = "";
    height.value = "";
    fontSize.value = "";
    color.value = "";
    textAlign.value = "";
    backgroundColor.value = "";
    borderTopWidth.value = "";
    borderLeftWidth.value = "";
    borderRightWidth.value = "";
    borderBottomWidth.value = "";
    borderTopLeftRadius.value = "";
    borderTopRightRadius.value = "";
    borderBottomLeftRadius.value = "";
    borderBottomRightRadius.value = "";
    borderTopColor.value = "";
    borderLeftColor.value = "";
    borderRightColor.value = "";
    borderBottomColor.value = "";
    paddingTop.value = "";
    paddingLeft.value = "";
    paddingRight.value = "";
    paddingBottom.value = "";
    marginTop.value = "";
    marginLeft.value = "";
    marginRigth.value = "";
    marginBottom.value = "";
}

function showNeedbleElements(){
    if(getElementById('popup-menu-header-settings').innerText.toLocaleLowerCase() == 'input'){
        typeOfElement.value = 'block';
        removeDNone([placeholder, 
                     Font_size, 
                     colors, 
                     size, 
                     margin, 
                     border, 
                     borderRadius, 
                     border_color, 
                     text_align
                    ]);
    }

    if(getElementById('popup-menu-header-settings').innerText.toLocaleLowerCase() == 'div'){
        removeDNone([type_of_element,
                     colors, 
                     size, 
                     margin, 
                     border, 
                     borderRadius, 
                     border_color
                    ]);
    }

    if(getElementById('popup-menu-header-settings').innerText.toLocaleLowerCase() == 'a'){

    }

    if(getElementById('popup-menu-header-settings').innerText.toLocaleLowerCase() == 'img'){

    }

    if(getElementById('popup-menu-header-settings').innerText.toLocaleLowerCase() == 'title'){

    }

    if(getElementById('popup-menu-header-settings').innerText.toLocaleLowerCase() == 'button'){

    }
}

function getElementById(id){
    return document.getElementById(id);
}

function checkElementForStyle(_elem){
    if(_elem == 'px' || _elem == 'Choose...'){
        if(_elem == 'px'){return '0px';}
        if(_elem == 'Choose...'){showPopUp_info('Warning', 'Select option!');}
    } else {
        return _elem;
    }
}

function checkStyleName(_elem){
    let blockedElems = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM".split('');
    if(!blockedElems.includes(_elem[0]) || _elem == ""){
        if(_elem != ""){
            showPopUp_info('Warning', `Name of style can't be "${_elem}" 😔`);
            nameOfStyle.value = "";
            return "";
        } else {
            showPopUp_info('Warning', 'Enter name of style');
            return "";
        }
    }
    return _elem;
}

function checkTextAlign(elem){
    if(elem == 'left'){
        return 'left';
    }
    if(elem == 'TAHidden'){
        return '0';
    }
    if(elem == 'center'){
        return 'center';
    }
    if(elem == 'right'){
        return 'right';
    }
}

function generateJSONCSSStyle(){
    let styles = {
        "nameOfStyle": "",
        "typeOfElement": "",
        "width": "",
        "height": "",
        "fontSize" : "",
        "color": "",
        "textAlign": "",
        "backgroundColor": "",
        "borderTopWidth": "",
        "borderLeftWidth": "",
        "borderRightWidth": "",
        "borderBottomWidth": "",
        "borderTopLeftRadius": "",
        "borderTopRightRadius": "",
        "borderBottomLeftRadius": "",
        "borderBottomRightRadius": "",
        "borderTopColor": "",
        "borderLeftColor": "",
        "borderRightColor": "",
        "borderBottomColor": "",
        "paddingTop": "",
        "paddingLeft": "",
        "paddingRight": "",
        "paddingBottom": "",
        "marginTop": "",
        "marginLeft": "",
        "marginRigth": "",
        "marginBottom": "",
    };
    styles.nameOfStyle = checkStyleName(nameOfStyle.value);
    styles.typeOfElement = checkElementForStyle(typeOfElement.value);
    styles.width = checkElementForStyle(width.value + 'px');
    styles.height = checkElementForStyle(height.value + 'px');
    styles.fontSize = checkElementForStyle(fontSize.value + 'px');
    styles.color = color.value;
    styles.textAlign = checkTextAlign(textAlign.value);
    styles.backgroundColor = backgroundColor.value;
    styles.borderTopWidth = checkElementForStyle(borderTopWidth.value + 'px');
    styles.borderLeftWidth = checkElementForStyle(borderLeftWidth.value + 'px');
    styles.borderRightWidth = checkElementForStyle(borderRightWidth.value + 'px');
    styles.borderBottomWidth = checkElementForStyle(borderBottomWidth.value + 'px');
    styles.borderTopLeftRadius = checkElementForStyle(borderTopLeftRadius.value  + 'px');
    styles.borderTopRightRadius = checkElementForStyle(borderTopRightRadius.value + 'px');
    styles.borderBottomLeftRadius = checkElementForStyle(borderBottomLeftRadius.value + 'px');
    styles.borderBottomRightRadius = checkElementForStyle(borderBottomRightRadius.value + 'px');
    styles.borderTopColor = borderTopColor.value;
    styles.borderLeftColor = borderLeftColor.value;
    styles.borderRightColor = borderRightColor.value;
    styles.borderBottomColor = borderBottomColor.value;
    styles.paddingTop = checkElementForStyle(paddingTop.value + 'px');
    styles.paddingLeft = checkElementForStyle(paddingLeft.value + 'px');
    styles.paddingRight = checkElementForStyle(paddingRight.value + 'px');
    styles.paddingBottom = checkElementForStyle(paddingBottom.value + 'px');
    styles.marginTop = checkElementForStyle(marginTop.value + 'px');
    styles.marginLeft = checkElementForStyle(marginLeft.value + 'px');
    styles.marginRigth = checkElementForStyle(marginRigth.value + 'px');
    styles.marginBottom = checkElementForStyle(marginBottom.value + 'px');
    if(styles.nameOfStyle == ""){
        return "";
    } else {
        return styles;
    }
}