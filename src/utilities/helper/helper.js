export const sortByKey = (content, keyName) => {
    return content.sort((a,b) => a[keyName.toString()] > b[keyName.toString()] ? 1 : -1);
}

export const GA_TRACKING_ID = 'G-RPEHTKP9QC'