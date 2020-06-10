import { ResourceInterface } from '../models/resource.interface';
import { InputSelectOption } from '../material/input-select/input-select.component';

export function getInputSelectOptions(resource: ResourceInterface[]): InputSelectOption[] {
    return resource.map(item => ({
        key: item.uuid,
        label: item.name
    }));
}
