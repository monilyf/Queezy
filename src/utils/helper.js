export const labelValuePairedArrayObject = (data,key) => {
    return data.map(item=>{
        return {label:item[[key]],value:item[[key]]}  })
}