import fetch from './fetch'

export function formDataFmt (data) {
  const formData = new FormData()
  Object.keys(data).forEach(item => {
    formData.append(item, data[item])
  })
  return formData
}

export function fetchFormData (url, params) {
  return fetch({
    url,
    method: 'post',
    data: formDataFmt(params),
    headers: { 'content-type': 'multipart/form-data' }
  })
}
