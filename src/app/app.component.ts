import { Component } from '@angular/core';
import { UsuarioService } from './login/service/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'asilo-arkham-angular';
  mostraMenu: boolean=false;

  constructor(private usuarioService:UsuarioService){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.usuarioService.mostrarMenuEmitter.subscribe(

      ( mostrar: boolean) =>  this.mostraMenu=mostrar

    );
  }
}
