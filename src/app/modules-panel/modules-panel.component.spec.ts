import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulesPanelComponent } from './modules-panel.component';

describe('ModulesPanelComponent', () => {
  let component: ModulesPanelComponent;
  let fixture: ComponentFixture<ModulesPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModulesPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulesPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
