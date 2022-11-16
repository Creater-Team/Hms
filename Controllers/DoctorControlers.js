
let doctors  = [{

    id: 1,
    Name : "kamaal ismail",
    Title : "indhaha",
    shift : "Morning",
}]

const AllDoctors = (req,res,next)=>{

    res.json({
       status : "success",
        doctors,
    })
}

module.exports = {

AllDoctors,
}