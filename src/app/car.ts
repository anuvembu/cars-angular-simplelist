import { clearModulesForTest } from '@angular/core/src/linker/ng_module_factory_loader';

interface CarModel {
    make: string;
    model: string;
}

export class Car {
    name: string;
    cars: CarModel;
}