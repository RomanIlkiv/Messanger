/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from './message.component.ngfactory';
import * as import2 from './message.component';
import * as import3 from './message.service';
import * as import4 from '@angular/common';
import * as import5 from './message-list.component';
const styles_MessageListComponent:any[] = ([] as any[]);
export const RenderType_MessageListComponent:import0.RendererType2 = import0.ɵcrt({
  encapsulation: 2,
  styles: styles_MessageListComponent,
  data: {}
}
);
function View_MessageListComponent_1(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'app-message',([] as any[]),(null as any),(null as any),(null as any),import1.View_MessageComponent_0,import1.RenderType_MessageComponent)),
      import0.ɵdid(24576,(null as any),0,import2.MessageComponent,[import3.MessageService],{message: [
        0,
        'message'
      ]
    },(null as any))
  ]
  ,(ck,v) => {
    const currVal_0:any = v.context.$implicit;
    ck(v,1,0,currVal_0);
  },(null as any));
}
export function View_MessageListComponent_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵted((null as any),['\n        '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),4,'div',[[
        'class',
        'col-md-8 col-md-offset-2'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n            '])),
    (l()(),import0.ɵand(8388608,(null as any),(null as any),1,(null as any),View_MessageListComponent_1)),
    import0.ɵdid(401408,(null as any),0,import4.NgForOf,[
      import0.ViewContainerRef,
      import0.TemplateRef,
      import0.IterableDiffers
    ]
      ,{ngForOf: [
        0,
        'ngForOf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n        '])),
    (l()(),import0.ɵted((null as any),['\n    ']))
  ]
  ,(ck,v) => {
    var co:import5.MessageListComponent = v.component;
    const currVal_0:any = co.messages;
    ck(v,4,0,currVal_0);
  },(null as any));
}
function View_MessageListComponent_Host_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'app-message-list',([] as any[]),(null as any),(null as any),(null as any),View_MessageListComponent_0,RenderType_MessageListComponent)),
    import0.ɵdid(57344,(null as any),0,import5.MessageListComponent,[import3.MessageService],(null as any),(null as any))
  ]
  ,(ck,v) => {
    ck(v,1,0);
  },(null as any));
}
export const MessageListComponentNgFactory:import0.ComponentFactory<import5.MessageListComponent> = import0.ɵccf('app-message-list',import5.MessageListComponent,View_MessageListComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiRDovQW5ndWxhciAyIChvciA0KSAmIE5vZGVKUyAtIFRoZSBQcmFjdGljYWwgTUVBTiBTdGFjayBHdWlkZS9QcmFjdGljZS9zZWVkLXByb2plY3Qvc2VlZC1wcm9qZWN0L2Fzc2V0cy9hcHAvbWVzc2FnZXMvbWVzc2FnZS1saXN0LmNvbXBvbmVudC5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9EOi9Bbmd1bGFyIDIgKG9yIDQpICYgTm9kZUpTIC0gVGhlIFByYWN0aWNhbCBNRUFOIFN0YWNrIEd1aWRlL1ByYWN0aWNlL3NlZWQtcHJvamVjdC9zZWVkLXByb2plY3QvYXNzZXRzL2FwcC9tZXNzYWdlcy9tZXNzYWdlLWxpc3QuY29tcG9uZW50LnRzIiwibmc6Ly8vRDovQW5ndWxhciAyIChvciA0KSAmIE5vZGVKUyAtIFRoZSBQcmFjdGljYWwgTUVBTiBTdGFjayBHdWlkZS9QcmFjdGljZS9zZWVkLXByb2plY3Qvc2VlZC1wcm9qZWN0L2Fzc2V0cy9hcHAvbWVzc2FnZXMvbWVzc2FnZS1saXN0LmNvbXBvbmVudC50cy5NZXNzYWdlTGlzdENvbXBvbmVudC5odG1sIiwibmc6Ly8vRDovQW5ndWxhciAyIChvciA0KSAmIE5vZGVKUyAtIFRoZSBQcmFjdGljYWwgTUVBTiBTdGFjayBHdWlkZS9QcmFjdGljZS9zZWVkLXByb2plY3Qvc2VlZC1wcm9qZWN0L2Fzc2V0cy9hcHAvbWVzc2FnZXMvbWVzc2FnZS1saXN0LmNvbXBvbmVudC50cy5NZXNzYWdlTGlzdENvbXBvbmVudF9Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTggY29sLW1kLW9mZnNldC0yXCI+XG4gICAgICAgICAgICA8YXBwLW1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgW21lc3NhZ2VdPVwibWVzc2FnZVwiXG4gICAgICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBtZXNzYWdlIG9mIG1lc3NhZ2VzXCI+PC9hcHAtbWVzc2FnZT5cbiAgICAgICAgPC9kaXY+XG4gICAgIiwiPGFwcC1tZXNzYWdlLWxpc3Q+PC9hcHAtbWVzc2FnZS1saXN0PiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDRVk7a0JBQUE7UUFBQTtRQUFBO01BQUE7SUFBQTs7O0lBQ1E7SUFEUixTQUNRLFNBRFI7Ozs7O0lBRlo7TUFDUTtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQXNDO0lBQ2xDO2dCQUFBOzs7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBRXVEO0lBQ3JEOzs7O0lBRE07SUFGUixTQUVRLFNBRlI7Ozs7O0lDRlo7Z0JBQUE7OztJQUFBOzs7In0=
