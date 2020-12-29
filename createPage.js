class Page{
    constructor(CSSArray, HTMLarray){
        this.page = '';
        this.CSSArray = CSSArray;/*[
                            ['.margin', 
                                ['margin: 0px;', 'background-color: black;', 'color: blue;', 'width: 100%;']
                            ], 
                            ['.size', 
                                ['height: 60px;', 'width: 100%;', 'border: 1px solid red;']
                            ], 
                            ['.fixed-top', 
                                ['position: fixed;','top: 0;','left: 0;', 'width: 100%;', 'background-color: white;']
                            ], 
                            ['.margint-60', 
                                ['margin-top: 90px;', 'padding: 0px 30px;' , 'background-color: gray;']
                            ]
                        ];*/
        this.arrayPage = HTMLarray;/*['body', 
                            ['margin'], 
                                [
                                    ['header', 
                                    ['size', 'fixed-top'], 
                                    [
                                        ['div', 
                                            ['size'], 
                                            [], 
                                            ['divdivdiv']
                                        ]
                                    ], 
                                    ['123']
                                ], 
                                ['main', 
                                    ['colorblack', 'margint-60'], 
                                    [], 
                                    ['Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos ipsam odio iste quam numquam tempore corporis nisi. Tempore assumenda delectus ipsum quis, maiores voluptatem. Molestias maiores totam laboriosam repellat laborum! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos ipsam odio iste quam numquam tempore corporis nisi. Tempore assumenda delectus ipsum quis, maiores voluptatem. Molestias maiores totam laboriosam repellat laborum!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos ipsam odio iste quam numquam tempore corporis nisi. Tempore assumenda delectus ipsum quis, maiores voluptatem. Molestias maiores totam laboriosam repellat laborum!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos ipsam odio iste quam numquam tempore corporis nisi. Tempore assumenda delectus ipsum quis, maiores voluptatem. Molestias maiores totam laboriosam repellat laborum!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos ipsam odio iste quam numquam tempore corporis nisi. Tempore assumenda delectus ipsum quis, maiores voluptatem. Molestias maiores totam laboriosam repellat laborum!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos ipsam odio iste quam numquam tempore corporis nisi. Tempore assumenda delectus ipsum quis, maiores voluptatem. Molestias maiores totam laboriosam repellat laborum!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos ipsam odio iste quam numquam tempore corporis nisi. Tempore assumenda delectus ipsum quis, maiores voluptatem. Molestias maiores totam laboriosam repellat laborum!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos ipsam odio iste quam numquam tempore corporis nisi. Tempore assumenda delectus ipsum quis, maiores voluptatem. Molestias maiores totam laboriosam repellat laborum!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos ipsam odio iste quam numquam tempore corporis nisi. Tempore assumenda delectus ipsum quis, maiores voluptatem. Molestias maiores totam laboriosam repellat laborum!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos ipsam odio iste quam numquam tempore corporis nisi. Tempore assumenda delectus ipsum quis, maiores voluptatem. Molestias maiores totam laboriosam repellat laborum!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos ipsam odio iste quam numquam tempore corporis nisi. Tempore assumenda delectus ipsum quis, maiores voluptatem. Molestias maiores totam laboriosam repellat laborum!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos ipsam odio iste quam numquam tempore corporis nisi. Tempore assumenda delectus ipsum quis, maiores voluptatem. Molestias maiores totam laboriosam repellat laborum!']
                                ], 
                                ['footer', 
                                    ['size'], 
                                    [], 
                                    ['321']
                                ]
                            ], 
                            ['']
                         ];*/
        this.nameOfPage = 'ConstrUUUUUck';
        this.page = this.constructPage();
    }
    takePage(){
        return this.page;
    }
    constructPage(){
        return '<!DOCTYPE html> \n' +
               '<html lang="en"> \n' +
               '     <head> \n' +
               '         <meta charset="UTF-8"> \n' +
               '         <meta name="viewport" content="width=device-width, initial-scale=1.0"> \n' +
               '         <link rel="stylesheet" href="style.css"> \n' +
               '            <title> \n' +
               `                ${this.nameOfPage}` + ' \n' +
               '            </title>  \n' +
               '        ' + '<style>' + this.generateCSS(this.CSSArray) + '</style>' +'\n' +
               '     </head>  \n' +
               '    ' + this.generateHTMLTree(this.arrayPage) + ' \n' +
               '</html>';
    }
    generateCSS(array){
        let stringCSS = '';
        for (let i = 0; i < array.length; i++) {
            stringCSS += array[i][0] + '{\n' + array[i][1].join('\n') + '}\n';
        }
        while(stringCSS.includes(',')){
            stringCSS = stringCSS.replace(',', '\n');
        }
        console.log(stringCSS);
        return stringCSS;
    }
    generateHTMLTree(array){
        if(array.length != 0){
            var start_page = `<${array[0]} class='${array[1].join(' ')}'>${array[3]}`;
            var end_page   = `</${array[0]}>`;
            var mid_page = '';
            for(var i = 0; i < array[2].length; i++){
                mid_page += this.generateHTMLTree(array[2][i]);
            }
            return '\n ' + start_page + '\n' + mid_page + '\n' + end_page + '\n';
        } else {
            return '';
        }
    }
}

function generateHTMLTree(array){
    console.log('generateHTMLTree');
    if(array.lenght != 0){
        console.log('if')
        var start_page = `<${array[0]} class='${array[1].join(' ')}'> ${array[3]}`;
        var end_page   = `</${array[0]}>`;
        var mid_page = `${array[3]}`;
        for(var i = 0; i < array[2].length; i++){
            mid_page = mid_page + generateHTMLTree(array[2][i]);
        }
        return start_page + mid_page + end_page;
    } else {
        return '';
    }
}
//CSS [.NAME_CLASS/TAG_NAME, [STYLEs: OF_ELEMENT, MORE: STYLEs]]
//ELEMENT [NAME_OF_ELEMENT, [classes], [ELEMENTS_IN_PARENT_ELEMENT], [TEXT_IN_ELEMENT]]


let pPage = ['body', ['margin'], [['header', ['height'], [], ['123']], ['main', ['colorblack'], [], []], ['footer', ['height'], [], ['321']]], ['']]


class Element{
    constructor(tagName, classList){
        this.tagName = tagName;
        this.classList = classList;
    }
}

class CSSClasses{
    constructor(){
        this.nameOfClasses = []
    }
    addClass(CSSClass){
        this.nameOfClasses.push(CSSClass);
    }
    takeClasses(){
        return this.nameOfClasses;
    }
}

class CSSClass{
    constructor(name){
        this.nameOfCSSClass = name;
        this.arrayOfStyles = []
    }
    addStyle(style){
        this.arrayOfStyles.push(style);
    }
    takeCSSClass(){
        if(this.nameOfCSSClass !== '' || this.nameOfCSSClass !== undefined){
            return  `.${this.nameOfCSSClass}{\n${this.arrayOfStyles.join('\n')}\n}`;
        }
        else{
            alert('Название класса не задано');
        }
    }
}

var array_page = ['body', ['margin-to-0'], [], ['']];
var array_css = [
                    ['.margin-to-0', 
                        ['margin: 0px;', 'width: 100vw;', 'height: 100vh;']
                    ],
                ];

function takeTreeMain1(elem, tab){
    console.log(tab + ' ' + elem.children[0].innerText);
    if(elem.children.length >= 1){
        for(let i = 1; i < elem.children.length; i ++){
            takeTreeMain(elem.children[i].children[0], tab + 1);
        }
    }
}

function checkForMain(elem){
    if(elem == 'main'){
        return 'div';
    } else{ 
        return elem;
    }
}

function takeTree(elem){
    try{
        let styles = JSON.parse(elem.children[0].getAttribute('data-style'));
        let arrayHTML = [elem.children[0].innerText, [styles.nameOfStyle], [], [styles.Text]];
        
        let array_css_json = parseStyles(styles.nameOfStyle);
        if(array_css_json == []){}
        if(array_css_json != []){
            array_css.push([`.${styles.nameOfStyle}`, [
                array_css_json
            ]]);
        }

        console.log(elem.children[0].innerText);
        if(elem.children.length >= 1){
            for(let i = 1; i < elem.children.length; i ++){
                arrayHTML[2].push(takeTree(elem.children[i].children[0]));
            }
        }
        return arrayHTML;
    } catch (e){
        return [];
    }
}

var array_css_page = [];

function parseStyles(stylesName){
    a = [];
    if(!array_css_page.includes(stylesName)){
        console.log('works')
        array_css_page.push(stylesName);
        let styles = ObjOfStyles[stylesName];
        if(styles.width != '0px'){
            a.push(`width: ${styles.width};`);
        }
        if(styles.height != '0px'){
            a.push(`height: ${styles.height};`);
        }
        if(styles.fontSize != '0px'){
            a.push(`font-size: ${styles.fontSize};`);
        }
        if(styles.borderTopWidth != '0px'){
            a.push(`border-top: ${styles.borderTopWidth} solid ${styles.borderTopColor};`);
        }
        if(styles.borderLeftWidth != '0px'){
            a.push(`border-left: ${styles.borderLeftWidth} solid ${styles.borderLeftColor};`);
        }
        if(styles.borderRightWidth != '0px'){
            a.push(`border-right: ${styles.borderRightWidth} solid ${styles.borderRightColor};`);
        }
        if(styles.borderBottomWidth != '0px'){
            a.push(`border-Bottom: ${styles.borderBottomWidth} solid ${styles.borderBottomColor};`);
        }
        if(styles.borderTopWidth == '0px' & styles.borderLeftWidth == '0px' & styles.borderRightWidth == '0px' & styles.borderBottomWidth == '0px'){
            a.push('border: none;');
        }
        if(styles.borderTopLeftRadius != '0px'){
            a.push(`border-top-left-radius: ${styles.borderTopLeftRadius};`);
        }
        if(styles.borderTopRightRadius != '0px'){
            a.push(`border-top-right-radius: ${styles.borderTopRightRadius};`);
        }
        if(styles.borderBottomLeftRadius != '0px'){
            a.push(`border-bottom-left-radius: ${styles.borderBottomLeftRadius};`);
        }
        if(styles.borderBottomRightRadius != '0px'){
            a.push(`border-bottom-right-radius: ${styles.borderBottomRightRadius};`);
        }
        if(styles.paddingTop != '0px'){
            a.push(`padding-top: ${styles.paddingTop};`);
        }
        if(styles.paddingLeft != '0px'){
            a.push(`padding-left: ${styles.paddingLeft};`);
        }
        if(styles.paddingRight != '0px'){
            a.push(`padding-right: ${styles.paddingRight};`);
        }
        if(styles.paddingBottom != '0px'){
            a.push(`padding-bottom: ${styles.paddingBottom};`);
        }
        if(styles.marginTop != '0px'){
            a.push(`margin-top: ${styles.marginTop};`);
        }
        if(styles.marginLeft != '0px'){
            a.push(`margin-left: ${styles.marginLeft};`);
        }
        if(styles.marginRigth != '0px'){
            a.push(`margin-right: ${styles.marginRigth};`);
        }
        if(styles.marginBottom != '0px'){
            a.push(`margin-bottom: ${styles.marginBottom};`);
        }
        a.push(`color: ${styles.color};`);
        if(styles.textAlign != ''){
            a.push(`text-align: ${styles.textAlign};`);
        }
        if(styles.Overflow != 'no'){
            a.push(`overflow-${styles.Overflow}: auto;`);
        }
        if(styles.fontWeight != ''){
            a.push(`font-weight: ${styles.fontWeight};`);
        }
        a.push(`background-color: ${styles.backgroundColor};`);
        /*a.push(`border-top-color: ${styles.borderTopColor};`);
        a.push(`border-left-color: ${styles.borderLeftColor};`);
        a.push(`border-right-color: ${styles.borderRightColor};`);
        a.push(`border-bottom-color: ${styles.borderBottomColor};`);*/
        if(styles.display != ''){
            a.push(`display: ${styles.display};`);
            if(styles.justifyContent != ''){
                a.push(`justify-content: ${styles.justifyContent};`);
            }
            if(styles.alignItems != ''){
                a.push(`align-items: ${styles.alignItems};`);
            }
            if(styles.flexDirection != ''){
                a.push(`flex-direction: ${styles.flexDirection};`);
            }
        }
        if(styles.textDecoration != ''){
            a.push(`text-decoration: ${styles.textDecoration}`);
        }
        if(styles.fontFamily != ''){
            a.push(`font-family: ${styles.fontFamily};`);
        }
        if(styles.xColor != '' || styles.yColor != '' || styles.blurColor != ''){
            a.push(`box-shadow: ${styles.xColor}px ${styles.yColor}px ${checkForEmpty(styles.blurColor)} ${styles.boxShadowColor};`)
        }
    }
    return a;
}

function checkForEmpty(elem){
    if(elem == ''){
        return '0px';
    } else {
        return elem + 'px'
    }
}


function create_createElementMY(){
    array_css_page = [];
    array_page = ['body', ['margin-to-0'], [], ['']];
    array_css = [
                    ['.margin-to-0', 
                        ['margin: 0px;', 'width: 100vw;', 'height: 100vh;']
                    ],
                ];
    array_page[2].push(takeTree(document.getElementById('pageTree').children[0])); 
    array_page[2].push(takeTree(document.getElementById('pageTree').children[1]));
    array_page[2].push(takeTree(document.getElementById('pageTree').children[2]));
    console.log(array_page);
    console.log(array_page[2]);
    let page = new Page(array_css, array_page);
    //page.arrayPage = array_page;
    //page.CSSArray = array_css;
    page = page.takePage();

    var iframe = document.getElementById("iframe");
    var elmnt = iframe.contentWindow.document;
    iframe.contentWindow.document.open();
    iframe.contentWindow.document.write(page);
    iframe.contentWindow.document.close();
}
