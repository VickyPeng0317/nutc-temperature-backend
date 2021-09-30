const prettier = require("prettier");
// const res = prettier.format("export class FrontMenuComponent implements OnInit {constructor() { }ngOnInit(): void {}}", { semi: true, parser: "babel-ts" });

// console.log(res);
function gEntity(tableInfo, colInfoList) {
  const { tableName, tableComment } = tableInfo;
  const allColTemplate = colInfoList.map(info => gColTemplate(info)).join(' ');
  const upperTableName = tableName.split('').map((x,i) => i === 0 ? x.toUpperCase() : x).join('')
  const res = `
  import { BelongsTo, Column, DataType, Default, ForeignKey, Model, Table } from 'sequelize-typescript';
  @Table({
    tableName: '${tableName}',
    comment: '${tableComment}',
  })
  export class ${upperTableName}Entity extends Model<${upperTableName}Entity> {
    ${allColTemplate}
  }
  `
  console.log(prettier.format(res, { semi: true, parser: "babel-ts" }).split('\"').join('\''));
}
const tableInfo = {
  tableName: 'manager',
  tableComment: '管理者'
};
const colInfoList = [
  {
    key: 'managerId',
    remark: 'manager主鍵',
    isAuto: true,
    isPk: true,
    type: 'int(11)',
    default: undefined
  },
  {
    key: 'account',
    remark: '帳號',
    isAuto: false,
    isPk: false,
    type: 'varchar(20)',
    default: undefined
  },
  {
    key: 'password',
    remark: '密碼',
    isAuto: false,
    isPk: false,
    type: 'text',
    default: undefined
  },
  {
    key: 'name',
    remark: '姓名',
    isAuto: false,
    isPk: false,
    type: 'varchar(20)',
    default: undefined
  },
  {
    key: 'isDelete',
    remark: '是否刪除',
    isAuto: false,
    isPk: false,
    type: 'tinyint(1)',
    default: 0
  },
  {
    key: 'createdAt',
    remark: '',
    isAuto: false,
    isPk: false,
    type: 'datetime',
    default: undefined
  },
  {
    key: '	updatedAt',
    remark: '',
    isAuto: false,
    isPk: false,
    type: 'datetime',
    default: undefined
  }
]
gEntity(tableInfo, colInfoList);

function gColTemplate (colInfo) {
  const { key, remark, isAuto, isPk } = colInfo;
  const colType = colInfo.type;
  const defaultValue = colInfo.default;

  const comment = !remark ? '' : `comment: '${remark}',`;
  const autoIncrement = !isAuto ? '' : `autoIncrement: true,`;
  const primaryKey = !isPk ? '' : `primaryKey: true,`;

  const tsType = [
    { isMatch: colType.includes('varchar'), tsType: 'string'},
    { isMatch: colType.includes('int'), tsType: 'number'},
    { isMatch: colType.includes('datetime'), tsType: 'Date'},
    { isMatch: colType.includes('date'), tsType: 'Date'},
    { isMatch: colType.includes('tinyint'), tsType: 'boolean'},
    { isMatch: colType.includes('text'), tsType: 'string'}
  ].find(x => x.isMatch).tsType;
  const type = [
    { isMatch: tsType === 'string', type: 'type: DataType.STRING(20),'},
    { isMatch: tsType === 'Date', type: 'type: DataType.DATEONLY,'},
    { isMatch: tsType === 'boolean', type: 'DataType.BOOLEAN,'},
    { isMatch: true, type: ''},
  ].find(x => x.isMatch).type;
  // const {} = [
  //   { isMatch: colType.includes('varchar'), tsType: 'string'},
  //   { isMatch: colType.includes('int'), tsType: 'number'},
  //   { isMatch: colType.includes('datetime'), tsType: 'Date'},
  //   { isMatch: colType.includes('date'), tsType: 'Date'},
  //   { isMatch: colType.includes('tinyint'), tsType: 'boolean'},
  //   { isMatch: colType.includes('text'), tsType: 'string'}
  // ].find(x => x.isMatch)
  const res = `
    @Column({
      ${comment}${autoIncrement}${primaryKey}${type}
    })
    ${key}: ${tsType};
  `;
  return res;
}
