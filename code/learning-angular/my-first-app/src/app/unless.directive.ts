import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class AppUnlessDirective {
  @Input('appUnless') set appUnless(condition: boolean) {
    if (condition) {
      this.viewContainerRef.clear()
    } else {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
  }c

  constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) { }
}
