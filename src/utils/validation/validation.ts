export type FiledValidatorType = (value:string)=> string | undefined

export const requiredFild:FiledValidatorType = value =>{
    if(value) return undefined
    return "fild is requaired"
}

export const maxLengthCreator = (maxLength:number):FiledValidatorType=> value =>{
    if(value && value.length > maxLength) return `max length was ${maxLength}`;
    return undefined
}