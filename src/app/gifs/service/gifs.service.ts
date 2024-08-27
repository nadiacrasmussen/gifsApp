import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interface';

@Injectable({ providedIn: 'root' })
export class GifsService {
  public gifsList: Gif[] = [];
  private _tagsHistory: string[] = [];
  private apiKey: string = 'p0MwgsF8UI73M17y0nbRLTDcCZ48GEG2';
  private serviceUrl: string = 'http://api.giphy.com/v1/gifs';
  constructor(private http: HttpClient) {
    this.loadLocalStorage();
  }

  get tagsHistory() {
    //con el operador ... crea una copia de los tagsHistory para no usarlo directamente para mantenerlo privado
    return [...this._tagsHistory];
  }
  private organizeHistory(tag: string) {
    tag = tag.toLowerCase(); //
    if (this._tagsHistory.includes(tag)) {
      //para que si lo incluye elimine el tag
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag); //el old tag lo usamos para el almacenamiento, si es diferente al que esta lo almacena
    }
    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.slice(0, 10);
    this.localStorageSave();
  }
  private localStorageSave(): void {
    localStorage.setItem('history', JSON.stringify(this.tagsHistory));
  }
  private loadLocalStorage(): void {
    if (!localStorage.getItem('history')) return;
    this._tagsHistory = JSON.parse(localStorage.getItem('history')!);
   if (this._tagsHistory.length === 0) return;
   this.searchTag(this._tagsHistory[0]);
  }
  searchTag(tag: string): void {
    if (tag.length === 0) return;
    this.organizeHistory(tag);

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', tag);

    this.http
      .get<SearchResponse>(`${this.serviceUrl}/search`, { params })
      .subscribe((resp) => {
        this.gifsList = resp.data;
      });
  }
}
