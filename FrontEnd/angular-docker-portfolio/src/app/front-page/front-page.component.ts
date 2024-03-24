import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import posthog from 'posthog-js'

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.scss']
})
export class FrontPageComponent implements OnInit {

  constructor(private changeDetector: ChangeDetectorRef) { }

  buttonText: string = 'click me';

  ngOnInit(): void {
    posthog.onFeatureFlags(() => {
      if (posthog.isFeatureEnabled('new-landing-page')) {
        this.buttonText = 'Test feature flag capability'
        this.changeDetector.detectChanges();
      }
    })
  }

  onClick() {
    
  }
}
