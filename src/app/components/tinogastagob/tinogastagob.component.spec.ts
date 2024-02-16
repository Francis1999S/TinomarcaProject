import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TinogastagobComponent } from './tinogastagob.component';

describe('TinogastagobComponent', () => {
  let component: TinogastagobComponent;
  let fixture: ComponentFixture<TinogastagobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TinogastagobComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TinogastagobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
