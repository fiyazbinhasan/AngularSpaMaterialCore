import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
    selector: 'counter',
    templateUrl: './counter.component.html',
    styles: [`
        .myButton {
            background-color: purple;
            color: white;
        }

        .myButton:hover {
            background-color: orange;
            color: white;
        }
    `],
    animations: [
        trigger('hoverAnimation', [
            transition(':enter', [   // :enter is alias to 'void => *'
                style({ opacity: 0 }),
                animate(250, style({ opacity: 1 }))
            ]),
            transition(':leave', [   // :leave is alias to '* => void'
                animate(100, style({ opacity: 0 }))
            ])
        ])
    ]
})
export class CounterComponent {
    public currentCount = 0;

    public incrementCounter() {
        this.currentCount++;
    }
}
