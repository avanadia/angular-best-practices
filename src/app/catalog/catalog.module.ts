import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

import { CatalogComponent } from './catalog.component';
import { CatalogRepositoryService } from './catalog-repository.service';
import { FilterClassesService } from './filter-classes.service';
import { SharedModule } from '../shared/shared.module';
import { OrderByPipe } from './order-by.pipe';

@NgModule({
    imports: [ RouterModule, SharedModule ],
    exports: [],
    declarations: [ CatalogComponent, OrderByPipe ],
    providers: [ CatalogRepositoryService, FilterClassesService ]
})

export class CatalogModule { }