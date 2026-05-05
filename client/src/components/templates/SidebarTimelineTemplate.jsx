import { Mail, Phone, MapPin, Link } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

const SidebarTimelineTemplate = ({ data, accentColor }) => {

    const formatDate = (dateStr) => {
        if (!dateStr) return "";
        const [year, month] = dateStr.split("-");
        return new Date(year, month - 1).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
        });
    };

    const getOppositeColor = (hex) => {
        if (!hex) return "#000000";

        const r = 255 - parseInt(hex.slice(1, 3), 16);
        const g = 255 - parseInt(hex.slice(3, 5), 16);
        const b = 255 - parseInt(hex.slice(5, 7), 16);

        return `rgb(${r}, ${g}, ${b})`;
    };

    return (
        <div className="max-w-6xl mx-auto bg-white shadow-lg grid grid-cols-3">

            {/* LEFT SIDEBAR */}
            <div className="col-span-1 text-white p-6" style={{ backgroundColor: accentColor || "#2f3e46" }}>

                {/* Profile Image */}
                {data.personal_info?.image && (
                    <div className="flex justify-center mb-6">
                        <img
                            src={data.personal_info.image}
                            alt="profile"
                            className="w-32 h-32 rounded-full object-cover border-4 border-white "
                            style={{
                                backgroundColor: getOppositeColor('#1F2937')
                            }}
                        />
                    </div>
                )}

                {/* CONTACT */}
                <div className="mb-6">
                    <h2 className="text-lg font-semibold mb-3 border-b border-gray-300 pb-1">
                        Contact
                    </h2>

                    <div className="space-y-2 text-sm">
                        {data.personal_info?.phone && (
                            <p className="flex items-center gap-2">
                                <Phone className="size-4" /> {data.personal_info.phone}
                            </p>
                        )}
                        {data.personal_info?.email && (
                            <p className="flex items-center gap-2">
                                <Mail className="size-4" /> {data.personal_info.email}
                            </p>
                        )}
                        {data.personal_info?.location && (
                            <p className="flex items-center gap-2">
                                <MapPin className="size-4" /> {data.personal_info.location}
                            </p>
                        )}
                        {data.personal_info?.linkedin && (
                            <p className="flex items-center gap-2">
                                <FaLinkedin className="size-4" /> {data.personal_info.linkedin}
                            </p>
                        )}
                        {data.personal_info?.website && (
                            <p className="flex items-center gap-2">
                                <Link className="size-4" /> {data.personal_info.website}
                            </p>
                        )}
                    </div>
                </div>

                {/* EDUCATION */}
                {data.education?.length > 0 && (
                    <div className="mb-6">
                        <h2 className="text-lg font-semibold mb-3 border-b border-gray-300 pb-1">
                            Education
                        </h2>

                        {data.education.map((edu, i) => (
                            <div key={i} className="mb-3 text-sm">
                                <div className="flex justify-between">
                                    <p className="font-semibold">{edu.degree} - {edu?.gpa ? edu?.gpa + '%' : ''}</p>
                                    <p className="">
                                        {formatDate(edu.graduation_date)}
                                    </p>
                                </div>
                                <p>{edu.institution}</p>
                            </div>
                        ))}
                    </div>
                )}

                {/* SKILLS */}
                {data.skills?.length > 0 && (
                    <div className="mb-6">
                        <h2 className="text-lg font-semibold mb-3 border-b border-gray-300 pb-1">
                            Skills
                        </h2>

                        <ul className="list-disc ml-5 text-sm space-y-1">
                            {data.skills.map((skill, i) => (
                                <li key={i}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* LANGUAGES */}
                {data.languages?.length > 0 && (
                    <div>
                        <h2 className="text-lg font-semibold mb-3 border-b border-gray-300 pb-1">
                            Language
                        </h2>

                        {data.languages.map((lang, i) => (
                            <p key={i} className="text-sm">
                                {lang.name}
                            </p>
                        ))}
                    </div>
                )}

            </div>

            {/* RIGHT CONTENT */}
            <div className="col-span-2 p-8 text-gray-800">

                {/* HEADER */}
                <div className="mb-6">
                    <div className="mb-3">
                        <h1 className="text-3xl font-bold">
                            {data.personal_info?.full_name}
                        </h1>
                        <p className="text-lg text-gray-600">
                            {data.personal_info?.profession}
                        </p>
                    </div>


                    {data.professional_summary && (
                        <div>
                            <h2 className="text-xl font-semibold border-b pb-2 mb-4">
                                Professional Summary
                            </h2>
                            <p className="mt-3 text-sm text-gray-700">
                                {data.professional_summary}
                            </p>
                        </div>
                    )}
                </div>

                {/* EXPERIENCE */}
                {data.experience?.length > 0 && (
                    <div className="mb-8">
                        <h2 className="text-xl font-semibold border-b pb-2 mb-4">
                            Experience
                        </h2>

                        <div className="relative border-l-2 border-gray-300 pl-6">
                            {data.experience.map((exp, i) => (
                                <div key={i} className="mb-6 relative">

                                    {/* DOT */}
                                    <span className="absolute -left-8 top-0 w-4 h-4 bg-white border-2 border-gray-400 rounded-full"></span>

                                    <div className="flex justify-between">
                                        <p className="text-sm text-gray-600">{exp.company}</p>
                                        <p className="text-sm text-gray-500 mb-1">
                                            {formatDate(exp.start_date)} - {exp.is_current ? "Present" : formatDate(exp.end_date)}
                                        </p>

                                    </div>

                                    <h3 className="font-semibold">{exp.position}</h3>

                                    <p className="text-sm text-gray-700 mt-1 whitespace-pre-line">
                                        {exp.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Projects */}
                {data.project && data.project.length > 0 && (
                    <div className="mb-8">
                        <h2 className="text-xl font-semibold border-b pb-2 mb-4">
                            Projects
                        </h2>
                        <div className="space-y-4">
                            {data.project.map((project, index) => (
                                <div key={index}>
                                    <h3 className="font-semibold mt-3">{project.name}</h3>
                                    <p className="text-sm mb-1 text-gray-500" >
                                        {project.type}
                                    </p>
                                    {project.description && (
                                        <ul className="list-disc list-inside text-sm text-zinc-700  space-y-1">
                                            {project.description.split("\n").map((line, i) => (
                                                <li key={i}>{line}</li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* REFERENCES */}
                {data.references?.length > 0 && (
                    <div>
                        <h2 className="text-xl font-semibold border-b pb-2 mb-4">
                            Reference
                        </h2>

                        <div className="grid grid-cols-2 gap-6">
                            {data.references.map((ref, i) => (
                                <div key={i}>
                                    <h3 className="font-semibold">{ref.name}</h3>
                                    <p className="text-sm text-gray-600">{ref.company}</p>

                                    {ref.phone && (
                                        <p className="text-sm">Phone: {ref.phone}</p>
                                    )}
                                    {ref.email && (
                                        <p className="text-sm">Email: {ref.email}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};

export default SidebarTimelineTemplate;