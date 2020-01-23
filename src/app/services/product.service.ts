import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment"



@Injectable()

export class ComplaintsService {

  baseUrl: string = environment.API_BASE_URL;

  constructor(private httpClient: HttpClient) { }

//   getTotalCompliants(): Observable<ComplaintTotal> {
//     const endpoint = "employ.json";

//     let total: Observable<ComplaintTotal>;

//     return this.httpClient
//       .post<ComplaintTotal>(`${this.baseUrl}/${endpoint}`, null)
//       .map(data => this.toComplaintsTotalObject(data));;
//   }

//   getComplaintDetails(complaintID: number): Observable<ComplaintInfo> {
//     const endpoint = "Complaints/GetComplaintsDetails/";
//     let param = new HttpParams();
//     param = param.append("compaintId", complaintID.toString())


//     return this.httpClient
//       .get<ComplaintInfo>(`${this.baseUrl}/${endpoint}`, { params: param })
//       .map(data => this.toComplaintInfoObject(data));;
//   }



  
}