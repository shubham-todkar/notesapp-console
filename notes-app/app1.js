
const notes=require('./notes1.js')
const yargs=require('yargs')

yargs.command({
    command:'add',
    describe: 'Adding a note',
    builder:{
        title:{
            describe:'Add Title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Add Body',
            demandOption:true,
            type:'string'
        }
    },
        handler: function(argv){
             notes.addNotes(argv.title,argv.body)
            
        }
})

yargs.command({
    command:'remove',
    describe:'removing a note',
    builder:{
        title:{
            describe:'add title',
            demandOption:true,
            type:'string'
        }
    },
    handler:function(argv){
        notes.removeNotes(argv.title)        
    }

})

yargs.command({
    command:'list',
    describe:'listing  note',
    handler:function(){
        notes.listNotes()        
    }

})

yargs.command({
    command:'read',
    describe:'reading a note',
    builder:{
        title:{
            describe:'add title',
            demandOption:true,
            type:'string'
        }
    },
    handler:function(argv){
        notes.readNotes(argv.title)        
    }

})

yargs.parse()