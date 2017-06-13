import { merge } from 'lodash';

export const settings = {
    classNames: {
        row: 'row',
        cell: 'cell',
        table: '',
    },
    labels: {
        filterPlaceholder: 'Filter table…',
        filterResultEmpty: 'There are no matching rows',
    },
};

export function mergeSettings(newSettings) {
    merge(settings, newSettings);
};

export default {
    data: () => ({
        settings,
    }),
};
