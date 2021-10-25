import { Pipe, PipeTransform } from '@angular/core';
import { IPageParams } from '@core/models/page-params';

@Pipe({
  name: 'paginationFormat'
})
export class PaginationFormatPipe implements PipeTransform {

  transform(data: IPageParams): any {
    return {
      itemsPerPage: data.perPage,
      currentPage: data.currentPage,
      totalItems: data.total
    };
  }

}
