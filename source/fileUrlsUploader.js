const axios = require('axios');
var path = require('path');
var fs = require('fs');
// let appUrl = "http://localhost:8080/"
let appUrl = "https://cityfinance.in/"

let fileTypes = {
    "docx": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "xlsx": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "pdf": "application/pdf",
    "svg": "image/svg+xml"
}

let uploadedFiles = {}

async function dataStructMaker(folderName, fromFolder, fileType) {
    let filePath = path.join(process.cwd(), fromFolder)
    let s3Url = `${appUrl}api/v1/getS3url`
    var files = fs.readdirSync(filePath);
    let fileurls = []
    try {
        for (let file of files) {
            console.log("file ::: ", file)
            //   axios(config)
            //   .then(function (response) {
            //     console.log("=response ::",JSON.stringify(response.data));
            //   })

            let payload_arr = []
            let payload = {}
            let file_name = file.replace("&", "_")
            // file_name =  "abc.pdf"
            let ext = file.split(".")[1]
            let choosenFileType = fileTypes[ext]
            //let UA_CODE = file.split("$")[0]
            let designYear = "2022-23"
            // let file_name  =file.replace("$","_")
            payload["folder"] = folderName
            payload["file_name"] = file_name
            payload["mime_type"] = choosenFileType
            payload['strictName'] = "true"
            payload_arr.push(payload)
            // let request = axios.post(s3Url,payload_arr)
            // let S3response = await request

            let S3response = await axios.post(s3Url, payload_arr)
            // console.log("S3response :: ",S3response)
            let requestUrl = S3response.data.data[0].url
            // console.log("requesturl ::::::::::: ",requestUrl)
            let fileUrl = S3response.data.data[0].file_url
            // console.log("fileUrl ::::::::::::::",fileUrl)
            let pdffilePath = path.join(filePath, file)
            let pdfFile = await fs.readFileSync(pdffilePath)
            let headers = {
                headers: {
                    'Content-Type': choosenFileType
                }
            }
            let putS3 = await axios.put(requestUrl, pdfFile, headers)
            uploadedFiles[file_name] = fileUrl
            fileurls.push(fileUrl)
            // await updateToSideMenu(file,fileUrl)
            // let uaDetails = await getUaId(UA_CODE)
            // let dbFileName =  `${uaDetails.name}_Project Details_MoU_2021-22.pdf`
            // console.log("dbFileName :: ",dbFileName)
            // let payLoadForDatabase = {
            //     "name":dbFileName,
            //     "url":fileUrl,
            //     "Year":designYear,
            //     "UA":uaDetails._id
            // }
            // await createUAlist(payLoadForDatabase)
            // console.log("uaId  completed::: ",uaDetails._id)
        }
        console.log(uploadedFiles)
    }
    catch (err) {
        console.log("error in dataStructMaker ::: ", err.message)
    }
}
async function createUAlist(payload) {
    try {
        let uaUrl = `${appUrl}api/v1/UA/addUAfile`
        let response = await axios.post(uaUrl, payload)
        console.log(response)
        console.log(response.data.message)
    }
    catch (err) {
        console.log("error in creatingUaList", err.message)
    }
}
async function getUaId(uaCode) {
    let uAUrl = `${appUrl}api/v1/UA/getUA/${uaCode}`
    try {
        let response = await axios.get(uAUrl)
        return response.data.ua
    }
    catch (err) {
        console.log("error in getUaId :: ", err.message)
    }
}

async function updateToSideMenu(name, url) {
    let sideMenuUrl = `${appUrl}api/v1/UA/menu`
    let fileName = name.split(".")[0]
    let body = {
        "name": name,
        "url": url
    }
    try {
        let response = await axios.put(uAUrl)
        console.log(response.data)
        return response.data
    }
    catch (err) {

    }

}
//dataStructMaker("CityDashboard/MoU","MoUs","application/pdf")

dataStructMaker("files/svg", "sample", "")