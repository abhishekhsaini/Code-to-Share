import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZipComponentComponent } from './zip-component.component';

describe('ZipComponentComponent', () => {
  let component: ZipComponentComponent;
  let fixture: ComponentFixture<ZipComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZipComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZipComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
