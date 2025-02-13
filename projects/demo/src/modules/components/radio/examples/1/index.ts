import {Component} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-radio-example-1',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiRadioExample1 {
    testForm = new UntypedFormGroup({
        testValue1: new UntypedFormControl('One'),
        testValue2: new UntypedFormControl({value: 'One', disabled: true}),
    });
}
