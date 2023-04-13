function capitalize(str){
    let capitalizedstr = str.charAt(0).toLowerCase() === str.charAt(0)?
    str.charAt(0).toUpperCase()+str.slice(1) : str;
    console.log(capitalizedstr)
}
capitalize("afrah")