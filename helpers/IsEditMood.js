

export const IsEditMoodHelper = (editData) => {

    const isData = editData !== null && Object.keys(editData).length > 0 ? true : false

    return isData

}