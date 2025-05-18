import { Component, input } from '@angular/core';
import { LivroComponent } from '../livro/livro.component';
import { livros } from '../../mock-livros';
import { Genero } from '../livro/livro';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-genero',
  imports: [LivroComponent,
    CommonModule
  ],
  templateUrl: './genero.component.html',
  styleUrl: './genero.component.css'
})
export class GeneroComponent {

  genero = input.required<Genero>();
  
}
