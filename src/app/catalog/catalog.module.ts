import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

import { CatalogComponent } from './catalog.component';
import { CatalogRepositoryService } from './catalog-repository.service';
import { FilterClassesService } from './filter-classes.service';
import { SharedModule } from '../shared/shared.module'

@NgModule({
    imports: [ RouterModule, SharedModule ],
    exports: [],
    declarations: [ CatalogComponent ],
    providers: [ CatalogRepositoryService, FilterClassesService ]
})

export class CatalogModule { }