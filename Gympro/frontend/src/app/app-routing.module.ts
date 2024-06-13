import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'gympro',
    loadChildren: () => import('./paginas/gympro/gympro.module').then( m => m.GymproPageModule)
  },
  {
    path: '',
    redirectTo: 'gympro',
    pathMatch: 'full'
  },
  {
    path: 'registro',
    loadChildren: () => import('./paginas/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'inicio-sesion',
    loadChildren: () => import('./paginas/inicio-sesion/inicio-sesion.module').then( m => m.InicioSesionPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./paginas/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'servicios',
    loadChildren: () => import('./paginas/servicios/servicios.module').then( m => m.ServiciosPageModule)
  },
  {
    path: 'seguimiento',
    loadChildren: () => import('./paginas/seguimiento/seguimiento.module').then( m => m.SeguimientoPageModule)
  },
  {
    path: 'clases',
    loadChildren: () => import('./paginas/clases/clases.module').then( m => m.ClasesPageModule)
  },
  {
    path: 'maquinas',
    loadChildren: () => import('./paginas/maquinas/maquinas.module').then( m => m.MaquinasPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
