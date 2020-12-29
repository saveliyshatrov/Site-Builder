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
var displayFlex = getElementById('displayFlex');
var justifyContent = getElementById('justifyContent');
var alignItems = getElementById('alignItems');
var Text = getElementById('Text');
var textDecoration = getElementById('textDecoration');
var flexDirection = getElementById('flexDirection');
var fontFamily = getElementById('fontFamily');
var existingStyles = getElementById('existingStyles');
var Overflow = getElementById('Overflow');
var fontWeight = getElementById('fontWeight');
var xColor = getElementById('xColor');
var yColor = getElementById('yColor');
var blurColor = getElementById('blurColor');
var boxShadowColor = getElementById('boxShadowColor');

var size_size = getElementById('size-size');
var margin_size = getElementById('margin-size');
var padding_size = getElementById('padding-size');

var placeholder = getElementById('placeholder');
var border = getElementById('border');
var borderRadius = getElementById('border-radius');
var border_color = getElementById('border-color');
var text_align = getElementById('text-align');
var type_of_element = getElementById('type-of-element');
var justify_content = getElementById('justify-content');
var align_items = getElementById('align-items');
var display_flex = getElementById('display-flex');
var padding = getElementById('padding');
var text = getElementById('text');
var text_decoration = getElementById('text-decoration');
var flex_direction = getElementById('flex-direction');
var font_family = getElementById('font-family');
var existing_styles = getElementById('existing-styles');
var overflow = getElementById('overflow');
var font_weight = getElementById('font-weight');
var box_shadow = getElementById('box-shadow');
fontWeight.value = '500';

var ObjOfStyles = {};

var LCE = new LastClickedElement();
function setElement(element){
    showPopUpSettings(element.innerText);
    LCE.setLastClickedElement(element);
    hideNeedbleElements();
    try{
        let styles = JSON.parse(LCE.getLastClickedElement().getAttribute('data-style'));
        nameOfStyle.value = styles.nameOfStyle;
        existingStyles.value = nameOfStyle.value;
        typeOfElement.value = styles.typeOfElement;
        width.value = checkFor0(reverseCheckForSize(styles.width, size_size).replace('px', '').replace('%', ''));
        height.value = checkFor0(reverseCheckForSize(styles.height, size_size).replace('px', '').replace('%', ''));
        fontSize.value = checkFor0(styles.fontSize.replace('px', ''));
        color.value = styles.color;
        textAlign.value = styles.textAlign;
        backgroundColor.value = styles.backgroundColor;
        borderTopWidth.value = checkFor0(styles.borderTopWidth.replace('px', ''));
        borderLeftWidth.value = checkFor0(styles.borderLeftWidth.replace('px', ''));
        borderRightWidth.value = checkFor0(styles.borderRightWidth.replace('px', ''));
        borderBottomWidth.value = checkFor0(styles.borderBottomWidth.replace('px', ''));
        borderTopLeftRadius.value  = checkFor0(styles.borderTopLeftRadius.replace('px', ''));
        borderTopRightRadius.value = checkFor0(styles.borderTopRightRadius.replace('px', ''));
        borderBottomLeftRadius.value = checkFor0(styles.borderBottomLeftRadius.replace('px', ''));
        borderBottomRightRadius.value = checkFor0(styles.borderBottomRightRadius.replace('px', ''));
        borderTopColor.value = styles.borderTopColor;
        borderLeftColor.value = styles.borderLeftColor;
        borderRightColor.value = styles.borderRightColor;
        borderBottomColor.value = styles.borderBottomColor;
        paddingTop.value = checkFor0(reverseCheckForSize(styles.paddingTop, padding_size).replace('px', '').replace('%', ''));
        paddingLeft.value = checkFor0(reverseCheckForSize(styles.paddingLeft, padding_size).replace('px', '').replace('%', ''));
        paddingRight.value = checkFor0(reverseCheckForSize(styles.paddingRight, padding_size).replace('px', '').replace('%', ''));
        paddingBottom.value = checkFor0(reverseCheckForSize(styles.paddingBottom, padding_size).replace('px', '').replace('%', ''));
        marginTop.value = checkFor0(reverseCheckForSize(styles.marginTop, margin_size).replace('px', '').replace('%', ''));
        marginLeft.value = checkFor0(reverseCheckForSize(styles.marginLeft, margin_size).replace('px', '').replace('%', ''));
        marginRigth.value = checkFor0(reverseCheckForSize(styles.marginRigth, margin_size).replace('px', '').replace('%', ''));
        marginBottom.value = checkFor0(reverseCheckForSize(styles.marginBottom, margin_size).replace('px', '').replace('%', ''));
        displayFlex.value = reverseCheckForDisplay(styles.display);
        justifyContent.value = styles.justifyContent;
        alignItems.value = styles.alignItems;
        Text.value = styles.Text;
        flexDirection.value = styles.flexDirection;
        textDecoration.value = reverseCheckForDecoration(styles.textDecoration);
        fontFamily.value = styles.fontFamily;
        Overflow.value = styles.Overflow;
        fontWeight.value = styles.fontWeight;
        xColor.value = styles.xColor;
        yColor.value = styles.yColor;
        blurColor.value = styles.blurColor;
        boxShadowColor.value = styles.boxShadowColor;
        showNeedbleElements();
    } catch(e){}
}

existingStyles.addEventListener('change', function(){
    setElementExistingStyle();
}, false);

function setElementExistingStyle(){
    try{
        let styles = ObjOfStyles[existingStyles.value];
        nameOfStyle.value = existingStyles.value;
        existingStyles.value = nameOfStyle.value;
        typeOfElement.value = styles.typeOfElement;
        width.value = checkFor0(reverseCheckForSize(styles.width, size_size).replace('px', '').replace('%', ''));
        height.value = checkFor0(reverseCheckForSize(styles.height, size_size).replace('px', '').replace('%', ''));
        fontSize.value = checkFor0(styles.fontSize.replace('px', ''));
        color.value = styles.color;
        textAlign.value = styles.textAlign;
        backgroundColor.value = styles.backgroundColor;
        borderTopWidth.value = checkFor0(styles.borderTopWidth.replace('px', ''));
        borderLeftWidth.value = checkFor0(styles.borderLeftWidth.replace('px', ''));
        borderRightWidth.value = checkFor0(styles.borderRightWidth.replace('px', ''));
        borderBottomWidth.value = checkFor0(styles.borderBottomWidth.replace('px', ''));
        borderTopLeftRadius.value  = checkFor0(styles.borderTopLeftRadius.replace('px', ''));
        borderTopRightRadius.value = checkFor0(styles.borderTopRightRadius.replace('px', ''));
        borderBottomLeftRadius.value = checkFor0(styles.borderBottomLeftRadius.replace('px', ''));
        borderBottomRightRadius.value = checkFor0(styles.borderBottomRightRadius.replace('px', ''));
        borderTopColor.value = styles.borderTopColor;
        borderLeftColor.value = styles.borderLeftColor;
        borderRightColor.value = styles.borderRightColor;
        borderBottomColor.value = styles.borderBottomColor;
        paddingTop.value = checkFor0(reverseCheckForSize(styles.paddingTop, padding_size).replace('px', '').replace('%', ''));
        paddingLeft.value = checkFor0(reverseCheckForSize(styles.paddingLeft, padding_size).replace('px', '').replace('%', ''));
        paddingRight.value = checkFor0(reverseCheckForSize(styles.paddingRight, padding_size).replace('px', '').replace('%', ''));
        paddingBottom.value = checkFor0(reverseCheckForSize(styles.paddingBottom, padding_size).replace('px', '').replace('%', ''));
        marginTop.value = checkFor0(reverseCheckForSize(styles.marginTop, margin_size).replace('px', '').replace('%', ''));
        marginLeft.value = checkFor0(reverseCheckForSize(styles.marginLeft, margin_size).replace('px', '').replace('%', ''));
        marginRigth.value = checkFor0(reverseCheckForSize(styles.marginRigth, margin_size).replace('px', '').replace('%', ''));
        marginBottom.value = checkFor0(reverseCheckForSize(styles.marginBottom, margin_size).replace('px', '').replace('%', ''));
        displayFlex.value = reverseCheckForDisplay(styles.display);
        justifyContent.value = styles.justifyContent;
        alignItems.value = styles.alignItems;
        flexDirection.value = styles.flexDirection;
        textDecoration.value = reverseCheckForDecoration(styles.textDecoration);
        fontFamily.value = styles.fontFamily;
        Overflow.value = styles.Overflow;
        fontWeight.value = styles.fontWeight;
        xColor.value = styles.xColor;
        yColor.value = styles.yColor;
        blurColor.value = styles.blurColor;
        boxShadowColor.value = styles.boxShadowColor;
    } catch(e){}
}

function reverseCheckForDecoration(_elem){
    if(_elem == 'none'){
        return _elem;
    } else {
        return 'not-none';
    }
}

function checkFor0(_elem){
    if(_elem != '0'){
        return _elem;
    } else {
        return '';
    }
}

function reverseCheckForSize(_elem, size){
    if(_elem.replace('%', '') == _elem){
        size.value = 'px';
    }
    if(_elem.replace('px', '') == _elem){
        size.value = '%';
    }
    return _elem;
}

function reverseCheckForDisplay(elem){
    if(elem == 'flex'){
        removeDNone([justify_content, align_items, flex_direction]);
        return 'yes';
    } else {
        return 'no';
    }
}

function appendStyle(){
    ObjOfStyles[nameOfStyle.value] = nameOfStyle.value;
}

nameOfStyle.addEventListener('change', function(){
    showNeedbleElements();
}, false);

displayFlex.addEventListener('change', function(){
    if(displayFlex.value == 'yes'){
        removeDNone([align_items,
                     justify_content,
                     flex_direction]);
    } else {
        addDNone([align_items,
                  justify_content,
                  flex_direction]);
    }
}, false);

function removeClass(elem, className){
    elem.classList.remove(className);
}

function removeDNone(elemArray){
    for(let i = 0; i < elemArray.length; i++){
        removeClass(elemArray[i], 'd-none');
    }
}

var array_of_styles = [];

function addStyle(){
    ObjOfStyles[nameOfStyle.value] = generateJSONCSSStyle();
    if(!array_of_styles.includes(nameOfStyle.value)){
        option = document.createElement('option');
        option.setAttribute('value', nameOfStyle.value);
        option.innerText = nameOfStyle.value;
        existingStyles.appendChild(option);
        array_of_styles.push(nameOfStyle.value);
    }
    existingStyles.value = nameOfStyle.value;
}

function saveStyleOnChange(g){
    (LCE.getLastClickedElement()).setAttribute('data-style', JSON.stringify(generateJSONCSSStyle()));
    addStyle();
    try{
        create_createElementMY();
    }
    catch(e){

    }
}

color.addEventListener('change', function(){try{saveStyleOnChange();}catch(e){}}, false);
backgroundColor.addEventListener('change', function(){try{saveStyleOnChange();}catch(e){}}, false);
borderTopLeftRadius.addEventListener('change', function(){try{saveStyleOnChange();}catch(e){}}, false);
borderTopRightRadius.addEventListener('change', function(){try{saveStyleOnChange();}catch(e){}}, false);
borderBottomLeftRadius.addEventListener('change', function(){try{saveStyleOnChange();}catch(e){}}, false);
borderBottomRightRadius.addEventListener('change', function(){try{saveStyleOnChange();}catch(e){}}, false);
borderTopWidth.addEventListener('change', function(){try{saveStyleOnChange();}catch(e){}}, false);
borderLeftWidth.addEventListener('change', function(){try{saveStyleOnChange();}catch(e){}}, false);
borderRightWidth.addEventListener('change', function(){try{saveStyleOnChange();}catch(e){}}, false);
borderBottomWidth.addEventListener('change', function(){try{saveStyleOnChange();}catch(e){}}, false);
borderTopColor.addEventListener('change', function(){try{saveStyleOnChange();}catch(e){}}, false);
borderLeftColor.addEventListener('change', function(){try{saveStyleOnChange();}catch(e){}}, false);
borderRightColor.addEventListener('change', function(){try{saveStyleOnChange();}catch(e){}}, false);
borderBottomColor.addEventListener('change', function(){try{saveStyleOnChange();}catch(e){}}, false);
fontSize.addEventListener('change', function(){try{saveStyleOnChange();}catch(e){}}, false);
Font_size.addEventListener('change', function(){try{saveStyleOnChange();}catch(e){}}, false);
placeholder.addEventListener('change', function(){try{saveStyleOnChange();}catch(e){}}, false);
size.addEventListener('change', function(){try{saveStyleOnChange();}catch(e){}}, false);
width.addEventListener('change', function(){try{saveStyleOnChange();}catch(e){}}, false);
height.addEventListener('change', function(){try{saveStyleOnChange();}catch(e){}}, false);
margin.addEventListener('change', function(){try{saveStyleOnChange();}catch(e){}}, false);
paddingTop.addEventListener('change', function(){try{saveStyleOnChange();}catch(e){}}, false);
paddingLeft.addEventListener('change', function(){try{saveStyleOnChange();}catch(e){}}, false);
paddingRight.addEventListener('change', function(){try{saveStyleOnChange();}catch(e){}}, false);
paddingBottom.addEventListener('change', function(){try{saveStyleOnChange();}catch(e){}}, false);
marginTop.addEventListener('change', function(){try{saveStyleOnChange();}catch(e){}}, false);
marginLeft.addEventListener('change', function(){try{saveStyleOnChange();}catch(e){}}, false);
marginRigth.addEventListener('change', function(){try{saveStyleOnChange();}catch(e){}}, false);
marginBottom.addEventListener('change', function(){try{saveStyleOnChange();}catch(e){}}, false);
textAlign.addEventListener('change', function(){try{saveStyleOnChange();}catch(e){}}, false);
displayFlex.addEventListener('change', function(){try{saveStyleOnChange();}catch(e){}}, false);
justifyContent.addEventListener('change', function(){try{saveStyleOnChange();}catch(e){}}, false);
alignItems.addEventListener('change', function(){try{saveStyleOnChange();}catch(e){}}, false);
Text.addEventListener('change', function(){try{saveStyleOnChange();}catch(e){}}, false);
textDecoration.addEventListener('change', function(){try{saveStyleOnChange();}catch(e){}}, false);
flexDirection.addEventListener('change', function(){try{saveStyleOnChange();}catch(e){}}, false);
fontFamily.addEventListener('change', function(){try{saveStyleOnChange();}catch(e){}}, false);
Overflow.addEventListener('change', function(){try{saveStyleOnChange();}catch(e){}}, false);
fontWeight.addEventListener('change', function(){try{saveStyleOnChange();}catch(e){}}, false);
xColor.addEventListener('change', function(){try{saveStyleOnChange();}catch(e){}}, false);
yColor.addEventListener('change', function(){try{saveStyleOnChange();}catch(e){}}, false);
blurColor.addEventListener('change', function(){try{saveStyleOnChange();}catch(e){}}, false);
boxShadowColor.addEventListener('change', function(){try{saveStyleOnChange();}catch(e){}}, false);

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
              text_align,
              justify_content,
              align_items,
              display_flex,
              text, 
              padding,
              text_decoration,
              flex_direction,
              font_family,
              overflow,
              font_weight,
              box_shadow
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
    justifyContent.value = "";
    alignItems.value = "";
    textDecoration.value = "";
    size_size.value = "";
    padding_size.value = "";
    margin_size.value = "";
    flexDirection.value = "";
    fontFamily.value = "";
    displayFlex.value = "";
    existingStyles.value = "";
    Overflow.value = 'no';
    fontWeight.value = '500';
    xColor.value = '';
    yColor.value = '';
    blurColor.value = '';
    boxShadowColor.value = '';
}

function showNeedbleElements(){
    let _text = getElementById('popup-menu-header-settings').innerText.toLocaleLowerCase();
    if(_text == 'input'){
        typeOfElement.value = 'block';
        removeDNone([placeholder, 
                     Font_size, 
                     colors, 
                     size, 
                     margin, 
                     border, 
                     borderRadius, 
                     border_color, 
                     text_align,
                     font_family,
                     font_weight
                    ]);
    }

    if(_text == 'div' || _text == 'header' || _text == 'footer' || _text == 'main'){
        removeDNone([Font_size,
                     colors, 
                     size, 
                     margin, 
                     border, 
                     borderRadius, 
                     border_color,
                     display_flex,
                     padding,
                     text,
                     font_family,
                     overflow,
                     font_weight,
                     box_shadow
                    ]);
    }

    if(_text == 'a'){
        removeDNone([text_decoration, colors, Font_size, font_family]);
    }

    if(_text == 'img'){

    }

    if(_text == 'title'){

    }

    if(_text == 'button'){
        removeDNone([Font_size,
                        colors, 
                        size, 
                        margin, 
                        border, 
                        borderRadius, 
                        border_color,
                        display_flex,
                        padding,
                        text,
                        font_family,
                        font_weight,
                        box_shadow
                    ]);
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
    if(elem == 'left' || elem == 'right' || elem == 'center' || elem == 'TAHidden'){
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
    } else {
        return "";
    }
}

function checkForDisplay(elem){
    if(elem == 'yes' || elem == 'no'){
        if(elem == 'yes'){
            return 'flex';
        }
        if(elem == 'no'){
            return '';
        }
    } else {
        return '';
    }
}

function checkForJC(elem){
    if(elem == 'start' || elem == 'center' || elem == 'end' || elem == 'space-around' || elem == 'space-between'){
        if(elem == 'start'){
            return elem;
        }
        if(elem == 'center'){
            return elem;
        }
        if(elem == 'end'){
            return elem;
        }
        if(elem == 'space-around'){
            return elem;
        }
        if(elem == 'space-between'){
            return elem;
        }
    } else {
        return '';
    }
}

function checkForAT(elem){
    if(elem == 'flex-start' || elem == 'center' || elem == 'flex-end'){
        if(elem == 'flex-start'){
            return elem;
        }
        if(elem == 'center'){
            return elem;
        }
        if(elem == 'flex-end'){
            return elem;
        }
    } else {
        return '';
    }
}

function checkForTD(_elem){
    if(_elem == 'none' || _elem == 'not-none'){
        if(_elem != 'not-none'){
            console.log(_elem);
            return 'none';
        } else {
            return '';
        }
    } else {
        return '';
    }
}

function checkForSize(_elem){
    if(_elem == '%' || _elem == 'px'){
        return _elem;
    } else {
        return 'px';
    }
}

function checkForDirection(_elem){
    if(_elem == 'row' || _elem == 'column'){
        return _elem;
    } else {
        return '';
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
        "display": "",
        "justifyContent": "",
        "alignItems": "",
        "Text": "",
        "textDecoration": "",
        "flexDirection": "",
        "fontFamily": "",
        "fontWeight": "",
        "xColor": "",
        "yColor": "",
        "blurColor": "",
        "boxShadowColor": ""
    };
    styles.nameOfStyle = checkStyleName(nameOfStyle.value);
    styles.typeOfElement = checkElementForStyle(typeOfElement.value);
    styles.width = checkElementForStyle(width.value + checkForSize(size_size.value));
    styles.height = checkElementForStyle(height.value + checkForSize(size_size.value));
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
    styles.paddingTop = checkElementForStyle(paddingTop.value + checkForSize(padding_size.value));
    styles.paddingLeft = checkElementForStyle(paddingLeft.value + checkForSize(padding_size.value));
    styles.paddingRight = checkElementForStyle(paddingRight.value + checkForSize(padding_size.value));
    styles.paddingBottom = checkElementForStyle(paddingBottom.value + checkForSize(padding_size.value));
    styles.marginTop = checkElementForStyle(marginTop.value + checkForSize(margin_size.value));
    styles.marginLeft = checkElementForStyle(marginLeft.value + checkForSize(margin_size.value));
    styles.marginRigth = checkElementForStyle(marginRigth.value + checkForSize(margin_size.value));
    styles.marginBottom = checkElementForStyle(marginBottom.value + checkForSize(margin_size.value));
    styles.display = checkForDisplay(displayFlex.value);
    styles.justifyContent = checkForJC(justifyContent.value);
    styles.alignItems = checkForAT(alignItems.value);
    styles.Text = Text.value;
    styles.textDecoration = checkForTD(textDecoration.value);
    styles.flexDirection = checkForDirection(flexDirection.value);
    styles.fontFamily = fontFamily.value;
    styles.Overflow = Overflow.value;
    styles.fontWeight = fontWeight.value;
    styles.xColor = xColor.value;
    styles.yColor = yColor.value;
    styles.blurColor = blurColor.value;
    styles.boxShadowColor = boxShadowColor.value;
    if(styles.nameOfStyle == ""){
        return "";
    } else {
        return styles;
    }
}

var elem_input = getElementById('elem-input');
var elem_textarea = getElementById('elem-textarea');
var elem_button = getElementById('elem-button');
var elem_title = getElementById('elem-title');
var elem_p = getElementById('elem-p');
var elem_h1 = getElementById('elem-h1');
var elem_h2 = getElementById('elem-h2');
var elem_h3 = getElementById('elem-h3');
var elem_h4 = getElementById('elem-h4');
var elem_h5 = getElementById('elem-h5');
var elem_h6 = getElementById('elem-h6');
var elem_hr = getElementById('elem-hr');
var elem_div = getElementById('elem-div');
var elem_a = getElementById('elem-a');
var elem_img = getElementById('elem-img');
var elem_svg = getElementById('elem-svg');
var elem_select = getElementById('elem-select');
var elem_option = getElementById('elem-option');

function clearAI(){
    removeDNone([elem_input,
                elem_textarea,
                elem_button,
                elem_title,
                elem_p,
                elem_h1,
                elem_h2,
                elem_h3,
                elem_h4,
                elem_h5,
                elem_h6,
                elem_hr,
                elem_div,
                elem_a,
                elem_img,
                elem_svg,
                elem_select,
                elem_option]);
}

ai.addEventListener('click', function(){
    let nameElem = Memory.takeClickedElem().innerText.toLocaleLowerCase();
    if(nameElem == 'select'){
        addDNone([elem_input,
                  elem_textarea,
                  elem_button,
                  elem_title,
                  elem_p,
                  elem_h1,
                  elem_h2,
                  elem_h3,
                  elem_h4,
                  elem_h5,
                  elem_h6,
                  elem_hr,
                  elem_div,
                  elem_a,
                  elem_img,
                  elem_svg,
                  elem_select
                ]);
    }
    if(nameElem == 'img'){
        addDNone([elem_input,
                  elem_textarea,
                  elem_button,
                  elem_title,
                  elem_p,
                  elem_h1,
                  elem_h2,
                  elem_h3,
                  elem_h4,
                  elem_h5,
                  elem_h6,
                  elem_hr,
                  elem_div,
                  elem_a,
                  elem_img,
                  elem_svg,
                  elem_select,
                  elem_option
                ]);
    }
}, false);

elem_input.addEventListener('click', clearAI, false);
elem_textarea.addEventListener('click', clearAI, false);
elem_button.addEventListener('click', clearAI, false);
elem_title.addEventListener('click', clearAI, false);
elem_p.addEventListener('click', clearAI, false);
elem_h1.addEventListener('click', clearAI, false);
elem_h2.addEventListener('click', clearAI, false);
elem_h3.addEventListener('click', clearAI, false);
elem_h4.addEventListener('click', clearAI, false);
elem_h5.addEventListener('click', clearAI, false);
elem_h6.addEventListener('click', clearAI, false);
elem_hr.addEventListener('click', clearAI, false);
elem_div.addEventListener('click', clearAI, false);
elem_a.addEventListener('click', clearAI, false);
elem_img.addEventListener('click', clearAI, false);
elem_svg.addEventListener('click', clearAI, false);
elem_select.addEventListener('click', clearAI, false);
elem_option.addEventListener('click', clearAI, false);