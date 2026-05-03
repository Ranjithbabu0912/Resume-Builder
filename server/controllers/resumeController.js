import imagekit from "../configs/imageKit.js";
import Resume from "../models/Resume.js";
import fs from 'fs';


//controller for creating new resume
//POST: /api/resumes/create
export const createResume = async (req, res) => {
    try {
        const userId = req.userId;
        const { title } = req.body;
        //create new resume
        const newResume = await Resume.create({ userId, title });
        //return success message
        return res.status(201).json({ message: "Resume Created Successfully", resume: newResume });
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}


//controller for deleting resume
//POST: /api/resumes/delete
export const deleteResume = async (req, res) => {
    try {
        const userId = req.userId;
        const { resumeId } = req.params;

        //delete resume
        await Resume.findOneAndDelete({ userId, _id: resumeId });

        //return success message
        return res.status(200).json({ message: "Resume Deleted Successfully" });
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}


//get user resume by id
//GET: /api/resumes/get
export const getResumeById = async (req, res) => {
    try {
        const userId = req.userId;
        const { resumeId } = req.params;

        //get resume
        const resume = await Resume.findOne({ userId, _id: resumeId });
        if (!resume) {
            return res.status(404).json({ message: "Resume Not Found" });
        }

        resume.__v = undefined;
        resume.createdAt = undefined;
        resume.updatedAt = undefined;

        //return resume
        return res.status(201).json({ resume });

    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}


//get user resume by id public
//GET: /api/resumes/public
export const getPublicResumeById = async (req, res) => {
    try {
        const { resumeId } = req.params;

        //get resume
        const resume = await Resume.findOne({ public: true, _id: resumeId });
        if (!resume) {
            return res.status(404).json({ message: "Resume Not Found" });
        }

        //return public resume
        return res.status(201).json({ resume });

    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}


//controller for updating resume
//POST: /api/resumes/update
export const updateResume = async (req, res) => {
    try {
        const userId = req.userId;
        const { resumeId, resumeData, removeBackground } = req.body;
        const image = req.file;

        let resumeDataCopy;

        if (typeof resumeData === "string") {
            resumeDataCopy = JSON.parse(resumeData);
        } else {
            resumeDataCopy = structuredClone(resumeData)
        }

        //image optimize
        if (image) {
            const imageBufferData = fs.createReadStream(image.path);
            const response = await imagekit.files.upload({
                file: imageBufferData,
                fileName: 'resume.png',
                folder: 'user-resumes',
                transformation: {
                    pre: 'w-300,h-300,fo-face,z-0.50' + (removeBackground ? ',e-bgremove' : '')

                }
            });

            resumeDataCopy.personal_info.image = response.url;
        }

        //update resume
        const resume = await Resume.findOneAndUpdate(
            { userId, _id: resumeId },
            { $set: resumeDataCopy },
            { returnDocument: 'after' }
        );

        //return resume
        return res.status(200).json({ message: "Saved Successfully", resume });

    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}