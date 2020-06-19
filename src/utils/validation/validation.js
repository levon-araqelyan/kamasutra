export const requiredFild = value =>{
    if(value) return undefined
    return "fild is requaired"
}

export const maxLengthCreator = (maxLength)=> value =>{
    if(value && value.length > maxLength) return `max length was ${maxLength}`;
    return undefined
}