import {Component} from '@angular/core';
import {UntypedFormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-input-slider-example-1',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiInputSliderExample1 {
    readonly min = 5;
    readonly max = 20;
    readonly sliderStep = 1;
    readonly steps = (this.max - this.min) / this.sliderStep;
    readonly quantum = 0.01;

    readonly hint = `Dragging slider change input by ${this.sliderStep}.\nBut you can type decimal number which is multiple of ${this.quantum}.`;

    readonly control = new UntypedFormControl(6.5);
}
