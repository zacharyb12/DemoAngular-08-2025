import { Routes } from '@angular/router';
import { HomeComponent } from '../Components/Pages/homepage/home-component/home-component';
import { DemoRouting } from '../Components/Pages/demo/demo-routing/demo-routing';
import { DemoHome } from '../Components/Pages/demo/demo-home/demo-home';
import { DemoBindings } from '../Components/Pages/demo/demo-bindings/demo-bindings';
import { ExoRouting } from '../Components/Pages/exo/exo-routing/exo-routing';
import { DemoPipe } from '../Components/Pages/demo/demo-pipe/demo-pipe';
import { DemoDirectives } from '../Components/Pages/demo/demo-directives/demo-directives';
import { DemoServices } from '../Components/Pages/demo/demo-services/demo-services';
import { DemoFormArray } from '../Components/Pages/demo/demo-formulaires/demo-form-array/demo-form-array';
import { DemoFormGroup } from '../Components/Pages/demo/demo-formulaires/demo-form-group/demo-form-group';
import { DemoFormControl } from '../Components/Pages/demo/demo-formulaires/demo-form-control/demo-form-control';
import { DemoStorages } from '../Components/Pages/demo/demo-storages/demo-storages';
import { DemoObservables } from '../Components/Pages/demo/demo-observables/demo-observables';
import { DemoHttpClient } from '../Components/Pages/demo/demo-http-client/demo-http-client';
import { DemoResolver } from '../Components/Pages/demo/demo-resolver/demo-resolver';
import { DemoInterceptor } from '../Components/Pages/demo/demo-interceptor/demo-interceptor';
import { DemoBuild } from '../Components/Pages/demo/demo-build/demo-build';
import { DemoInputOutputParent } from '../Components/Pages/demo/demo-input-output-parent/demo-input-output-parent';
import { DemoRouteList } from '../Components/Pages/demo/demo-route-list/demo-route-list';
import { DemoRouteDetails } from '../Components/Pages/demo/demo-route-details/demo-route-details';
import { shoppingResolver } from '../Components/shared/resolver/shoppingItem/shopping-resolver-resolver';
import { Compteur } from '../Components/Pages/exo/compteur/compteur';
import { ListeArticle } from '../Components/Pages/exo/liste-article/liste-article/liste-article';
import { ListeArticleService } from '../Components/Pages/exo/liste-article-service/liste-article-service/liste-article-service';
import { FanlistListe } from '../Components/Pages/exo/crud-fan-list/fanlist-liste/fanlist-liste';
import { FanlistCreate } from '../Components/Pages/exo/crud-fan-list/fanlist-create/fanlist-create';
import { FanlistDetails } from '../Components/Pages/exo/crud-fan-list/fanlist-details/fanlist-details';
import { FanlistUpdate } from '../Components/Pages/exo/crud-fan-list/fanlist-update/fanlist-update';


export const routes: Routes = [
    {path : "" , component : HomeComponent},
    {path : "demo" , component : DemoRouting , children: [
        {path: "", component: DemoHome},
        {path: "bindings", component: DemoBindings},
        {path: "pipes", component: DemoPipe},
        {path: "directives", component: DemoDirectives},
        {path: "input-output", component: DemoInputOutputParent},
        {path: "services", component: DemoServices},
        {path: "form-control", component: DemoFormControl},
        {path: "form-group", component: DemoFormGroup},
        {path: "form-array", component: DemoFormArray},
        {path: "routing-list", component: DemoRouteList},
        {path: "routing-details/:id", component: DemoRouteDetails},
        {path: "storages", component: DemoStorages},
        {path: "observables", component: DemoObservables},
        {path: "http-client", component: DemoHttpClient},
        {path: "resolver/:id", component: DemoResolver,resolve : { item : shoppingResolver}},
        {path: "interceptor", component: DemoInterceptor},
        {path: "build", component: DemoBuild},
    ]},
    {path : "exo" , component : ExoRouting , children: [
        {path: "compteur", component: Compteur },
        {path: "liste-article", component: ListeArticle },
        {path: "liste-article-service" , component: ListeArticleService},
        {path: "fan-list/liste", component: FanlistListe},
        {path: "fan-list/create", component: FanlistCreate},
        {path: "fan-list/details/:id", component: FanlistDetails},
        {path: "fan-list/update/:id", component: FanlistUpdate}
    ]},
];
