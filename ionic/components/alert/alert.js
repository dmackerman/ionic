import {NgElement, Component, View, Parent} from 'angular2/angular2'
import {IonicComponent} from 'ionic/config/component'


@Component({
  selector: 'ion-alert'
})
@View({
  template: `
    <div class="overlay-backdrop"></div>
    <div class="overlay-container">
      <div class="alert-container">
        <div class="alert-header">
          Do you like cookies?
        </div>
        <div class="alert-content">
          Seriously, who does not like cookies.
        </div>
        <div class="alert-actions">
          <button class="button">OK</button>
        </div>
      </div>
    </div>`
})
export class Alert {
  constructor(
    @NgElement() ngElement:NgElement
  ) {
    this.domElement = ngElement.domElement
    this.domElement.classList.add('pane')
    this.domElement.classList.add('pane-overlay')

    this.config = Alert.config.invoke(this)
  }
}

new IonicComponent(Alert, {
  bind: {}
})