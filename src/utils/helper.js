export const labelValuePairedArrayObject = (data,key) => {
    return data.map(item=>{
        console.log('item: ', item);
        return {label:item[[key]],value:item[[key]]}  })
}