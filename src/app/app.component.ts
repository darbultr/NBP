import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { Observer } from 'rxjs';
import { ApiService } from './api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MessageService]
})


export class AppComponent implements OnInit {
  constructor(private primengConfig: PrimeNGConfig, private api: ApiService, private messageService: MessageService,) {

  }
  currencies = [];
  isLoading = false;
  calculateCurrency = false;
  date = moment().toDate();
  today = moment().toDate();
  minDate = moment('2002-01-02').toDate();
  calcFromVal = 0;
  calcToVal = 0;
  calcFrom: any;
  calcTo: any;

  exchangeRateObserver: Observer<any> = {
    next: resp => {
      this.currencies = resp[0].rates
      this.messageService.add({ key: 'toastMessages', severity: 'success', summary: 'Pobrano', detail: `Pobrano kursy z dnia: ${moment(this.date).format('YYYY-MM-DD')}` });
    },
    error: err => {
      console.error('Wystąpił błąd:', err);
      this.currencies = [];
      if (err.status == 404) {
        this.messageService.add({ key: 'toastMessages', severity: 'error', summary: 'Błąd', detail: 'Brak danych dla określonego zakresu czasowego' });
      } else {
        this.messageService.add({ key: 'toastMessages', severity: 'error', summary: 'Błąd', detail: err.statusText });
      }
    },
    complete: () => {
      console.log('Pobrano');
    }
  }

  ngOnInit() {

    this.primengConfig.ripple = true;

    this.primengConfig.setTranslation({
      "dayNames": ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"],
      "dayNamesShort": ["Niedz", "Pon", "Wt", "Śr", "Czw", "Pt", "Sob"],
      "dayNamesMin": ["N", "Pn", "W", "Ś", "C", "Pt", "S"],
      "monthNames": ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"],
      "monthNamesShort": ["St", "Lut", "Mrz", "Kw", "Maj", "Cz", "Lip", "Sier", "Wrz", "Paź", "Lis", "Gr"],
      "dateFormat": "yy/mm/dd",
      "firstDayOfWeek": 1,
      "today": "Dziś",
      "weekHeader": "Wk",
      "emptyMessage": 'Brak danych'
    })
    this.api.getExchangeRates('A', moment(this.date).format('YYYY-MM-DD')).subscribe(this.exchangeRateObserver);
  }

  getCurrencies() {
    this.api.getExchangeRates('A', moment(this.date).format('YYYY-MM-DD')).subscribe(this.exchangeRateObserver);
  }

  calculate() {
    this.calcToVal = this.calcFromVal * this.calcFrom.mid / this.calcTo.mid
  }


}
