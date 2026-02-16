import mongoose from "mongoose";

const socialSchema = new mongoose.Schema({
    platform: {
        type: String,
        enum: ["LinkedIn", "Instagram", "GitHub", "Twitter"]
    },
    link: String
});

const experienceSchema = new mongoose.Schema({
    role: String,
    companyName: String,
    location: String,
    startDate: Date,
    endDate: Date,
    currentlyWorking: Boolean
})

const educationSchema = new mongoose.Schema({
    college: String,
    degree: String,
    fieldOfStudy: String,
    location: String,
    startDate: Date,
    endDate: Date,
    currentlyStudying: Boolean
})

const CertificationSchema = new mongoose.Schema({
    title: String,
    provider: String,
    certificateUrl: String,
    certificateId: String,
    issuedDate: Date,
    expiryDate: Date,
    description: {
        type: String,
        maxlength: 200
    }
})
const profileSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
            unique: true
        },

        profilePic: String,
        resume: String,

        role: { type: String, default: "Fresher / Graduate" },
        location: String,
        bio: { type: String, maxlength: 500 },


        league: {
            name: {
                type: String,
                enum: ["Bronze", "Silver", "Gold", "Platinum"],
                default: "Bronze"
            },
            rank: { type: Number, default: 0 },
            points: { type: Number, default: 0 }
        },
        careerVision: {
            title: String,
            currentLevel: String,
            growthArea: String,
            inspiredBy: String
        },

        skills: [{ name: String }],

        socials: [socialSchema],
        experiences: [experienceSchema],
        education: [educationSchema],
        certifications: [CertificationSchema]
    },
    { timestamps: true }
);

export default mongoose.model("Profile", profileSchema);