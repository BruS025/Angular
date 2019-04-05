import { HomeComponent } from "./components/home/home.component";
import { SearchComponent } from './components/search/search.component';
export var ROUTES = [
    { path: 'home', component: HomeComponent },
    { path: 'search', component: SearchComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
//# sourceMappingURL=app.routes.js.map