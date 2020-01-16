const trimString = (value, size = 40) => {
    if(value){
        value = value.length > size ? value.substring(0, size)+ '...' : value
    }
    return value;
}

export {trimString}