import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxTextEditorToolbarComponent } from './ngx-text-editor-toolbar.component';
import { ngxEditorConfig } from '../common/ngx-text-editor.defaults';
import { PopoverModule } from 'ngx-bootstrap';
import { CommandExecutorService } from '../common/services/command-executor.service';
import { MessageService } from '../common/services/message.service';

describe('NgxEditorToolbarComponent', () => {
  let component: NgxTextEditorToolbarComponent;
  let fixture: ComponentFixture<NgxTextEditorToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule, PopoverModule.forRoot(), HttpClientModule],
      declarations: [NgxTextEditorToolbarComponent],
      providers: [CommandExecutorService, MessageService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxTextEditorToolbarComponent);
    component = fixture.componentInstance;
    component.config = ngxEditorConfig;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
