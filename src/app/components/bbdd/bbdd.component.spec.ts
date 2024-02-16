import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BBDDComponent } from './bbdd.component';

describe('BBDDComponent', () => {
  let component: BBDDComponent;
  let fixture: ComponentFixture<BBDDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BBDDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BBDDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
