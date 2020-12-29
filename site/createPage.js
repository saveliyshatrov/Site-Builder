class Page{
    constructor(){
        this.page = '';
        this.CSSArray = [['.margin', ['margin: 0px;', 'background-color: black;', 'color: blue;', 'width: 100%;']], ['.size', ['height: 60px;', 'width: 100%;', 'border: 1px solid red;']], ['.fixed-top', ['position: fixed;','top: 0;','left: 0;', 'width: 100%;', 'background-color: white;']], ['.margint-60', ['margin-top: 90px;', 'padding: 0px 30px;' , 'background-color: gray;']]];
        this.arrayPage = ['body', ['margin'], [['header', ['size', 'fixed-top'], [['div', ['size'], [], ['divdivdiv']]], ['123']], ['main', ['colorblack', 'margint-60'], [], ['Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos ipsam odio iste quam numquam tempore corporis nisi. Tempore assumenda delectus ipsum quis, maiores voluptatem. Molestias maiores totam laboriosam repellat laborum! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos ipsam odio iste quam numquam tempore corporis nisi. Tempore assumenda delectus ipsum quis, maiores voluptatem. Molestias maiores totam laboriosam repellat laborum!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos ipsam odio iste quam numquam tempore corporis nisi. Tempore assumenda delectus ipsum quis, maiores voluptatem. Molestias maiores totam laboriosam repellat laborum!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos ipsam odio iste quam numquam tempore corporis nisi. Tempore assumenda delectus ipsum quis, maiores voluptatem. Molestias maiores totam laboriosam repellat laborum!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos ipsam odio iste quam numquam tempore corporis nisi. Tempore assumenda delectus ipsum quis, maiores voluptatem. Molestias maiores totam laboriosam repellat laborum!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos ipsam odio iste quam numquam tempore corporis nisi. Tempore assumenda delectus ipsum quis, maiores voluptatem. Molestias maiores totam laboriosam repellat laborum!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos ipsam odio iste quam numquam tempore corporis nisi. Tempore assumenda delectus ipsum quis, maiores voluptatem. Molestias maiores totam laboriosam repellat laborum!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos ipsam odio iste quam numquam tempore corporis nisi. Tempore assumenda delectus ipsum quis, maiores voluptatem. Molestias maiores totam laboriosam repellat laborum!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos ipsam odio iste quam numquam tempore corporis nisi. Tempore assumenda delectus ipsum quis, maiores voluptatem. Molestias maiores totam laboriosam repellat laborum!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos ipsam odio iste quam numquam tempore corporis nisi. Tempore assumenda delectus ipsum quis, maiores voluptatem. Molestias maiores totam laboriosam repellat laborum!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos ipsam odio iste quam numquam tempore corporis nisi. Tempore assumenda delectus ipsum quis, maiores voluptatem. Molestias maiores totam laboriosam repellat laborum!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos ipsam odio iste quam numquam tempore corporis nisi. Tempore assumenda delectus ipsum quis, maiores voluptatem. Molestias maiores totam laboriosam repellat laborum!']], ['footer', ['size'], [], ['321']]], ['']];
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
               '</html>'
    }
    generateCSS(array){
        let stringCSS = '';
        for (let i = 0; i < array.length; i++) {
            stringCSS += array[i][0] + '{\n' + array[i][1].join(' \n') + '}\n';
        }
        return stringCSS;
    }
    generateHTMLTree(array){
        if(array.lenght != 0){
            console.log('if')
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
        this.nameOfClasses.push(CSSClass)
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
            alert('Название класса не задано')
        }
    }
}
