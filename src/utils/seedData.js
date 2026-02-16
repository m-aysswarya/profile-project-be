import User from "../models/User.js";
import Profile from "../models/Profile.js";

export const seedData = async () => {
    try {
        const userExists = await User.findOne({ email: "aysswarya2003@gmail.com" });

        if (userExists) {
            console.log("Seed data already exists");
            return;
        }

        // Create User
        const user = await User.create({
            firstName: "Aysswarya",
            lastName: " M",
            email: "aysswarya2003@gmail.com",
            password: "123456"
        });

        // Create Profile linked to User
        await Profile.create({
            user: user._id,
            role: "Fresher / Graduate",
            location: "Mayiladuthurai",
            bio: "Passionate Web Developer focused on building scalable applications.",

            profilePic: "https://ui-avatars.com/api/?name=User&background=random",
            resume: "https://example.com/resume.pdf",

            league: {
                name: "Bronze",
                rank: 30,
                points: 50
            },

            careerVision: {
                title: "Senior Technical Expert",
                currentLevel: "Entry Level Professional",
                growthArea: "Software & Engineering",
                inspiredBy: "Sundar Pichai"
            },

            skills: [
                { name: "JavaScript", level: "Advanced" },
                { name: "React", level: "Advanced" },
                { name: "Node.js", level: "Intermediate" }
            ],

            experiences: [
                {
                    role: "Frontend Intern",
                    companyName: "Tech Solutions",
                    location: "Chennai",
                    startDate: "2023-01-01",
                    endDate: "2023-06-01",
                    currentlyWorking: false,
                    description: "Worked on React-based UI development."
                }
            ],

            education: [
                {
                    institution: "ABC Engineering College",
                    degree: "B.E",
                    fieldOfStudy: "Computer Science",
                    startYear: 2020,
                    endYear: 2024,
                    grade: "8.5 CGPA"
                }
            ],

            certifications: [
                {
                    title: "Full Stack Development",
                    issuer: "Udemy",
                    issueDate: "2023-07-01",
                    credentialId: "CERT123",
                    credentialURL: "https://example.com/certificate"
                }
            ]
        });

        console.log("User & Profile Seeded Successfully");

    } catch (error) {
        console.error(error);
    }
};
