import { Component, OnInit } from '@angular/core';
import { AutenthicationService } from '../services/autenthication.service';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
@Component({
  selector: 'app-entrega',
  templateUrl: './entrega.page.html',
  styleUrls: ['./entrega.page.scss'],
})
export class EntregaPage implements OnInit {
  encodeData: any;
  scannedData: {};
  barcodeScannerOptions: BarcodeScannerOptions;
  guia: string;
  constructor(private auth: AutenthicationService, private barcodeScanner: BarcodeScanner) {
    this.barcodeScannerOptions = {
      showTorchButton: true,
      showFlipCameraButton: true
    };
  }
  ngOnInit() {
    console.log('regreso a entrega');
  }
  logOut() {
    this.auth.logout();
  }
  scanCode() {
    console.log('entro');
    this.barcodeScanner
      .scan()
      .then(barcodeData => {
        this.scannedData = barcodeData;
        console.log(barcodeData.text);
        this.guia = barcodeData.text;
      })
      .catch(err => {
        console.log('Error', err);
      });
    }
  encodedText() {
    this.barcodeScanner
      .encode(this.barcodeScanner.Encode.TEXT_TYPE, this.encodeData)
      .then(
        encodedData => {
          console.log(encodedData);
          this.encodeData = encodedData;
        },
        err => {
          console.log('Error occured : ' + err);
        }
      );
  }

}
