import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedLibService {

  private readonly dataUrl = 'https://jsonplaceholder.typicode.com/users';
  constructor(private _http : HttpClient) { }

   applySortAndFilter(items: any,sortOption:any,filterText :string) {
    // Apply sorting
    const sortedItems = [...items].sort((a, b) => {
      if (a[sortOption] < b[sortOption]) return -1;
      if (a[sortOption] > b[sortOption]) return 1;
      return 0;
    });

    // Apply filtering
    const filteredItems = filterText
      ? sortedItems.filter((item) => item.name.toLowerCase().includes(filterText.toLowerCase()))
      : sortedItems;

    return (of(filteredItems))
  }
  // -------------------------- #Api Call# ------------------------------ //
  public getData(): Observable<any> {
    return this._http.get<any>(this.dataUrl);
  }
  public postData(data : any): Observable<any> {
    return this._http.post<any>(this.dataUrl,{
      body:data
    });
  }
  public updateRowData(data : any): Observable<any> {
    return this._http.post<any>(this.dataUrl,{
      method: 'PUT',
      body:data
    });
  }
  public deleteRowData(id : any): Observable<any> {
    return this._http.delete<any>(this.dataUrl+`/${id}`);
  }
}
