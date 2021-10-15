import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PassangerhistoryridesPage } from './passangerhistoryrides.page';

describe('PassangerhistoryridesPage', () => {
  let component: PassangerhistoryridesPage;
  let fixture: ComponentFixture<PassangerhistoryridesPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PassangerhistoryridesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PassangerhistoryridesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
