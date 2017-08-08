import merge from 'lodash/merge';

const settings = {
    tableClass: '',
    headerClass: '',
    cellClass: '',
    filterInputClass: '',
    filterPlaceholder: 'Filter table…',
    filterNoResults: 'There are no matching rows',
};

export function mergeSettings(newSettings) {
    merge(settings, newSettings);
}

export default settings;
