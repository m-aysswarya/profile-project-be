import cloudinary from "../config/cloudinary.js";
import Profile from "../models/Profile.js"
import fs from "fs";

export const getProfile = async (req, res, next) => {
    try {
        const profile = await Profile.findOne().populate("user", "firstName lastName email");;
        res.json(profile);
    } catch (error) {
        next(error);
    }
};

export const updateProfile = async (req, res, next) => {
    try {
        const profile = await Profile.findOne();
        if (!profile) {
            return res.status(404).json({ message: "Profile not found" });
        }

        // Update text fields
        profile.firstName = req.body.firstName || profile.firstName;
        profile.lastName = req.body.lastName || profile.lastName;
        profile.location = req.body.location || profile.location;
        profile.bio = req.body.bio || profile.bio;

        // Upload profile image
        if (req.files?.profilePic) {
            const result = await cloudinary.uploader.upload(
                req.files.profilePic[0].path,
                { folder: "profiles" }
            );

            profile.profilePic = result.secure_url;

            fs.unlinkSync(req.files.profilePic[0].path); // delete local file
        }

        // Upload resume PDF
        if (req.files?.resume) {
            const result = await cloudinary.uploader.upload(
                req.files.resume[0].path,
                {
                    folder: "resumes",
                    resource_type: "image", // important for pdf
                }
            );

            profile.resume = result.secure_url;

            fs.unlinkSync(req.files.resume[0].path);
        }

        await profile.save();

        res.json({
            success: true,
            data: profile,
        });
    } catch (error) {
        next(error);
    }
}

export const updateCareerVision = async (req, res, next) => {
    try {
        const {
            role,
            title,
            growthArea,
            inspiredBy,
            currentLevel
        } = req.body;

        const profile = await Profile.findOne();

        if (!profile) {
            return res.status(404).json({ message: "Profile not found" });
        }

        profile.role = role;
        profile.careerVision = {
            title,
            growthArea,
            inspiredBy,
            currentLevel
        };

        await profile.save();

        res.status(200).json({
            success: true,
            data: profile
        });

    } catch (error) {
        next(error);
    }
};

export const addSkill = async (req, res, next) => {
    try {
        const { name } = req.body;

        const updated = await Profile.findOneAndUpdate(
            {},
            { $addToSet: { skills: { name } } },
            { new: true, runValidators: true }
        );

        res.status(201).json(updated.skills);
    } catch (error) {
        next(error);
    }
};

export const removeSkill = async (req, res, next) => {
    try {
        const { name } = req.body;

        const updated = await Profile.findOneAndUpdate(
            {},
            { $pull: { skills: { name } } },
            { new: true }
        );

        res.status(200).json(updated.skills);
    } catch (error) {
        next(error);
    }
};

export const addExperience = async (req, res, next) => {
    try {
        const updated = await Profile.findOneAndUpdate(
            {},
            { $push: { experiences: req.body } },
            { new: true, runValidators: true }
        );

        res.status(201).json(updated.experiences);
    } catch (error) {
        next(error);
    }
}

export const updateExperience = async (req, res, next) => {
    try {
        const { id } = req.params;

        const updated = await Profile.findOneAndUpdate(
            { "experiences._id": id },
            {
                $set: {
                    "experiences.$": req.body
                }
            },
            { new: true, runValidators: true }
        );

        res.json(updated.experiences);
    } catch (error) {
        next(error);
    }
};

export const deleteExperience = async (req, res, next) => {
    try {
        const updated = await Profile.findOneAndUpdate(
            {},
            { $pull: { experiences: { _id: req.params.id } } },
            { new: true }
        );

        res.json(updated.experiences);
    } catch (error) {
        next(error);
    }
}

export const addEducation = async (req, res, next) => {
    try {
        const updated = await Profile.findOneAndUpdate(
            {},
            { $push: { education: req.body } },
            { new: true, runValidators: true }
        );

        res.status(201).json(updated.education);
    } catch (error) {
        next(error);
    }
}
export const updateEducation = async (req, res, next) => {
    try {
        const { id } = req.params;

        const updated = await Profile.findOneAndUpdate(
            { "education._id": id },
            { $set: { "education.$": req.body } },
            { new: true, runValidators: true }
        );

        res.json(updated.education);
    } catch (error) {
        next(error);
    }
};
export const deleteEducation = async (req, res, next) => {
    try {
        const updated = await Profile.findOneAndUpdate(
            {},
            { $pull: { education: { _id: req.params.id } } },
            { new: true }
        );

        res.json(updated.education);
    } catch (error) {
        next(error);
    }
};

export const addCertification = async (req, res, next) => {
    try {
        const updated = await Profile.findOneAndUpdate(
            {},
            { $push: { certifications: req.body } },
            { new: true, runValidators: true }
        );
        res.status(201).json(updated.certifications);
    } catch (error) {
        next(error);
    }
};
export const updateCertification = async (req, res, next) => {
    try {
        const { certId } = req.params; // make sure your route uses :certId
        const profile = await Profile.findOne();
        const cert = profile.certifications.id(certId);
        if (!cert) return res.status(404).json({ message: "Certification not found" });

        Object.assign(cert, req.body);
        await profile.save();

        res.json(profile.certifications);
    } catch (error) {
        next(error);
    }
};
export const deleteCertification = async (req, res, next) => {
    try {
        const { certId } = req.params; // make sure your route uses :certId
        const profile = await Profile.findOne();

        profile.certifications.pull(certId);
        await profile.save();

        res.json(profile.certifications);
    } catch (error) {
        next(error);
    }
};


export const addSocials = async (req, res, next) => {
    try {
        const updated = await Profile.findOneAndUpdate(
            {},
            { $push: { socials: req.body } },
            { new: true, runValidators: true }
        );

        res.status(201).json(updated.socials);
    } catch (error) {
        next(error);
    }
}