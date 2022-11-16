
let doctors  = [{

    id: 1,
    Name : "kamaal ismail",
    Title : "indhaha",
    shift : "Morning",
}]

const getAllDoctors = (req,res,next)=>{

    res.json({
       status : "success",
        doctors,
    });
};

// sxp halkan ila Hub error ayaa jira
const createDoctor = (req,res, next)=> {

    const {Name,Title,shift} = req.body;
const findDoctor = doctors.find((doctors)=> doctors.id === Number(id));
if (findDoctor?.id){

    if(!Name || !Title || !shift){

        res.status(403).json({
            status: 'error',
            message : 'please provide body date',
        });
    }else{

        findDoctor.Name = Name;
        findDoctor.Title = Title;
        findDoctor.shift = shift;

        res.jsom({
            status: 'success',
            message: 'Update sucessfully',
            findDoctor,
        });
    }
}
}

module.exports = {
getAllDoctors
}