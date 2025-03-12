const propiedades_alquiler = [
    {
    id: 1,
    nombre: 'Apartamento en el centro de la ciudad',
    src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
    descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
    ubicacion: '123 Main Street, Anytown, CA 91234',
    habitaciones: '2 ',
    baños:'2 ',
    costo: '2.000',
    smoke: false ,
    pets: true,
    },

    {
        id: 2,
        nombre: ' Apartamento luminoso con vista al mar',
        src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
        ubicacion: '456 Ocean Avenue,Seaside Town, CA 56789',
        habitaciones: '3 ',
        baños:'3 ',
        costo: ' 2.500',
        smoke: true ,
        pets: true,
        },

        {
            id: 3,
            nombre: 'Condominio moderno en zona residencial ',
            src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
            descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
            ubicacion: '123 Main Street, Anytown, CA 91234',
            habitaciones: '2 ',
            baños:'2 ',
            costo: '  2.200',
            smoke: false ,
            pets: false,
            },
            {
                id: 4,
                nombre: 'Hermosa residencia en venta dentro de exclusiva privada con vigilancia 24/7 y acceso controlado ',
                src: 'https://propiedades.com/_next/image?url=https%3A%2F%2Fpropiedadescom.s3.amazonaws.com%2Ffiles%2Foriginal%2Fcalzada-de-las-aguilas-lomas-axomiatla-alvaro-obregon-df-cdmx-27080054-foto-01.jpg&w=2048&q=75',
                descripcion: 'a privada cuenta con salón de fiestas, amplias zonas verdes con juegos infantiles, cancha de futbol rápido, pista para jogging y zona para meditar. ',
                ubicacion: 'Calz de las Águilas, Colonia Lomas Axomiatla',
                habitaciones: '4',
                baños:'4 ',
                costo: ' 5.000',
                smoke: true ,
                pets: true,
                },  
                {
                    id: 5,
                    nombre: 'Yo Soy Plenitud Luz Paz Armonía en la Naturaleza ',
                    src: 'https://a0.muscache.com/im/pictures/372e8ae7-fccd-4536-af33-2722f952542a.jpg?im_w=1200&im_format=avif',
                    descripcion: 'Relájate con toda la familia en este alojamiento donde la tranquilidad se respira. Plenitud, Paz, Armonía, en la Naturaleza. Con sus bellos Jardines, Alberca, Asador. ',
                    ubicacion: 'villa en Lomas de Cocoyoc, México',
                    habitaciones: '4 ',
                    baños:'4.5 ',
                    costo: '  4.000',
                    smoke: false ,
                    pets: true,
                    },
                    {
                        id: 6,
                        nombre: ' Hermosa casa en Cuernavaca Ficus',
                        src: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1123635427187757344/original/3484fec9-d62c-42ff-a36e-c793c93619e6.jpeg?im_w=1200&im_format=avif',
                        descripcion: 'Diviértete con toda la familia en este alojamiento con estilo Minimalista, completamente nueva.',
                        ubicacion: 'Cuernavaca, México',
                        habitaciones: '4 ',
                        baños:'3 ',
                        costo: '  3.100',
                        smoke: true ,
                        pets: true,
                        }
    ]


    const alquilerSection = document.getElementById('alquiler');
    let propiedadesHTML = ""; 
    
    for (const propiedad of propiedades_alquiler) {
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
    
    alquilerSection.innerHTML = propiedadesHTML;