const axios = require('axios')

module.exports.UploadUlbs = async (req, res, next) => {
    try {
        let apiUrl = "https://cityfinance.in"
        let env = "demo"
        //token shoulb be of MoHUA.
        const config = {
            headers: {
                "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiMTVmYyIsImVtYWlsIjoiMTVmY2dyYW50QGNpdHlmaW5hbmNlLmluIiwicm9sZSI6Ik1vSFVBIiwiaXNBY3RpdmUiOnRydWUsImlzUmVnaXN0ZXJlZCI6ZmFsc2UsIl9pZCI6IjVmZWViNDg2NmQwZDVlMzc2NTI4NGIwYyIsInB1cnBvc2UiOiJXRUIiLCJsaF9pZCI6IjY0Y2NmZDM2OWMzMTU1NGFjODFjNjNjMiIsInNlc3Npb25JZCI6IjY0Y2NmZDJlOWMzMTU1NGFjODFjNjNiZiIsInBhc3N3b3JkRXhwaXJlcyI6MTYxNzI1NTMzNjM0MCwicGFzc3dvcmRIaXN0b3J5IjpbIiQyYSQxMCQzam1qaTh4clF0MjR5UmpVYlNkV2ZPQWRlY05HZHB2VE9TNHdtS1VGZWxuVEZSSzhXNVRpSyJdLCJpYXQiOjE2OTExNTU3NjYsImV4cCI6MTY5MTE5MTc2Nn0.9JsSeAqDQ29KSOHZEMg3XKemyCg3DEMZtNHM2zWdJ8M"
            }
        }

        let data = [
            {
                "name": "Padli Gurjar",
                "type": "Town Panchayat",
                "area": 7.68,
                "wards": 11,
                "population": 21468,
                "lat": 29.5057,
                "lng": 77.5045,
                "state": "Uttarakhand",
                "natureOfUlb": "Nagar Panchayat",
                "amrut": "",
                "censusCode": "",
                "sbCode": 980155,
                "isMillionPlus": "No",
                "UA": "",
                "access_2223": true,
                "access_2425": false,
                "access_2324": false,
                "access_2122": false,
                "access_2021": false,
                "code": "UK104",
                "population_old": 0
            },
            {
                "name": "Tapovan",
                "type": "Town Panchayat",
                "area": 0.97,
                "wards": 4,
                "population": 3890,
                "lat": 30.1281901,
                "lng": 78.32174586,
                "state": "Uttarakhand",
                "natureOfUlb": "Nagar Panchayat",
                "amrut": "",
                "censusCode": "",
                "sbCode": 980156,
                "isMillionPlus": "No",
                "isUA": "",
                "UA": "",
                "access_2223": true,
                "access_2425": false,
                "access_2324": false,
                "access_2122": false,
                "access_2021": false,
                "code": "UK105",
                "population_old": 0
            },
            {
                "name": "Dhandhera",
                "type": "Town Panchayat",
                "area": 354,
                "wards": 11,
                "population": 23257,
                "lat": 29.480086,
                "lng": 77.901124,
                "state": "Uttarakhand",
                "natureOfUlb": "Nagar Panchayat",
                "amrut": "",
                "censusCode": "",
                "sbCode": 980157,
                "isMillionPlus": "No",
                "isUA": "",
                "UA": "",
                "access_2223": true,
                "access_2425": false,
                "access_2324": false,
                "access_2122": false,
                "access_2021": false,
                "code": "UK106",
                "population_old": 0
            },
            {
                "name": "Lalpur",
                "type": "Town Panchayat",
                "area": 2.12,
                "wards": 4,
                "population": 3975,
                "lat": "",
                "lng": "",
                "state": "Uttarakhand",
                "natureOfUlb": "Nagar Panchayat",
                "amrut": "",
                "censusCode": "",
                "sbCode": 980158,
                "isMillionPlus": "No",
                "isUA": "",
                "UA": "",
                "access_2223": true,
                "access_2425": false,
                "access_2324": false,
                "access_2122": false,
                "access_2021": false,
                "code": "UK107",
                "population_old": 0
            },
            {
                "name": "Garur",
                "type": "Town Panchayat",
                "area": 2.45,
                "wards": 7,
                "population": 5002,
                "lat": 29.8971,
                "lng": 79.6084,
                "state": "Uttarakhand",
                "natureOfUlb": "Nagar Panchayat",
                "amrut": "",
                "censusCode": "",
                "sbCode": 980159,
                "isMillionPlus": "No",
                "isUA": "",
                "UA": "",
                "access_2223": true,
                "access_2425": false,
                "access_2324": false,
                "access_2122": false,
                "access_2021": false,
                "code": "UK108",
                "population_old": 0
            },
            {
                "name": "Imlikhera",
                "type": "Town Panchayat",
                "area": 15.91,
                "wards": 9,
                "population": 10236,
                "lat": 29.933818,
                "lng": 77.889068,
                "state": "Uttarakhand",
                "natureOfUlb": "Nagar Panchayat",
                "amrut": "",
                "censusCode": "",
                "sbCode": 980160,
                "isMillionPlus": "No",
                "isUA": "",
                "UA": "",
                "access_2223": true,
                "access_2425": false,
                "access_2324": false,
                "access_2122": false,
                "access_2021": false,
                "code": "UK109",
                "population_old": 0
            },
            {
                "name": "Sultanpur Adampur",
                "type": "Town Panchayat",
                "area": 2.43,
                "wards": 9,
                "population": 16047,
                "lat": 29.755816,
                "lng": 78.108762,
                "state": "Uttarakhand",
                "natureOfUlb": "Nagar Panchayat",
                "amrut": "",
                "censusCode": "",
                "sbCode": 980161,
                "isMillionPlus": "No",
                "isUA": "",
                "UA": "",
                "access_2223": true,
                "access_2425": false,
                "access_2324": false,
                "access_2122": false,
                "access_2021": false,
                "code": "UK110",
                "population_old": 0
            },
            {
                "name": "Rampur",
                "type": "Town Panchayat",
                "area": 4,
                "wards": 11,
                "population": 27364,
                "lat": 29.531,
                "lng": 77.5237,
                "state": "Uttarakhand",
                "natureOfUlb": "Nagar Panchayat",
                "amrut": "",
                "censusCode": "",
                "sbCode": 980162,
                "isMillionPlus": "No",
                "isUA": "",
                "UA": "",
                "access_2223": true,
                "access_2425": false,
                "access_2324": false,
                "access_2122": false,
                "access_2021": false,
                "code": "UK111",
                "population_old": 0
            },
            {
                "name": "Nagla",
                "type": "Municipality",
                "area": 44216.93,
                "wards": 20,
                "population": 57977,
                "lat": 29.036946,
                "lng": 79.449708,
                "state": "Uttarakhand",
                "natureOfUlb": "Nagar Palika Parishad",
                "amrut": "",
                "censusCode": "",
                "sbCode": 980163,
                "isMillionPlus": "No",
                "isUA": "",
                "UA": "",
                "access_2223": true,
                "access_2425": false,
                "access_2324": false,
                "access_2122": false,
                "access_2021": false,
                "code": "UK112",
                "population_old": 0
            },
            {
                "name": "Thalisain",
                "type": "Town Panchayat",
                "area": 6,
                "wards": 4,
                "population": 2982,
                "lat": 30.020305,
                "lng": 79.049885,
                "state": "Uttarakhand",
                "natureOfUlb": "Nagar Panchayat",
                "amrut": "",
                "censusCode": "",
                "sbCode": 980164,
                "isMillionPlus": "No",
                "isUA": "",
                "UA": "",
                "access_2223": true,
                "access_2425": false,
                "access_2324": false,
                "access_2122": false,
                "access_2021": false,
                "code": "UK113",
                "population_old": 0
            }
        ]

        //Modify the data keys a/c to the requirement.
        data = data.map(item => {
            const { lat, lng, UA, isUA, access_2425, access_2324, ...rest } = item;
            const location = { lat: lat || "", lng: lng || "" };

            return {
                ...rest,
                UA: UA ? UA : null,
                isUA: isUA ? isUA : "No",
                access_2425: true,
                access_2324: true,
                location: location
            };
        });

        const createUlbService = async (payload) => {
            let createUlbendPoint = `${apiUrl}/api/v1/ulb`;
            let signUpEndPoint = `${apiUrl}/api/v1/bulk/signUpNew`;
            try {
                let response = await axios.post(createUlbendPoint, payload, config);
                var signUpResponse = {
                    "data": {}
                }
                if (response.status == 200) {
                    let signUpPayload = {
                        "ulbCode": payload.code,
                        "censusCode": payload.censusCode,
                        "sbCode": payload.sbCode
                    }
                    if (["demo", "staging"].includes(env)) {
                        signUpResponse = await axios.post(signUpEndPoint, signUpPayload, config);
                    }
                    signUpResponse.data = response.data;
                }
                return {
                    response,
                    signUpResponse
                }
            } catch (error) {
                console.error(error);
            }
        }

        const bulkUploadUlb = async (data) => {
            let counter = 0
            let ulbData = [];
            for (let payload of data) {
                let { response, signUpResponse } = await createUlbService(payload);
                if (response.status == 200) {
                    ulbData.push({ ...signUpResponse.data, sbCode: payload.sbCode, censusCode: payload.censusCode })
                    counter++
                }
            }
            console.log({ counter, ulbData })
        }

        bulkUploadUlb(data);

    } catch (error) {
        console.error("Error:", error);
        process.exit(1);
    }
}