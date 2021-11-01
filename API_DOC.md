使用者: 3
裝置: 6
辨識紀錄: 2,3,4

### 急需 <1022 彭 鉦鋒通知警衛儀錶板是急需項目 裝置加入6  辨識記錄加入2>
- [x] 使用者: 3 4
- [x] 裝置: 2 6  
- [x] 辨識紀錄: 2 3 4
- [x] 其他: 1

### 剩餘項目 <1025 彭 新增>
前端
- [x] 使用者: 1 2
- [x] 裝置: 1 3 4 5 
- [x] 辨識紀錄: 1

後端
- [ ] 使用者: 1 2
- [ ] 裝置: 1 3 4 5 
- [ ] 辨識紀錄: 1

## 資料表
### DIDD_User
id：int,Pkey "主鍵"
name：varchar() "用戶名"
account：varchar() "登入帳號"
password：varchar() "密碼"
department：varchar() "部門"
dep_key：varchar() "目標欄位主鍵值"
email：varchar() "e-mail"
- department 欄位用來指定該 user 的身份及對應表。例如 staff 是行政人員，student 是學生。
- dep_key 存入對應 deparment 欄位內的表的主鍵值，staff 表是 STAFF_NO 欄位的值，student 表是 STUDNO欄位的值。



### DIDD_Device
id：int,Pkey "主鍵" <1021 彭 加上說明>
name：varchar() "名稱" <1021 彭 加上說明>
deviceCode：varchar() "代碼(EX.設備機型)" <1021 彭 加上說明>
place：varchar() "位置" <1021 彭 加上說明>
maintainOrganization：varchar() "維護單位" <1021 彭 加上說明>
maintainCall：varchar() "維護單位電話" <1021 彭 加上說明>
status：varchar() "狀態 (Y:啟用, N:停用)" <1021 彭 加上說明>
type：varchar() "辨識方式" <1021 彭 加上說明>

### DIDD_Record
id：int,Pkey "主鍵"
userId：int() "用戶表 User 主鍵" => User.id (andy:原varchar 改為 int)
deviceId：int() "設備表 Device 主鍵" ==> Device.id (andy:原 varchar 改為 int)
location:varchar() "地點"
data_type：varchar() "data 欄位存放的類型"
data：varchar() "資料值"
createTime:：varchar(50) "記錄時間"
- data_type 用來辨別 data 欄位。例如：height 代表 data 內存身高，temp 代表 data 內存體溫。
- createTime 內 可存放 YYYY/MM/DD HH:mm:ss 

### DIDD_Student
STUDNO：varchar(),Pkey "學號"
SYEAR：int() "學年度"
SEM：int() "學期"
ESYS1：int() "部別代碼"
ESYS1NM：varchar() "部別"
ESYS2NM：varchar() "學制"
COLLEGE：int() "學院代碼"
COLLEGENM：varchar() "學院"
DP：int() "科系代碼"
DPNM：varchar() "科系"
DPNMA：varchar()"科系簡稱"
GRADE：int() "年級"
CLASS：varchar() "班級代碼"
CLASSNM：varchar() "班級名稱"
      
### DIDD_Staff
STAFF_NO：varchar(),Pkey "員工編號"
EMPNM：varchar() "姓名"
EMPMAIL：varchar() "校內email"
STATUSNM：varchar() "人員類別"
DEP_NAME：varchar() "服務單位"
COL_NAME：varchar() "學院別"
EmployeeNO：varchar() "帳號"

<彭 新增API備註10/21>
/* 
API文件備註: 
    1.欄位說明後方沒有用( )註記，型態皆為string
    2.欄位名稱有用?標記，代表可傳可不傳
*/

## 使用者
### 1.取得使用者清單 (分頁)
Path: /user/list
Method: POST
Request
```json
{
    userAccount?: "帳號(學號/EPortal帳號)",<1021 彭 帳號加上說明>
    userName?: "姓名",
    perPage: "一頁幾筆(number)", <1021 彭 備註型別>
    currentPage: "當前頁碼(number)" <1021 彭 備註型別>
}
```
Response
```json
{
    pageParams: {
        perPage: "一頁幾筆(number)", <1021 彭 備註型別>
        currentPage: "當前頁碼(number)" <1021 彭 備註型別>
        total: "總筆數(number)" <1021 彭 備註型別>
    },
    data: [
        {
            userId: "使用者ID(number)" <1021 彭 新增欄位>
            userAccount: "帳號(學號/EPortal帳號)",<1021 彭 帳號加上說明>
            userName: "姓名",
            collegeName: "院",
            departmentName: "部門/科系",
            departmentSubName: "職稱/班級"
            identity: "teacher:老師/student:學生"
        }
    ]
}
```
### 2.取得使用者詳細
Path: /user/info
Method: POST
Request
```json
{
    userId: "使用者ID(number)" <1021 彭 Account 改 Id>
}
```
Response
```json
{
    userId: "使用者ID(number)" <1021 彭 新增欄位>
    userAccount: "帳號(學號/EPortal帳號)",<1021 彭 帳號加上說明>
    userName: "姓名",
    collegeName: "院",
    departmentName: "部門/科系",
    departmentSubName: "職稱/班級"
    identity: "teacher:老師/student:學生"
}
```
### 3.登入(APP/後台)

Path: /user/login
Method: POST
Request
```json
{
    userAccount: "帳號(學號/EPortal帳號)",<1021 彭 帳號加上說明>
    password: "密碼"
}
```
Response
```json
{
    isSuccess: "是否成功(boolean)",
    data: {
        userId: "使用者ID(number)" <1021 彭 新增欄位>
        userAccount: "帳號(學號/EPortal帳號)",<1021 彭 帳號加上說明>
        userName: "姓名",
        collegeName: "院",
        departmentName: "部門/科系",
        departmentSubName: "職稱/班級"
        identity: "teacher:老師/student:學生"
    }
}
```
### 4.修改密碼 <1021 彭 新需求>

Path: /user/updatePassword
Method: POST
Request
```json
{
    userId: "使用者ID(number)"
    oldPassword: "舊密碼"
    newPassword: "新密碼"
}
```
Response
```json
{
    isSuccess: "是否成功(boolean)"
}
```
## 裝置
### 1.取得裝置清單
Path: /device/list
Method: POST
Request
```json
{
    deviceName?: "名稱",
    place?: "位置",
    perPage: "一頁幾筆(number)",
    currentPage: "當前頁碼(number)"
}
```
Response
```json
{
    pageParams: {
        perPage: "一頁幾筆(number)",
        currentPage: "當前頁碼(number)"
        total: "總筆數(number)"
    },
    data: [
        {
            deviceId: "deviceId(number)",
            deviceName: "名稱",
            deviceCode: "代碼",
            place: "位置",
            status: "狀態",
            type: "辨識方式",
        }
    ]
}
```
### 2.取得裝置詳細
Path: /device/info
Method: POST
Request
```json
{
    deviceId: "deviceId(number)"
}
```
Response
```json
{
    deviceId: "deviceId(number)",
    deviceName: "名稱",
    deviceCode: "代碼",
    place: "位置", <"三民校區大門/三民校區後門/民生校區大門">
    status: "狀態",
    type: "辨識方式",
    maintainOrganization: "維護單位", 
    maintainCall: "維修專線" <1024 彭 調整欄位名稱>
}
```
### 3.新增裝置
Path: /device/create
Method: POST
Request
```json
{
    deviceName: "名稱",
    deviceCode: "代碼",
    place: "位置",
    status: "狀態",
    type: "辨識方式",
    maintainOrganization: "維護單位",
    maintainCall: "維修專線" <1024 彭 調整欄位名稱>
}
```
Response
```json
{
    isSuccess: "是否成功(boolean)"
}
```
### 4.修改裝置
Path: /device/update
Method: POST
Request
```json
{
    deviceId: "id(number)",
    deviceName: "名稱",
    deviceCode: "代碼",
    place: "位置",
    status: "狀態",
    type: "辨識方式",
    maintainOrganization: "維護單位",
    maintainCall: "維修專線" <1024 彭 調整欄位名稱>
}
```
Response
```json
{
    isSuccess: "是否成功(boolean)"
}
```
### 5.刪除裝置
Path: /device/delete
Method: POST
Request
```json
{
    deviceId: "deviceId(number)",
}
```
Response
```json
{
    isSuccess: "是否成功(boolean)"
}
```
### 6.依大門名稱取得設備清單(警衛用)
Path: /device/homeUse
Method: POST
Request
```json
{
    doorName: "三民校區大門/三民校區後門/民生校區大門"
}
```
Response
```json
{
    data: [
        {
            deviceId: "deviceId(number)",
            deviceName: "名稱",
            deviceCode: "代碼",
            place: "位置",
            status: "狀態",
            type: "辨識方式",
            maintainOrganization: "維護單位",
            maintainCall: "維修專線" <1024 彭 調整欄位名稱>
        }
    ]
}
```
## 辨識紀錄
### 1.取得辨識紀錄清單 (分頁)<1021 彭 加上分頁備註>
Path: /record/listPage
Method: POST
Request
```json
{
    userName?: "使用者名稱",
    userId?: "使用者ID (number)" <1021 彭 新增欄位>
    searchName?: "院/部門/職稱/科系/班級",
    userAccount?: "學生學號/老師EPortal帳號", <1101 彭 新增欄位>
    place?: "裝置地點", <1101 彭 新增欄位>
    type?: "辨識結果 ('nornal': 正常, 'error': 異常)",
    dateStart?: "查詢時間起('YYYY/MM/DD HH:mm:ss')",
    dateEnd?: "查詢時間汔('YYYY/MM/DD HH:mm:ss')",
    perPage: "一頁幾筆(number)",
    currentPage: "當前頁碼(number)"
}
```
Response
```json
{
    pageParams: {
        perPage: "一頁幾筆(number)", <1021 彭 備註型別>
        currentPage: "當前頁碼(number)" <1021 彭 備註型別>
        total: "總筆數(number)"
    },
    data: [
        {
          id: "紀錄ID (number)"
          userId: "使用者ID (number)" <1021 彭 新增欄位>
          userName: "使用者名稱"
          userAccount: "帳號(學號/EPortal帳號)"<1021 彭 帳號加上說明>
          collegeName: "院",
          departmentName: "部門/科系",
          departmentSubName: "職稱/班級"
          identity: "teacher:老師/student:學生"
          deviceId: "裝置ID (number)"
          deviceName: "裝置名稱"
          place: "裝置位置" <1021 彭 新增欄位>
          temperature: "辨識結果"
          createdTime: "建立時間('YYYY/MM/DD HH:mm:ss')" <1021 彭 欄位備註>
        }
    ]
}
```
### 2.依大門名稱取得今日辨識異常清單(警衛用) <1022 彭 新增日期區間查詢條件>
Path: /record/homeDevice
Method: POST
Request
```json
{
    doorName: "三民校區大門/三民校區後門/民生校區大門",
    dateStart?: "查詢時間起('YYYY/MM/DD HH:mm:ss')",
    dateEnd?: "查詢時間汔('YYYY/MM/DD HH:mm:ss')",
}
```
Response
```json
{
    data: [
        {
            id: "紀錄ID number"
            userId: "使用者ID (number)" <1021 彭 新增欄位>
            userName: "使用者名稱"
            userAccount: "帳號(學號/EPortal帳號)"<1021 彭 帳號加上說明>
            collegeName: "院",
            departmentName: "部門/科系",
            departmentSubName: "職稱/班級"
            identity: "teacher:老師/student:學生"
            deviceId: "裝置ID number"
            deviceName: "裝置名稱"
            place: "裝置位置" <1021 彭 新增欄位>
            temperature: "辨識結果"
            createdTime: "建立時間('YYYY/MM/DD HH:mm:ss')" <1021 彭 欄位備註>
        }
    ]
}
```
### 3.新增辨識紀錄
Path: /record/create
Method: POST
Request
```json
{
    userId: "使用者ID (number)" <1021 彭 Account 改 Id>
    deviceId: "裝置ID (number)" <1021 彭 備註型別>
    temperature: "辨識結果"
    createdTime: "建立時間('YYYY/MM/DD HH:mm:ss')" <1021 彭 欄位備註>
}
```
Response
```json
{
    isSuccess: "是否成功(boolean)"
}
```
### 4.取得辨識紀錄清單 (不分頁)<1021 彭 新增需求>
Path: /record/list
Method: POST
Request
```json
{
    searchName?: "院/部門/職稱/科系/班級",
    dateStart?: "查詢時間起('YYYY/MM/DD HH:mm:ss')",
    dateEnd?: "查詢時間汔('YYYY/MM/DD HH:mm:ss')",
}
```
Response
```json
{
    data: [
        {
          id: "紀錄ID (number)"
          userId: "使用者ID (number)" <1021 彭 新增欄位>
          userName: "使用者名稱"
          userAccount: "帳號(學號/EPortal帳號)"<1021 彭 帳號加上說明>
          collegeName: "院",
          departmentName: "部門/科系",
          departmentSubName: "職稱/班級"
          identity: "teacher:老師/student:學生"
          deviceId: "裝置ID (number)"
          deviceName: "裝置名稱"
          place: "位置"
          temperature: "辨識結果"
          createdTime: "建立時間('YYYY/MM/DD HH:mm:ss')" <1021 彭 欄位備註>
        }
    ]
}
```
## 其他
### 1.取得所有"院/部門/職稱/科系/班級"清單 <1021 彭 新需求>
Path: /other/allClgeAndDep
Method: POST
Request
```json
{}
```
Response
```json
{
    Class: string[]
    College: string[]
    Department: string[]
    DepartmentName: string[]
    Staff: string[]
}
```