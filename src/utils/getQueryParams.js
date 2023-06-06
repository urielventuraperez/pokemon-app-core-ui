export const getQueryParamFromUrl = (url) => {
  if (url) {
    const urlParams = new URL(url)
    const queryParams = urlParams.searchParams
    return queryParams.get("offset")
  }
  return null
}

export const getLastSlashFromUrl = (url) => {
  const splitUrl = url.split("/")
  // 2 because pokemon id is the second-last element
  return Number(splitUrl[splitUrl.length - 2])
}
