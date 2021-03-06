/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from '@angular/common';
import * as import2 from './message.component';
import * as import3 from './message.service';
const styles_MessageComponent:any[] = ['.author[_ngcontent-%COMP%] {\n            display: inline-block;\n            font-style: italic;\n            font-size: 12px;\n            width: 80%;\n        }\n        .config[_ngcontent-%COMP%] {\n            display: inline-block;\n            text-align: right;\n            font-size: 12px;\n            width: 19%;\n        }'];
export const RenderType_MessageComponent:import0.RendererType2 = import0.ɵcrt({
  encapsulation: 0,
  styles: styles_MessageComponent,
  data: {}
}
);
function View_MessageComponent_1(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
      (l()(),import0.ɵeld(0,(null as any),(null as any),7,'div',[[
        'class',
        'config'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n            '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),1,'a',([] as any[]),(null as any),[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      var co:any = v.component;
      if (('click' === en)) {
        const pd_0:any = ((<any>co.onEdit()) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['Edit'])),
    (l()(),import0.ɵted((null as any),['\n            '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),1,'a',([] as any[]),(null as any),[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      var co:any = v.component;
      if (('click' === en)) {
        const pd_0:any = ((<any>co.onDelete()) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['Delete'])),
    (l()(),import0.ɵted((null as any),['\n        ']))
  ]
  ,(null as any),(null as any));
}
export function View_MessageComponent_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
      (l()(),import0.ɵeld(0,(null as any),(null as any),13,'article',[[
        'class',
        'panel panel-default'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n    '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),1,'div',[[
        'class',
        'panel-body'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),[
      '\n        ',
      '\n    '
    ]
    )),
    (l()(),import0.ɵted((null as any),['\n    '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),7,'footer',[[
        'class',
        'panel-footer'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n        '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),1,'div',[[
        'class',
        'author'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),[
      '\n            ',
      '\n        '
    ]
    )),
    (l()(),import0.ɵted((null as any),['\n        '])),
    (l()(),import0.ɵand(8388608,(null as any),(null as any),1,(null as any),View_MessageComponent_1)),
    import0.ɵdid(8192,(null as any),0,import1.NgIf,[
      import0.ViewContainerRef,
      import0.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵted((null as any),['\n']))
  ]
  ,(ck,v) => {
    var co:import2.MessageComponent = v.component;
    const currVal_2:any = co.belongsToUser();
    ck(v,11,0,currVal_2);
  },(ck,v) => {
    var co:import2.MessageComponent = v.component;
    const currVal_0:any = co.message.content;
    ck(v,3,0,currVal_0);
    const currVal_1:any = co.message.username;
    ck(v,8,0,currVal_1);
  });
}
function View_MessageComponent_Host_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'app-message',([] as any[]),(null as any),(null as any),(null as any),View_MessageComponent_0,RenderType_MessageComponent)),
    import0.ɵdid(24576,(null as any),0,import2.MessageComponent,[import3.MessageService],(null as any),(null as any))
  ]
  ,(null as any),(null as any));
}
export const MessageComponentNgFactory:import0.ComponentFactory<import2.MessageComponent> = import0.ɵccf('app-message',import2.MessageComponent,View_MessageComponent_Host_0,{message: 'message'},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiRDovQW5ndWxhciAyIChvciA0KSAmIE5vZGVKUyAtIFRoZSBQcmFjdGljYWwgTUVBTiBTdGFjayBHdWlkZS9QcmFjdGljZS9zZWVkLXByb2plY3Qvc2VlZC1wcm9qZWN0L2Fzc2V0cy9hcHAvbWVzc2FnZXMvbWVzc2FnZS5jb21wb25lbnQubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vRDovQW5ndWxhciAyIChvciA0KSAmIE5vZGVKUyAtIFRoZSBQcmFjdGljYWwgTUVBTiBTdGFjayBHdWlkZS9QcmFjdGljZS9zZWVkLXByb2plY3Qvc2VlZC1wcm9qZWN0L2Fzc2V0cy9hcHAvbWVzc2FnZXMvbWVzc2FnZS5jb21wb25lbnQudHMiLCJuZzovLy9EOi9Bbmd1bGFyIDIgKG9yIDQpICYgTm9kZUpTIC0gVGhlIFByYWN0aWNhbCBNRUFOIFN0YWNrIEd1aWRlL1ByYWN0aWNlL3NlZWQtcHJvamVjdC9zZWVkLXByb2plY3QvYXNzZXRzL2FwcC9tZXNzYWdlcy9tZXNzYWdlLmNvbXBvbmVudC5odG1sIiwibmc6Ly8vRDovQW5ndWxhciAyIChvciA0KSAmIE5vZGVKUyAtIFRoZSBQcmFjdGljYWwgTUVBTiBTdGFjayBHdWlkZS9QcmFjdGljZS9zZWVkLXByb2plY3Qvc2VlZC1wcm9qZWN0L2Fzc2V0cy9hcHAvbWVzc2FnZXMvbWVzc2FnZS5jb21wb25lbnQudHMuTWVzc2FnZUNvbXBvbmVudF9Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIjxhcnRpY2xlIGNsYXNzPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInBhbmVsLWJvZHlcIj5cclxuICAgICAgICB7e21lc3NhZ2UuY29udGVudH19XHJcbiAgICA8L2Rpdj5cclxuICAgIDxmb290ZXIgY2xhc3M9XCJwYW5lbC1mb290ZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYXV0aG9yXCI+XHJcbiAgICAgICAgICAgIHt7bWVzc2FnZS51c2VybmFtZX19XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbmZpZ1wiICpuZ0lmPVwiYmVsb25nc1RvVXNlcigpXCI+XHJcbiAgICAgICAgICAgIDxhIChjbGljayk9XCJvbkVkaXQoKVwiPkVkaXQ8L2E+XHJcbiAgICAgICAgICAgIDxhIChjbGljayk9XCJvbkRlbGV0ZSgpXCI+RGVsZXRlPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9mb290ZXI+XHJcbjwvYXJ0aWNsZT4iLCI8YXBwLW1lc3NhZ2U+PC9hcHAtbWVzc2FnZT4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUNRUTtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQTRDO01BQ3hDO1FBQUE7UUFBQTtNQUFBO0lBQUE7TUFBQTtNQUFBO01BQUc7UUFBQTtRQUFBO01BQUE7TUFBSDtJQUFBO0lBQXNCO0lBQVE7TUFDOUI7UUFBQTtRQUFBO01BQUE7SUFBQTtNQUFBO01BQUE7TUFBRztRQUFBO1FBQUE7TUFBQTtNQUFIO0lBQUE7SUFBd0I7SUFBVTs7Ozs7O01BVjlDO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBcUM7TUFDakM7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUF3QjtNQUFBO01BQUE7SUFBQTtJQUFBO0lBRWxCO01BQ047UUFBQTtRQUFBO01BQUE7SUFBQTtJQUE2QjtNQUN6QjtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQW9CO01BQUE7TUFBQTtJQUFBO0lBQUE7SUFFZDtJQUNOO2dCQUFBOzs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFHTTtJQUNEOzs7O0lBSmU7SUFBcEIsVUFBb0IsU0FBcEI7OztJQVBvQjtJQUFBO0lBSUE7SUFBQTs7Ozs7SUNMNUI7Z0JBQUE7Ozs7In0=
