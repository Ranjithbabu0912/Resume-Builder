import { FilePenLineIcon, LoaderCircle, PencilIcon, PlusIcon, TrashIcon, UploadCloud, UploadCloudIcon, XIcon, FileText } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { dummyResumeData } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import api from '../configs/api'
import toast from 'react-hot-toast'
import pdfToText from 'react-pdftotext'

const Dashboard = () => {

    const { user, token } = useSelector(state => state.auth);

    const colors = ['#8b5cf6', '#f59e0b', '#ef4444', '#0ea5e9', '#10b981', '#ec4899', '#6366f1']

    const [allResumes, setAllResumes] = useState([]);
    const [showCreateResume, setShowCreateResume] = useState(false);
    const [showUploadResume, setShowUploadResume] = useState(false);
    const [title, setTitle] = useState('');
    const [resume, setResume] = useState(null);
    const [editResumeId, setEditResumeId] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const loadAllResumes = async () => {
        try {
            const { data } = await api.get('/api/users/resumes', {
                headers: {
                    Authorization: token
                }
            })
            setAllResumes(data.resumes)
        } catch (error) {
            toast.error(error?.response?.data?.message || error.message)
        }
    }

    const createResume = async (event) => {
        try {
            event.preventDefault()
            const { data } = await api.post('/api/resumes/create', { title }, {
                headers: {
                    Authorization: token
                }
            })
            setAllResumes([...allResumes, data.resume])
            setTitle('')
            setShowCreateResume(false)
            navigate(`/app/builder/${data.resume._id}`)
        } catch (error) {
            toast.error(error?.response?.data?.message || error.message)
        }
    }

    const uploadResume = async (event) => {
        event.preventDefault()
        setIsLoading(true)
        try {
            const resumeText = await pdfToText(resume)
            const { data } = await api.post('/api/ai/upload-resume', { title, resumeText }, {
                headers: {
                    Authorization: token
                }
            })
            setTitle('')
            setResume(null)
            setShowUploadResume(false)
            navigate(`/app/builder/${data.resumeId}`)
        } catch (error) {
            toast.error(error?.response?.data?.message || error.message)
            setIsLoading(false)
        }
    }

    const editTitle = async (event) => {
        try {
            event.preventDefault()
            const { data } = await api.put(`/api/resumes/update`, { resumeId: editResumeId, resumeData: { title } }, {
                headers: {
                    Authorization: token
                }
            })
            setAllResumes(allResumes.map(resume => resume._id === editResumeId ? { ...resume, title } : resume))
            setTitle('')
            setEditResumeId('')
            toast.success(data.message)
        } catch (error) {
            toast.error(error?.response?.data?.message || error.message)
        }
    }

    const deleteResume = async (resumeId) => {
        try {
            const confirm = window.confirm('Are you sure you want to delete this resume?');
            if (confirm) {
                const { data } = await api.delete(`/api/resumes/delete/${resumeId}`, {
                    headers: {
                        Authorization: token
                    }
                })
                setAllResumes(allResumes.filter(resume => resume._id !== resumeId))
                toast.success(data.message)
            }
        } catch (error) {
            toast.error(error?.response?.data?.message || error.message)
        }

    }


    useEffect(() => {
        loadAllResumes()
    }, [])

    return (
        <div className="min-h-[calc(100vh-73px)] py-10 px-4 sm:px-6 lg:px-8">
            <div className='max-w-7xl mx-auto'>
                <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                        <h1 className='text-3xl font-bold bg-linear-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-2'>
                            My Resumes
                        </h1>
                        <p className="text-slate-500">Manage and create your professional resumes</p>
                    </div>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6'>
                    {/* Create New Card */}
                    <button onClick={() => setShowCreateResume(true)} className='group relative h-[280px] flex flex-col items-center justify-center rounded-2xl bg-white border-2 border-dashed border-slate-200 hover:border-blue-500 hover:bg-blue-50/50 transition-all duration-300 cursor-pointer overflow-hidden'>
                        <div className="absolute inset-0 bg-linear-to-br from-blue-500/0 to-indigo-500/0 group-hover:from-blue-500/5 group-hover:to-indigo-500/5 transition-all duration-500"></div>
                        <div className="h-16 w-16 bg-blue-100 group-hover:bg-blue-500 rounded-full flex items-center justify-center mb-4 transition-colors duration-300 shadow-sm group-hover:shadow-blue-500/25">
                            <PlusIcon className='size-8 text-blue-600 group-hover:text-white transition-colors duration-300' />
                        </div>
                        <p className='text-lg font-medium text-slate-700 group-hover:text-blue-700 transition-colors duration-300'>Create Blank</p>
                        <p className='text-sm text-slate-400 mt-1'>Start from scratch</p>
                    </button>

                    {/* Upload Card */}
                    <button onClick={() => setShowUploadResume(true)} className='group relative h-[280px] flex flex-col items-center justify-center rounded-2xl bg-white border-2 border-dashed border-slate-200 hover:border-purple-500 hover:bg-purple-50/50 transition-all duration-300 cursor-pointer overflow-hidden'>
                        <div className="absolute inset-0 bg-linear-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/5 group-hover:to-pink-500/5 transition-all duration-500"></div>
                        <div className="h-16 w-16 bg-purple-100 group-hover:bg-purple-500 rounded-full flex items-center justify-center mb-4 transition-colors duration-300 shadow-sm group-hover:shadow-purple-500/25">
                            <UploadCloudIcon className='size-8 text-purple-600 group-hover:text-white transition-colors duration-300' />
                        </div>
                        <p className='text-lg font-medium text-slate-700 group-hover:text-purple-700 transition-colors duration-300'>Upload PDF</p>
                        <p className='text-sm text-slate-400 mt-1'>Extract with AI</p>
                    </button>

                    {/* Resume Cards */}
                    {allResumes.map((resume, index) => {
                        const baseColor = colors[index % colors.length];

                        return (
                            <div key={index} className='group relative h-[280px] flex flex-col rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer' onClick={() => navigate(`/app/builder/${resume._id}`)}>
                                {/* Colored Header Area */}
                                <div className="h-32 w-full relative" style={{ background: `linear-linear(135deg, ${baseColor}15, ${baseColor}30)` }}>
                                    <div className="absolute top-4 left-4 h-10 w-10 bg-white/80 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-sm">
                                        <FileText className="size-5" style={{ color: baseColor }} />
                                    </div>

                                    {/* Action Buttons (visible on hover) */}
                                    <div onClick={e => e.stopPropagation()} className='absolute top-3 right-3 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200'>
                                        <button onClick={() => { setEditResumeId(resume._id); setTitle(resume.title) }} className='p-2 bg-white/90 hover:bg-white backdrop-blur-sm rounded-md text-slate-600 hover:text-blue-600 transition-colors shadow-sm'>
                                            <PencilIcon className='size-4' />
                                        </button>
                                        <button onClick={() => deleteResume(resume._id)} className='p-2 bg-white/90 hover:bg-white backdrop-blur-sm rounded-md text-slate-600 hover:text-red-600 transition-colors shadow-sm'>
                                            <TrashIcon className='size-4' />
                                        </button>
                                    </div>
                                </div>

                                {/* Content Area */}
                                <div className="p-5 flex-1 flex flex-col">
                                    <h3 className='font-semibold text-slate-800 text-lg line-clamp-2 mb-1 group-hover:text-blue-600 transition-colors'>{resume.title}</h3>
                                    <div className="mt-auto">
                                        <div className="h-px w-full bg-slate-100 mb-3"></div>
                                        <p className='text-[13px] text-slate-500 font-medium flex items-center gap-1.5'>
                                            <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: baseColor }}></span>
                                            Updated {new Date(resume.updatedAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Modals */}
                {showCreateResume && (
                    <div onClick={() => setShowCreateResume(false)} className='fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200'>
                        <form onSubmit={createResume} onClick={e => e.stopPropagation()} className='relative bg-white rounded-2xl w-full max-w-md p-6 shadow-2xl animate-in zoom-in-95 duration-200'>
                            <div className="mb-6">
                                <h2 className='text-2xl font-bold text-slate-800 mb-1'>Create New Resume</h2>
                                <p className="text-slate-500 text-sm">Give your resume a name to get started.</p>
                            </div>

                            <div className="mb-6">
                                <label className="block text-sm font-medium text-slate-700 mb-2">Resume Title</label>
                                <input autoFocus onChange={(e) => setTitle(e.target.value)} value={title} type="text" placeholder="e.g. Alex's Resume" className='w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all' required />
                            </div>

                            <div className="flex gap-3">
                                <button type="button" onClick={() => setShowCreateResume(false)} className='flex-1 py-3 bg-slate-100 text-slate-700 font-medium rounded-xl hover:bg-slate-200 transition-colors'>Cancel</button>
                                <button type="submit" className='flex-1 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 shadow-md shadow-blue-500/20 transition-all'>Create</button>
                            </div>
                            <button type="button" className='absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors' onClick={() => { setShowCreateResume(false); setTitle('') }}>
                                <XIcon className="size-5" />
                            </button>
                        </form>
                    </div>
                )}

                {showUploadResume && (
                    <div onClick={() => setShowUploadResume(false)} className='fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200'>
                        <form onSubmit={uploadResume} onClick={e => e.stopPropagation()} className='relative bg-white rounded-2xl w-full max-w-md p-6 shadow-2xl animate-in zoom-in-95 duration-200'>
                            <div className="mb-6">
                                <h2 className='text-2xl font-bold text-slate-800 mb-1'>Upload PDF Resume</h2>
                                <p className="text-slate-500 text-sm">We'll use AI to extract your information automatically.</p>
                            </div>

                            <div className="mb-5">
                                <label className="block text-sm font-medium text-slate-700 mb-2">Resume Title</label>
                                <input onChange={(e) => setTitle(e.target.value)} value={title} type="text" placeholder="e.g. Alex's Resume" className='w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all' required />
                            </div>

                            <div className='mb-6'>
                                <label className='block text-sm font-medium text-slate-700 mb-2'>Select PDF File</label>
                                <label htmlFor="resume-input" className={`flex flex-col items-center justify-center gap-3 border-2 border-dashed rounded-xl p-8 cursor-pointer transition-all ${resume ? 'border-purple-500 bg-purple-50/50' : 'border-slate-300 hover:border-purple-400 hover:bg-slate-50'}`}>
                                    {resume ? (
                                        <>
                                            <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center mb-1">
                                                <FileText className="size-6 text-purple-600" />
                                            </div>
                                            <p className='text-purple-700 font-medium text-center truncate w-full px-4'>{resume.name}</p>
                                        </>
                                    ) : (
                                        <>
                                            <div className="h-12 w-12 bg-slate-100 rounded-full flex items-center justify-center mb-1">
                                                <UploadCloud className='size-6 text-slate-500' />
                                            </div>
                                            <p className="text-slate-600 font-medium">Click to browse or drag & drop</p>
                                            <p className="text-slate-400 text-xs">PDF documents up to 5MB</p>
                                        </>
                                    )}
                                </label>
                                <input type="file" id='resume-input' accept='application/pdf' hidden onChange={(e) => setResume(e.target.files[0])} />
                            </div>

                            <div className="flex gap-3">
                                <button type="button" onClick={() => setShowUploadResume(false)} className='flex-1 py-3 bg-slate-100 text-slate-700 font-medium rounded-xl hover:bg-slate-200 transition-colors' disabled={isLoading}>Cancel</button>
                                <button type="submit" className='flex-1 py-3 bg-purple-600 text-white font-medium rounded-xl hover:bg-purple-700 shadow-md shadow-purple-500/20 transition-all flex items-center justify-center gap-2' disabled={isLoading || !resume || !title}>
                                    {isLoading && <LoaderCircle className='animate-spin size-5 text-white' />}
                                    {isLoading ? 'Processing...' : 'Upload & Extract'}
                                </button>
                            </div>

                            <button type="button" className='absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors' onClick={() => { setShowUploadResume(false); setTitle(''); setResume(null) }} disabled={isLoading}>
                                <XIcon className="size-5" />
                            </button>
                        </form>
                    </div>
                )}

                {editResumeId && (
                    <div onClick={() => setEditResumeId('')} className='fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200'>
                        <form onSubmit={editTitle} onClick={e => e.stopPropagation()} className='relative bg-white rounded-2xl w-full max-w-md p-6 shadow-2xl animate-in zoom-in-95 duration-200'>
                            <div className="mb-6">
                                <h2 className='text-2xl font-bold text-slate-800 mb-1'>Rename Resume</h2>
                            </div>

                            <div className="mb-6">
                                <label className="block text-sm font-medium text-slate-700 mb-2">New Title</label>
                                <input autoFocus onChange={(e) => setTitle(e.target.value)} value={title} type="text" className='w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all' required />
                            </div>

                            <div className="flex gap-3">
                                <button type="button" onClick={() => setEditResumeId('')} className='flex-1 py-3 bg-slate-100 text-slate-700 font-medium rounded-xl hover:bg-slate-200 transition-colors'>Cancel</button>
                                <button type="submit" className='flex-1 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 shadow-md shadow-blue-500/20 transition-all'>Save Changes</button>
                            </div>
                            <button type="button" className='absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors' onClick={() => { setEditResumeId(''); setTitle('') }}>
                                <XIcon className="size-5" />
                            </button>
                        </form>
                    </div>
                )}

            </div>
        </div>
    )
}

export default Dashboard