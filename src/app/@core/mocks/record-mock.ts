export const GetRecordListMock = {
    pageParams: {
        perPage: 6,
        currentPage: 1,
        total: 12
    },
    data: [
        {
            id: 1,
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
        }
    ]
}

export const GetHomeDeviceRecordMock = (() => {
    const record = {
        id: 1,
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
    const recordList = [1,2,3,4].map(x => {
        const deviceId = x;
        return { ...record, deviceId }
    });
    return {
        data: [...recordList, ...recordList, ...recordList, ...recordList, ...recordList]
    };
})();