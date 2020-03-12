
const fs= require('fs')
const chalk=require('chalk')
const addNotes=function (title,body){
    const notes=loadnotes()
    notes.push({
        title: title,
        body: body
    })
    console.log(notes)
    saveNotes(notes)
}


const removeNotes=function(title){
 const notes=loadnotes()
 const notestokeep=notes.filter(function(note){
     return note.title!==title
 })
 
 if(notes.length>notestokeep.length){
    saveNotes(notestokeep)
    console.log(chalk.green.bold('Note Removed'))
 
}
else{
    console.log(chalk.red('No note found'))   
}
}

const listNotes=()=>{
    const notes=loadnotes()
    console.log(chalk.blue.inverse('Your notes'))
    notes.forEach(note => {
    console.log(note.title)    
    });

}

const readNotes=(title)=>{
    const notes=loadnotes()
    const read=notes.find((note)=>{
        return note.title===title
    })
    if(read){
        console.log(chalk.green.inverse(read.title))
        console.log(read.body)
    }
    else{
        console.log(chalk.red.inverse('NOt found'))
    }

}
const loadnotes=function(){
    try {
        const datajson=fs.readFileSync('notes.json')
        datajs=datajson.toString()
        return JSON.parse(datajs)
        //console.log(datajs)    
    } catch (error) {
        console.log(error)
        return []
    }
}


const saveNotes= function (notes) {
    const datajson=JSON.stringify(notes)
 fs.writeFileSync('notes.json',datajson)
 }
 

module.exports={
    addNotes:addNotes,
    removeNotes:removeNotes,
    listNotes:listNotes,
    readNotes:readNotes
}