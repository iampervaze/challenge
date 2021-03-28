import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProfileService {
    constructor(private http: HttpClient) { }

    get(): Observable<any[]> {
        return this.http.get<any[]>('http://localhost:3000/api/profiles');
    }

    getById(id: string): Observable<any[]> {
        return this.http.get<any[]>(`http://localhost:3000/api/profiles/${id}`);
    }

    update(id: string, profile: any) {
        return this.http.put<any>(`http://localhost:3000/api/profiles/${id}`, profile);
    }

    save(profile: any) {
        return this.http.post<any>(`http://localhost:3000/api/profiles`, profile);
    }
}
