import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';
@Injectable({
  providedIn: 'root'
})
export class ExportService {

  constructor() { }

  exportExcell(data: any[], cols: TableCol[], fileName: string) {
    // Excell column name
    const wsDataColumn = cols.map(col => col.name);

    // Excell data
    const wsDataSource = data.map(item => {
      return cols.map(col => item[col.key]);
    });

    // Create WorkSheet
    const ws = XLSX.utils.aoa_to_sheet([wsDataColumn, ...wsDataSource]);

    // Set column width
    ws['!cols'] = cols.map(col => {
      return { width: +col.width.split('%')[0] * 1.6 };
    });

    // Create WorkBook
    const wb = XLSX.utils.book_new();

    // Export file
    XLSX.utils.book_append_sheet(wb, ws, fileName);
    XLSX.writeFile(wb, fileName + '.xlsx');
 }
}

export interface TableCol {
  width: string;
  key: string;
  name: string;
}
