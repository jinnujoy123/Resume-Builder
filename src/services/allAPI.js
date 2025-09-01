import commonAPI from "./commonAPI"
import BASEURL from './baseUrl'

// addResumeAPI - POST - called by Steps component
export const addResumeAPI=async(resume)=>{
    return await commonAPI("POST",`${BASEURL}/all-resume`,resume)
}

// editResumeAPI-PUT -called by edit component when update button is clicked
export const editResumeAPI=async(id,resume)=>{
    return await commonAPI("PUT",`${BASEURL}/all-resume/${id}`,resume)
}

// addHistoryAPI-POST - called when finish button clicked
export const addDownloadHistoryAPI=async(resume)=>{
    return await commonAPI("POST",`${BASEURL}/history`,resume)
}
// getHistoryAPI-GET : called by history component when its  page open in browser (useEffect)

export const getHistoryAPI=async ()=>{
    return await commonAPI("GET",`${BASEURL}/history`,{})
}

// deleteHistoryAPI-DELETE

export const deleteHistoryAPI=async(id)=>{
    return await commonAPI("DELETE",`${BASEURL}/history/${id}`,{})
}

// getResumeAPI - GET called by edit component when its open in browser (useeffect)

export const getAResumeAPI=async(id)=>{
    return await commonAPI("GET",`${BASEURL}/all-resume/${id}`,{})
}