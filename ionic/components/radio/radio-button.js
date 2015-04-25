import {NgElement, Component, View} from 'angular2/angular2'
import {ComponentConfig} from 'ionic/config/component-config';

export let RadioConfig = new ComponentConfig('radio');

@Component({
  selector: 'ion-radio',
  injectables: [RadioConfig]
})
@View({
  template: `
    <div class="item-content">

      <div class="item-title">
        <content></content>
      </div>

      <div class="item-media media-radio">
        <icon class="radio-off"></icon>
        <icon class="ion-ios-checkmark-empty radio-on"></icon>
      </div>

    </div>
  `
})
export class RadioButton {
  constructor(
    configFactory: RadioConfig,
    element: NgElement
  ) {
    this.domElement = element.domElement
    this.domElement.classList.add('item')
    this.domElement.setAttribute('aria-checked', true)

    configFactory.create(this)
  }
}