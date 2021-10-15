import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PassangerscheduleridePage } from './passangerscheduleride.page';

describe('PassangerscheduleridePage', () => {
  let component: PassangerscheduleridePage;
  let fixture: ComponentFixture<PassangerscheduleridePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PassangerscheduleridePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PassangerscheduleridePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
