import * as moment from "moment";

export const GetRecordListMock = {
    pageParams: {
        perPage: 6,
        currentPage: 1,
        total: 12
    },
    data: [
        {
            id: 1,
            userId: 1,
            userName: "彭浚翔",
            userAccount: "10430004",
            collegeName: "資訊學院",
            departmentName: "資工系",
            departmentSubName: "資工一甲",
            identity: "student",
            deviceId: 1,
            place: '三民校區大門口',
            deviceName: "裝置名稱",
            temperature: "36.8",
            createdTime: "2021-10-18 08:56:43"
        },
        {
            id: 1,
            userId: 1,
            userName: "彭浚翔",
            userAccount: "10430004",
            collegeName: "資訊學院",
            departmentName: "資工系",
            departmentSubName: "資工一甲",
            identity: "student",
            deviceId: 1,
            place: '民生校區大門口',
            deviceName: "裝置名稱",
            temperature: "36.8",
            createdTime: "2021-10-18 08:56:43"
        },
        {
            id: 1,
            userId: 1,
            userName: "彭浚翔",
            userAccount: "10430004",
            collegeName: "資訊學院",
            departmentName: "資工系",
            departmentSubName: "資工一甲",
            identity: "student",
            place: '三民校區大門口',
            deviceId: 1,
            deviceName: "裝置名稱",
            temperature: "36.8",
            createdTime: "2021-10-18 08:56:43"
        },
        {
            id: 1,
            userId: 1,
            userName: "彭浚翔",
            userAccount: "10430004",
            collegeName: "資訊學院",
            departmentName: "資工系",
            departmentSubName: "資工一甲",
            identity: "student",
            place: '三民校區大門口',
            deviceId: 1,
            deviceName: "裝置名稱",
            temperature: "36.8",
            createdTime: "2021-10-18 08:56:43"
        },
        {
            id: 1,
            userId: 1,
            userName: "彭浚翔",
            userAccount: "10430004",
            collegeName: "資訊學院",
            departmentName: "資工系",
            departmentSubName: "資工一甲",
            identity: "student",
            place: '三民校區大門口',
            deviceId: 1,
            deviceName: "裝置名稱",
            temperature: "36.8",
            createdTime: "2021-10-18 08:56:43"
        }
    ]
}

export const GetRecordListAllMock = (() => {
    const record = {
        id: 1,
        userId: 1,
        userName: "彭浚翔",
        userAccount: "10430004",
        collegeName: "資訊學院",
        departmentName: "資工系",
        departmentSubName: "資工二甲",
        identity: "student",
        place: '三民校區大門口',
        deviceId: 1,
        deviceName: "裝置名稱",
        temperature: "36.8",
        createdTime: "2021-10-18 08:56:43"
    };
    const list = [];
    for(let i = 1; i <= 30; i++) {
        const deviceId = (i % 4) + 1;
        const temperatureArr = [35.2,36.4,36.2,37.1,36.8,38.2,37.8,37.5,36.3];
        const temperature = temperatureArr[Math.floor(Math.random()*(9))];
        const data = { ...record, deviceId, temperature};
        list.push(data);
    };
    return { data: list };
})();


export const GetHomeDeviceRecordMock = (() => {
    const record = {
        id: 1,
        userId: 1,
        userName: "彭浚翔",
        userAccount: "10430004",
        collegeName: "資訊學院",
        departmentName: "資工系",
        departmentSubName: "專案",
        identity: "student",
        deviceId: 1,
        deviceName: "裝置名稱",
        temperature: "36.8",
        createdTime: "2021-10-18 08:56:43"
    };
    const list = [];
    for(let i = 1; i <= 70; i++) {
        const deviceId = (i % 4) + 1;
        const temperatureArr = [35.2,36.4,36.2,37.1,36.8,38.2,37.8,37.5,36.3];
        const temperature = temperatureArr[Math.floor(Math.random()*(9))];
        const data = { ...record, deviceId, temperature};
        list.push(data);
    };
    return { data: list };
    // const recordList = [1,2,3,4].map(x => {
    //     const deviceId = x;
    //     return { ...record, deviceId }
    // });
    // return {
    //     data: [...recordList, ...recordList, ...recordList, ...recordList, ...recordList]
    // };
})();

export const GetRecordListForStaffMock = (() => {
    const record = {
        id: 1,
        userId: 1,
        userName: "彭浚翔",
        userAccount: "10430004",
        collegeName: "資訊學院",
        departmentName: "資工系",
        departmentSubName: "專案",
        identity: "student",
        deviceId: 1,
        deviceName: "裝置名稱",
        temperature: "36.8",
        createdTime: "2021-10-18 08:56:43"
    };
    const list = [];
    for(let i = 1; i <= 600; i++) {
        const deviceId = (i % 4) + 1;
        const index = Math.floor(Math.random()*(3));
        const createdTime = moment().add(-(i%7), 'days').format(`YYYY/MM/DD ${i%7 + 9}:mm:ss`);
        const temperatureArr = [36.5, 36.4, 38.2];
        const temperature = temperatureArr[index];
        const data = { ...record, deviceId, temperature, createdTime};
        list.push(data);
    };
    return { data: list };
})();

export const GetCollegeCountListMock = (() => {
    const collegeList = [
        { 
            collegeName: '商學院',  
            departmentList: [
                '休閒事業經營系', '企業管理系', '保險金融管理系',
                '財政稅務系', '財務金融系', '國際貿易與經營系',
                '會計資訊系', '應用統計系'
            ]
        },
        { 
            collegeName: '設計學院',  
            departmentList: [
                '多媒體設計系', '室內設計系', '商業設計系',
                '創意商品設計系'
            ]
        },
        { 
            collegeName: '資訊流通學院',  
            departmentList: [
                '流通管理系', '資訊工程系', '資訊管理系'
            ]
        },
        { 
            collegeName: '語文學院',  
            departmentList: [
                '應用中文系', '應用日語系', '應用英語系'
            ]
        },
        { 
            collegeName: '中護健康學院',  
            departmentList: [
                '老人服務事業管理系', '美容系', '護理系'
            ]
        },
        { 
            collegeName: '智慧產業學院',  
            departmentList: [
                '商業文書科', '商業經營系'
            ]
        }
    ];
    return {
        data: collegeList.map(col => {
            const { collegeName, departmentList } = col;
            const departmentCountList = departmentList.map(departmentName => {
                const count = Math.floor(Math.random()*(400));
                return { departmentName, count };
            });
            return { collegeName, departmentCountList };
        })
    }
})();

export const GerDoorCountListMock = (() => {
    const allDoorName = ['三民校區大門', '三民校區後門', '民生校區大門'];
    return {
        data: allDoorName.map(doorName => {
            const hourCountList = [];
            for (let i = 0; i < 24; i++) {
                const hour = moment(`2021-11-03 ${i}:00`).format('HH:00');
                const count = Math.floor(Math.random()*(1500));
                hourCountList.push({ hour, count });
            }
            return { doorName, hourCountList };
        })
    }
})();