import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //specifies the tag that can be used to call this component in HTML templates just like the standard HTML tags
  templateUrl: './app.component.html', //indicates the path of the HTML template that will be used to display this component
  styleUrls: ['./app.component.css'] //specifies an array of URLs for CSS style-sheets for the component
})

//The export keyword is used to export the component so that it can be imported from other components and modules in the application
export class AppComponent {
  title = 'median-ui';
}
