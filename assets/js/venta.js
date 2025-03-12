const propiedades_venta = [
    {
    id: 1,
    nombre: 'Apartamento de lujo en zona exclusiva',
    src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
    descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
    ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
    habitaciones: '4 ',
    baños:'4',
    costo: '5.000',
    smoke: false ,
    pets: false,
    },

    {
        id: 2,
        nombre: 'Apartamento acogedor en la montaña',
        src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
        descripcion: ' Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas.',
        ubicacion: '789 Mountain Road,  Summit Peaks, CA 23456',
        habitaciones: '2 ',
        baños:'1 ',
        costo: '1.200',
        smoke: true ,
        pets: true,  
    },

    {
        id: 3,
        nombre: 'Penthouse de lujo con terraza panorámica',
        src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        descripcion: ' Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares.',
        ubicacion: '567 Skyline Avenue,  Skyview City, CA 56789',
        habitaciones: '3 ',
        baños:'3 ',
        costo: '4.500',
        smoke: false ,
        pets: true,  
    },
    {
        id: 4,
        nombre: 'Casa Seminueva',
        src: 'https://img10.naventcdn.com/avisos/resize/18/01/45/02/24/87/1200x1200/1516271916.jpg?isFirstImage=true',
        descripcion: ' Casa residencial con 900m2 de Terreno y 1,200 m2.',
        ubicacion: 'Alpes, Lomas de Chapultepec.',
        habitaciones: '4 ',
        baños:'4 ',
        costo: '6.500',
        smoke: true ,
        pets: true,  
    },
    {
        id: 5,
        nombre: 'Casa con Jardin',
        src: 'https://img10.naventcdn.com/avisos/resize/18/01/44/87/12/34/1200x1200/1496642637.jpg?isFirstImage=true',
        descripcion: ' Casa en renta o venta en bosques de las lomas con gran jardín y vista panorámica.',
        ubicacion: 'Bosque de Manzanos, Bosques de las Lomas, Cuajimalpa de Morelos',
        habitaciones: '2 ',
        baños:'2',
        costo: '7.500',
        smoke: false ,
        pets: true,  
    },
    {
        id: 6,
        nombre: 'Recámara en Departamento Compartido',
        src: 'https://img10.naventcdn.com/avisos/resize/18/00/63/42/11/69/1200x1200/302107398.jpg?isFirstImage=true',
        descripcion: ' Recámara en departamento compartido con baño privado y completamente amueblado solo para mujeres, ubicado en Condesa Sur. ',
        ubicacion: 'Condesa Sur',
        habitaciones: '1 ',
        baños:'1',
        costo: '2.000',
        smoke: false ,
        pets: true,  
    }
    ]
    
      
      const ventasSection = document.getElementById('ventas');
let propiedadesHTML = ""; 

for (const propiedad of propiedades_venta) {
    const propiedadTemplateString = `
<div class="container">
 <div class="row">
    <div class="col-md-4 mb-4">
        <div class="card">
            <img
                src="${propiedad.src}"
                class="card-img-top"
                alt="Imagen del departamento"
            />
            <div class="card-body">
                <h5 class="card-title">
                    ${propiedad.nombre}
                </h5>
                <p class="card-text">
                    ${propiedad.descripcion}
                </p>
                <p>
                    <i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}
                </p>
                <p>
                    <i class="fas fa-bed"></i> ${propiedad.habitaciones} <span> Habitaciones</span> <span> |</span>
                    <i class="fas fa-bath"></i> ${propiedad.baños} <span>Baños</span>
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo} </p>
                <p>
                    <span class="${propiedad.smoke ? 'text-success' : 'text-danger'}">
                        <i class="${propiedad.smoke ? 'fas fa-smoking' : 'fas fa-smoking-ban'}"></i>
                        ${propiedad.smoke ? ' Permitido fumar' : ' No se permite fumar'}
                    </span>
                </p>
                <p>
                    <span class="${propiedad.pets ? 'text-success' : 'text-danger'}">
                        <i class="${propiedad.pets ? 'fas fa-paw' : 'fa-solid fa-ban'}"></i>
                        ${propiedad.pets ? ' Mascotas permitidas' : ' No se permiten mascotas'}
                    </span>
                </p>
            </div>
        </div>
   </div>
   </div>
   </div>

    `;

    propiedadesHTML += propiedadTemplateString; 
}

ventasSection.innerHTML = propiedadesHTML;