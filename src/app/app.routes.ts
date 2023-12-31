import { Routes } from '@angular/router';
import { HelpComponent } from './components/help/help.component';
import { SpacePlannerComponent } from './components/space-planner/space-planner.component';

export const routes: Routes = [
    { path: '', component: SpacePlannerComponent },
    { path: 'help', component: HelpComponent },
    { path: '**', redirectTo: '' }
];
