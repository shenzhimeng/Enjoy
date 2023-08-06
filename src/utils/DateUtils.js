function getYMDHMS(){
    let d = new Date()
    let dateLog = `${d.getFullYear().toString().padStart(2,'0')}/${(d.getMonth()+1).toString().padStart(2,'0')}/${d.getDate().toString().padStart(2,'0')} ${d.getHours().toString().padStart(2,'0')}:${d.getMinutes().toString().padStart(2,'0')}:${d.getSeconds().toString().padStart(2,'0')}`
    return dateLog  
}

function getHMS(){
    let d = new Date()
    let dateLog = `[${d.getHours().toString().padStart(2,'0')}:${d.getMinutes().toString().padStart(2,'0')}:${d.getSeconds().toString().padStart(2,'0')}]`
    return dateLog  
}

function getHMSWithTimestamp(timestamp){
    let d = new Date(timestamp * 1000)
    let dateLog = `${d.getHours().toString().padStart(2,'0')}:${d.getMinutes().toString().padStart(2,'0')}:${d.getSeconds().toString().padStart(2,'0')}`
    return dateLog  
}
module.exports.getYMDHMS = getYMDHMS
module.exports.getHMS = getHMS
module.exports.getHMSWithTimestamp = getHMSWithTimestamp