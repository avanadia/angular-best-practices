import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

import { CatalogComponent } from './catalog.component';
import { CatalogRepositoryService } from './catalog-repository.service';
import { SharedModule } from '../shared/shared.module'

@NgModule({
    imports: [ RouterModule, SharedModule ],
    exports: [],
    declarations: [ CatalogComponent ],
    providers: [ CatalogRepositoryService ]
})

export class CatalogModule { }