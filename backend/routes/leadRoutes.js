const express = require("express");


const router = express.Router();


const {

createLead,

getLeads,

getSingleLead,

updateLead,

deleteLead

}=require("../controllers/leadController");



// Routes


router.post("/", createLead);


router.get("/", getLeads);


router.put("/:id", updateLead);


router.delete("/:id", deleteLead);


router.get("/:id", getSingleLead);



module.exports = router;