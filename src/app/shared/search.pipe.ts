import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(items: any[], searchText: string, key: string): any[] {
    if (!items || !searchText) {
      return items;
    }
    return items.filter(item => 
      item[key].toLowerCase().includes(searchText.toLowerCase())
    );
  }
}
