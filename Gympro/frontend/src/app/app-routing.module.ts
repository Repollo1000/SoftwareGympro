import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'gympro',
    pathMatch: 'full'
  },
  {
    path: 'gympro',
    loadChildren: () => import('./paginas/gympro/gympro.module').then(m => m.GymproPageModule),
  },
  {
    path: 'registro',
    loadChildren: () => import('./paginas/registro/registro.module').then(m => m.RegistroPageModule)
  },
  {
    path: 'inicio-sesion',
    loadChildren: () => import('./paginas/inicio-sesion/inicio-sesion.module').then(m => m.InicioSesionPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./paginas/inicio/inicio.module').then(m => m.InicioPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'servicios',
    loadChildren: () => import('./paginas/servicios/servicios.module').then(m => m.ServiciosPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'seguimiento',
    loadChildren: () => import('./paginas/seguimiento/seguimiento.module').then(m => m.SeguimientoPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'clases',
    loadChildren: () => import('./paginas/clases/clases.module').then(m => m.ClasesPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'maquinas',
    loadChildren: () => import('./paginas/maquinas/maquinas.module').then(m => m.MaquinasPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'corporal',
    loadChildren: () => import('./paginas/corporal/corporal.module').then(m => m.CorporalPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'perfil',
    loadChildren: () => import('./paginas/perfil/perfil.module').then(m => m.PerfilPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'reserva',
    loadChildren: () => import('./paginas/reserva/reserva.module').then(m => m.ReservaPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'entrenamiento',
    loadChildren: () => import('./paginas/entrenamiento/entrenamiento.module').then(m => m.EntrenamientoPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'gestion-membresia',
    loadChildren: () => import('./paginas/gestion-membresia/gestion-membresia.module').then(m => m.GestionMembresiaPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'create-clase',
    loadChildren: () => import('./paginas/create-clase/create-clase.module').then(m => m.CreateClasePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'evaluacion-corporal',
    loadChildren: () => import('./paginas/evaluacion-corporal/evaluacion-corporal.module').then(m => m.EvaluacionCorporalPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'subir-servicios',
    loadChildren: () => import('./paginas/subir-servicios/subir-servicios.module').then(m => m.SubirServiciosPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'subir-maquinas',
    loadChildren: () => import('./paginas/subir-maquinas/subir-maquinas.module').then(m => m.SubirMaquinasPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'subir-entrenamiento',
    loadChildren: () => import('./paginas/subir-entrenamiento/subir-entrenamiento.module').then( m => m.SubirEntrenamientoPageModule),
    canActivate: [AuthGuard]
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
