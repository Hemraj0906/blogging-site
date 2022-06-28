const mongoose = require("mongoose")
const isValid = function (value) {
  if (typeof value === 'undefined' || value === null) return false
  if (typeof value === 'string' && value.trim().length === 0) return false
   return true;
}
const isValidTitle = function (title) {
  return ["Mr", "Mrs", "Miss"].indexOf(title) !== -1
}
const isValidRequestBody = function (requestBody) {
  return Object.keys(requestBody).length > 0
}
const isValidObjectId = function (ObjectId) {
  return mongoose.Types.ObjectId.isValid(ObjectId)
}
const isValidTag = function (tags) {
  // return tags.indexOf() !== -1
  if(tags.indexOf() !== -1){
    if(tags.length==0)
    return 
  }
  
}
module.exports = { isValid, isValidTitle, isValidRequestBody, isValidObjectId,isValidTag }
// console.log(isValid(" "))
