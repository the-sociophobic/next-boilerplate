export const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export const camelize = (string) => {
  return string
  .replace(/[^A-Za-z0-9 -]/g, '')
  .split(/ |-/)
  .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
  .reduce((a, b) => a + b)
}

export const dasherize = (string) => {
  return string
  .replace(/[^A-Za-z0-9 -]/g, '')
  .replace(/ /g, '-')
  .toLowerCase()
}

export const clamp = (number, min, max) => {
  return Math.max(min, Math.min(number, max))
}

export const roundAccurate = (number, accurancy) => {
  return Math.round(number / accurancy) * accurancy
}

export const getPlatform = () => {
  if (typeof window == "undefined")
    return "undefined" 
    
  let navigator = window.navigator
  let userAgent = navigator.userAgent || navigator.vendor || window.opera

  if (/windows phone/i.test(userAgent))
    return "Windows Phone"

  if (/android/i.test(userAgent))
    return "Android"

  // iOS detection from: http://stackoverflow.com/a/9039885/177710
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream)
    return "iOS"

  return "Web"
}
