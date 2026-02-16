import express from "express";
import {
    addCertification,
    addEducation,
    addExperience,
    addSkill,
    addSocials,
    deleteCertification,
    deleteEducation,
    deleteExperience,
    getProfile,
    removeSkill,
    updateCareerVision,
    updateCertification,
    updateEducation,
    updateExperience,
    updateProfile
} from "../controllers/profileController.js";
import upload from "../middleware/upload.js";

const router = express.Router();

router.get("/", getProfile);
router.put("/", upload.fields([
    { name: "profilePic", maxCount: 1 },
    { name: "resume", maxCount: 1 },
]),
    updateProfile);

router.post("/experience", addExperience);
router.delete("/experience/:id", deleteExperience);
router.put("/experience/:id", updateExperience);

router.post("/education", addEducation);
router.put("/education/:id", updateEducation);
router.delete("/education/:id", deleteEducation);

router.post("/certification", addCertification);
router.put("/certification/:certId", updateCertification);
router.delete("/certification/:certId", deleteCertification);

router.post("/social", addSocials);

router.put("/career-vision", updateCareerVision);

router.post("/skills", addSkill);
router.delete("/skills", removeSkill);


export default router;