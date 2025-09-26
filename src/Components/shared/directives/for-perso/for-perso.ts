import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appForPerso]'
})
export class ForPerso {

   constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}
@Input() set appForOf(items: any[]) {
    // Vider la vue existante
    this.viewContainer.clear();

    // Créer une instance de template pour chaque élément
    items.forEach((item, index) => {
      this.viewContainer.createEmbeddedView(this.templateRef, {
        $implicit: item,
        index: index
      });
    });
  }
}
