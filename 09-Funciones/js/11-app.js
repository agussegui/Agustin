const reproductor = {
    cancion: '',
    reproducir: id => console.log(`Reproduciendo canción con el id ${id}`),
    pausar: () => console.log('pausando'),
    borrar: id => console.log(`borrando cancion.. ${id}`),
    crearPlayList: nombre => console.log(`creando la playlist de ${nombre}`),
    reproducirPlaylist: nombre => console.log(`Reproduciendo la playlist ${nombre}`),

    //el this. sirve para buscar dentro del objeto y no se vaya hacia afuera
    //set forma de agregar valores
    set nuevaCancion(cancion) {
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
    },
    // forma de obtener de vuelta sus valores
    get obtenerCancion() {
        console.log(`${this.cancion}`)

    }

}

reproductor.nuevaCancion = "Enter Sandman";
reproductor.reproducir(20);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlayList("Heavy Metal");
reproductor.reproducirPlaylist("Heavy Metal moderna");