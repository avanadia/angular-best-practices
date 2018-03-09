import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { RegisterComponent } from './register.component';
import { SignInComponent } from './sign-in.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        SharedModule,
        RouterModule
    ],
    exports: [],
    declarations: [
        RegisterComponent,
        SignInComponent
    ],
    providers: []
}) 

export class UserModule { }
