const Lead = require("../models/Lead");


// ADD NEW LEAD

exports.createLead = async(req,res)=>{

    try{

        const lead = await Lead.create(req.body);

        res.status(201).json({
            success:true,
            lead
        });


    }
    catch(error){

        res.status(500).json({
            success:false,
            message:error.message
        });

    }

};



// GET ALL LEADS


exports.getLeads = async(req,res)=>{


    try{

        const leads = await Lead.find();


        res.status(200).json({
            success:true,
            leads
        });


    }

    catch(error){


        res.status(500).json({

            success:false,
            message:error.message

        });

    }


};



// UPDATE LEAD


exports.updateLead = async(req,res)=>{


    try{


        const lead = await Lead.findByIdAndUpdate(

            req.params.id,

            req.body,

            {
                new:true
            }

        );


        res.json({

            success:true,

            lead

        });


    }

    catch(error){


        res.status(500).json({

            success:false,

            message:error.message

        });

    }

};



// DELETE LEAD


exports.deleteLead = async(req,res)=>{


    try{


        await Lead.findByIdAndDelete(req.params.id);


        res.json({

            success:true,

            message:"Lead Deleted"

        });


    }


    catch(error){


        res.status(500).json({

            success:false,

            message:error.message

        });

    }


};

// GET SINGLE LEAD

exports.getSingleLead = async(req,res)=>{

try{


const lead = await Lead.findById(req.params.id);


res.json({

success:true,

lead

});


}

catch(error){

res.status(500).json({

success:false,

message:error.message

});

}

};