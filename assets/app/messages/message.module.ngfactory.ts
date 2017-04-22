/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from './message.module';
import * as import2 from '@angular/common';
import * as import3 from '@angular/forms';
import * as import4 from './message.service';
import * as import5 from '@angular/http';
import * as import6 from '../errors/error.service';
class MessageModuleInjector extends import0.ɵNgModuleInjector<import1.MessageModule> {
  _CommonModule_0:import2.CommonModule;
  _ɵba_1:import3.ɵba;
  _FormsModule_2:import3.FormsModule;
  _MessageModule_3:import1.MessageModule;
  __NgLocalization_4:import2.NgLocaleLocalization;
  __ɵi_5:import3.ɵi;
  __MessageService_6:import4.MessageService;
  constructor(parent:import0.Injector) {
    super(parent,([] as any[]),([] as any[]));
  }
  get _NgLocalization_4():import2.NgLocaleLocalization {
    if ((this.__NgLocalization_4 == null)) { (this.__NgLocalization_4 = new import2.NgLocaleLocalization(this.parent.get(import0.LOCALE_ID))); }
    return this.__NgLocalization_4;
  }
  get _ɵi_5():import3.ɵi {
    if ((this.__ɵi_5 == null)) { (this.__ɵi_5 = new import3.ɵi()); }
    return this.__ɵi_5;
  }
  get _MessageService_6():import4.MessageService {
    if ((this.__MessageService_6 == null)) { (this.__MessageService_6 = new import4.MessageService(this.parent.get(import5.Http),this.parent.get(import6.ErrorService))); }
    return this.__MessageService_6;
  }
  createInternal():import1.MessageModule {
    this._CommonModule_0 = new import2.CommonModule();
    this._ɵba_1 = new import3.ɵba();
    this._FormsModule_2 = new import3.FormsModule();
    this._MessageModule_3 = new import1.MessageModule();
    return this._MessageModule_3;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.CommonModule)) { return this._CommonModule_0; }
    if ((token === import3.ɵba)) { return this._ɵba_1; }
    if ((token === import3.FormsModule)) { return this._FormsModule_2; }
    if ((token === import1.MessageModule)) { return this._MessageModule_3; }
    if ((token === import2.NgLocalization)) { return this._NgLocalization_4; }
    if ((token === import3.ɵi)) { return this._ɵi_5; }
    if ((token === import4.MessageService)) { return this._MessageService_6; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const MessageModuleNgFactory:import0.NgModuleFactory<import1.MessageModule> = new import0.NgModuleFactory<any>(MessageModuleInjector,import1.MessageModule);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiRDovQW5ndWxhciAyIChvciA0KSAmIE5vZGVKUyAtIFRoZSBQcmFjdGljYWwgTUVBTiBTdGFjayBHdWlkZS9QcmFjdGljZS9zZWVkLXByb2plY3Qvc2VlZC1wcm9qZWN0L2Fzc2V0cy9hcHAvbWVzc2FnZXMvbWVzc2FnZS5tb2R1bGUubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vRDovQW5ndWxhciAyIChvciA0KSAmIE5vZGVKUyAtIFRoZSBQcmFjdGljYWwgTUVBTiBTdGFjayBHdWlkZS9QcmFjdGljZS9zZWVkLXByb2plY3Qvc2VlZC1wcm9qZWN0L2Fzc2V0cy9hcHAvbWVzc2FnZXMvbWVzc2FnZS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiICJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
