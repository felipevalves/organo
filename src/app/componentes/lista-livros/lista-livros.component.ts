import { Component, OnInit } from '@angular/core';
import { Genero, Livro } from '../livro/livro';
import { livros } from '../../mock-livros';
import { GeneroComponent } from '../genero/genero.component';

@Component({
  selector: 'app-lista-livros',
  imports: [GeneroComponent],
  templateUrl: './lista-livros.component.html',
  styleUrl: './lista-livros.component.css'
})
export class ListaLivrosComponent implements OnInit {
  generos: Genero[] = [];
  livrosGenero: Map<number, Livro[]> = new Map();

  ngOnInit(){
    this.livrosGenero = new Map();

    livros.forEach(livro => {
      const generoId = livro.genero.id;

      if (!this.livrosGenero.has(generoId)) {
        this.livrosGenero.set(generoId, []);
      }
      this.livrosGenero.get(generoId)?.push(livro)
    })

    this.generos = [ {
      id: 1,
      value: 'Ficção Científica',
      livros: this.livrosGenero.get(1) ?? []
    },
    {
      id: 2,
      value: 'Fantasia',
      livros: this.livrosGenero.get(2) || []
    },
    {
      id: 3,
      value: 'Romance',
      livros: this.livrosGenero.get(3) || []
    },
    {
      id: 4,
      value: 'Terror',
      livros: this.livrosGenero.get(4) || []
    }]

    console.log(this.livrosGenero);
  }

}
