var styles = {
    "nameOfStyle": "",
    "typeOfElement": "None",
    "width": "",
    "height": "",
    "font-size" : "",
    "color": "",
    "background-color": "",
    "border-top-width": "",
    "border-left-width": "",
    "border-right-width": "",
    "border-bottom-width": "",
    "border-top-left-radius": "",
    "border-top-right-radius": "",
    "border-bottom-left-radius": "",
    "border-bottom-right-radius": "",
    "border-top-color": "",
    "border-left-color": "",
    "border-right-color": "",
    "border-bottom-color": "",
    "padding-top": "",
    "padding-left": "",
    "padding-right": "",
    "padding-bottom": "",
    "margin-top": "",
    "margin-left": "",
    "margin-rigth": "",
    "margin-bottom": "",
};

array = []
array.push(JSON.parse(JSON.stringify(styles)));
styles.nameOfStyle = "input";
array.push(JSON.parse(JSON.stringify(styles)));


console.log(array);
