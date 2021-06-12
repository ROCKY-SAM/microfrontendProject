import { AfterContentInit, Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

 
@Component({
    selector: 'wrapper',
  template: '<div #vc></div>',
})
export class WrapperComponent implements AfterContentInit {
    registry = {
        mfe4: () => import('mfe4/web-components')
    };
  @ViewChild('vc', {read: ElementRef, static: true})
  vc!: ElementRef;

  constructor(private route: ActivatedRoute) { }

  ngAfterContentInit(): void {

    const importFn = this.registry["mfe4"];
    importFn()
      .then(_ => console.debug(`element loaded!`))
      .catch(err => console.error(`error loading :`, err));

    const element = document.createElement("mfe4-element");
    this.vc.nativeElement.appendChild(element);

  }

}