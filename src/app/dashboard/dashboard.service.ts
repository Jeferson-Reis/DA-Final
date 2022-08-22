import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { VeiculosAPI, VeiculosDataAPI } from 'models/veiculo.model';
import { map, tap, pluck } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private httpClient: HttpClient) { }

  getVeiculos() {
    return this.httpClient.get<VeiculosAPI>('http://localhost:3000/vehicle')
      .pipe(
        tap(valor => console.log(valor)),
        map(vehicles =>
          vehicles.vehicles.sort((a, b) => {
            if (a.vehicle > b.vehicle) {
              return 1;
            }
            if (a.vehicle < b.vehicle) {
              return -1;
            }
            return 0
          })

        )
      );
  }

  getVeiculosData() {
    return this.httpClient.get<VeiculosDataAPI>('http://localhost:3000/vehicledata');
  }

}
