export interface Livro {
    titulo: string;
    autor: string;  
    favorito: boolean;
    genero: Genero;
    imagem: string;
}

export interface Genero {
    id: number;
    value: string;
    livros: Livro[];
}