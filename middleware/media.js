const form =  require("formidable")
const media =   require("mediaserver")
const fs =  require("fs")



module.exports = { 
    change_photo: function(req){
        let f = new form.IncomingForm()
        f.parse(req,(err,fields,files)=>{
            if(err) throw err;
            var path =  p.join(__dirname ,'/pictures/',files.profile_photo.name)
            const readStream = fs.createReadStream(files.profile_photo.path)
           const writeStream =  fs.createWriteStream(path)
           readStream.pipe(writeStream)
        })
       return path;
    }
}