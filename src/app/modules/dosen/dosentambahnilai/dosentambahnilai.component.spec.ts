import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DosentambahnilaiComponent } from './dosentambahnilai.component';

describe('DosentambahnilaiComponent', () => {
  let component: DosentambahnilaiComponent;
  let fixture: ComponentFixture<DosentambahnilaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DosentambahnilaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DosentambahnilaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
