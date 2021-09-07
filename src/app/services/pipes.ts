import {Pipe, PipeTransform} from "@angular/core";
import {Product} from "../components/common/products/products.component";

@Pipe(
  {
    name: 'countLimiterPipe'
  }
)
export class CountLimiterPipe implements PipeTransform{
  transform(values: any[], count: number): any[] {
    return values.slice(0, count)
  }

}

@Pipe(
  {
    name: 'filterPipe'
  }
)
export class FilterPipe implements PipeTransform{
  transform(items: any[], searchValue: string, searchField: string): any[] {
    if(!searchValue || !searchValue) {
      return items
    }
    return items.filter(item=>{
      const field = item[searchField].toLowerCase()
      const value = searchValue.toLowerCase()
      return field.indexOf(value) >= 0
    })
  }

}
