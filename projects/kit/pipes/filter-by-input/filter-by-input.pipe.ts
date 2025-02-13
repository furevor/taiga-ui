import {Inject, Optional, Pipe, PipeTransform} from '@angular/core';
import {
    TUI_DEFAULT_MATCHER,
    TUI_DEFAULT_STRINGIFY,
    TUI_FOCUSABLE_ITEM_ACCESSOR,
    TuiFocusableElementAccessor,
    TuiStringMatcher,
} from '@taiga-ui/cdk';
import {TUI_DATA_LIST_HOST, TuiDataListHost} from '@taiga-ui/core';
import {TuiMultiSelectDirective} from '@taiga-ui/kit/components/multi-select';

import {AbstractTuiFilterByInput, TuiArrayElement} from './filter-by-input.base';

@Pipe({
    name: 'tuiFilterByInput',
    pure: false,
})
export class TuiFilterByInputPipe
    extends AbstractTuiFilterByInput
    implements PipeTransform
{
    constructor(
        @Inject(TUI_FOCUSABLE_ITEM_ACCESSOR)
        protected readonly accessor: TuiFocusableElementAccessor,
        @Inject(TUI_DATA_LIST_HOST)
        private readonly host: TuiDataListHost<unknown>,
        @Optional()
        @Inject(TuiMultiSelectDirective)
        protected readonly multiSelect: unknown,
    ) {
        super();
    }

    transform<T>(items: T, matcher?: TuiStringMatcher<TuiArrayElement<T>>): T;
    transform<T>(
        items: ReadonlyArray<readonly T[]> | readonly T[] | null,
        matcher: TuiStringMatcher<T> = TUI_DEFAULT_MATCHER,
    ): ReadonlyArray<readonly T[]> | readonly T[] | null {
        return this.filter(
            items,
            matcher,
            this.host.stringify || TUI_DEFAULT_STRINGIFY,
            this.query,
        );
    }
}
