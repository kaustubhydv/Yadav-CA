// src/app/services/event-data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import Papa from 'papaparse';

@Injectable({ providedIn: 'root' })
export class UpcomingEventsService {
  private sheetUrl =
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vQGIIZEsbITh2URHYMMeqNMVRNDbck8HTTS6muY4R04EtZj-1pfNpjJ-x9ygMwNPrmDqMc3cD5-QYgj/pub?gid=0&single=true&output=csv';

  constructor(private http: HttpClient) {}

  getEvents() {
    return this.http.get(this.sheetUrl, { responseType: 'text' }).pipe(
      map((csvData) => {
        const parsed = Papa.parse(csvData, { header: true });
        return parsed.data.filter(
          (row: any) => row.Title && row.Description && row.ImageURL
        );
      })
    );
  }
}
