import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ElementRef, Renderer2 } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgxGrippieComponent } from './ngx-grippie.component';
import { NgxTextEditorComponent } from '../ngx-text-editor/ngx-text-editor.component';
import { MessageService } from '../common/services/message.service';
import { CommandExecutorService } from '../common/services/command-executor.service';

describe('NgxGrippieComponent', () => {
  let component: NgxGrippieComponent;
  let fixture: ComponentFixture<NgxGrippieComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [NgxGrippieComponent],
      providers: [
        NgxTextEditorComponent,
        MessageService,
        CommandExecutorService,
        { provide: ElementRef, useValue: this },
        { provide: Renderer2, useValue: this }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxGrippieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
