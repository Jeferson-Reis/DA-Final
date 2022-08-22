import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Veiculo, VeiculoData, Veiculos, VeiculosData } from 'models/veiculo.model';
import { TokenService } from '../autenticacao/token/token.service';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  veiculos$!: Veiculos;
  veiculo$!: Veiculo;


  veiculosData$: VeiculosData = [];
  veiculoData$!: VeiculoData | undefined;


  selecionado = 1;

  vinInput = "";

  constructor(
    private dashboardService: DashboardService,
    private tokenService: TokenService,
    private router: Router
  ) { }

  ngOnInit(): void {

    if (!this.tokenService.possuiToken()) {
      this.router.navigate(['login']);
      return;
    }

    this.dashboardService.getVeiculos().subscribe({
      next: (data) => {
        this.veiculos$ = data;
        this.veiculo$ = this.veiculos$[this.selecionado - 1];
        console.log(this.veiculos$);
      },
      error: (error) => { console.log(error) }
    })

  }

  mudarVeiculo() {
    this.veiculo$ = this.veiculos$[this.selecionado - 1];
    console.log(this.veiculo$);
  }

  obterVeiculoPorVin() {
    this.dashboardService.getVeiculosData().subscribe({
      next: (data) => {
        this.veiculosData$ = data.vehicleData;
        console.log(data.vehicleData);

        const result = this.veiculosData$.filter((v: VeiculoData) => v.vin === this.vinInput);

        this.veiculoData$ = result[0]
        console.log(this.vinInput);

      },
      error: (error) => { console.log(error) }
    })
  }

}