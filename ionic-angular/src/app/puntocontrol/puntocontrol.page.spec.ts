import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PuntocontrolPage } from './puntocontrol.page';

describe('PuntocontrolPage', () => {
  let component: PuntocontrolPage;
  let fixture: ComponentFixture<PuntocontrolPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuntocontrolPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PuntocontrolPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
