import data from './data.js'

// console.log(data);

//Pintamos las terjetas cuando carga el documento
pintCards('.containerCards', data);

//Fx que mapea los datos para pintarlos en el contenedor
function pintCards(containerCards, data){
    data.map(card => {
        let clases = 'card';
        if (!card.priceDiscount) clases += ' discount';
        if (!card.existence) clases += ' out';
        document.querySelector('.containerCards').innerHTML +=
        // containerCards.append(
            `
        <div class="${clases}">
          <div class="innerProd">
            <div class="imgWrapper">
              <div class="quickDetail" data-id="${card.id}">
                <div class="icono">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                    <path d="M39.049 39.049L56 56"></path>
                    <circle cx="27" cy="27" r="17"></circle>
                  </svg>
                </div>
                <p>Quick view</p>
              </div>
              <div class="imgProd" style="background-image: url(${card.image});"></div>
            </div>
            <a class="info" href="#">
              <p class="prodName">${card.name}</p>
              <p class="prodDesc">${card.descriptionShort}</p>
              <div class="prices">
                <p class="price">${card.priceDiscount || card.price}</p>
                <div>
                  ${card.priceDiscount ? `<p class="priceOriginal">${card.price}</p>`:''}
                  <p class="stock ${!card.existence ? 'out' :''}">${card.existence ? 'In existence' : 'Out of stock'}</p>
                </div>
              </div>
            </a>
            <div class="actions">
              <div class="button toCart">Add to cart</div>
              <div class="row-buttons">
                <div class="checkBox compare">
                  <input type="checkbox">
                  <div class="icon"></div>
                  <p class="checkBoxLabel">Compare</p>
                </div>
                <div class="aFavs favorites">
                  <div class="icono">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                      <path d="M47 5c-6.5 0-12.9 4.2-15 10-2.1-5.8-8.5-10-15-10A15 15 0 0 0 2 20c0 13 11 26 30 39 19-13 30-26 30-39A15 15 0 0 0 47 5z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>`
        ;
    })
}

function quickDetails(data){
    const { codigoProducto, descripcionLarga, existencia, imagen, nombre, precio, precioOferta } = datos;
    if (!$('.infoRapidaModal').length) {
        $('body').append(`
        <div class="infoRapidaModal">
          <div class="closeModal"></div>
          <div class="modalContainer">
            <div class="topContent">
              <div class="imagenContainer zoom_section">
                <div class="zoom_launcher zoomWatch" title="Ampliar imagen">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                    <path d="M2.002 40h22v22h-22z"></path>
                    <path d="M2 28V2h60v60H36"></path>
                    <path d="M30 34l22-22m-16 0h16v16"></path>
                  </svg>
                </div>
                <div class="zoom_imgOrigin wrapperImg">
                  <div class="zoom_imgSource imagen" style="background-image: url(${imagen});"></div>
                </div>
              </div>
              <div class="texto">
                <div class="wrapper">
                  <p class="nombre">${nombre}</p>
                  <div class="precios">
                    <p class="precio">${precioOferta || precio}</p>
                    ${precioOferta ? `<p class="precioOferta">${precio}</p>` :''}
                  </div>
                  <p class="stock ${existencia ?'':'out'} bold">${existencia ? 'Disponible en tienda y listo para enviar' : 'Fuera de stock'}</p>
                  <p class="codigo"><span class="bold">Código Producto: </span>${codigoProducto}</p>
                  <div class="actions">
                    <div class="component_toCartCantidad ${!existencia ? 'disabled':''}">
                      <div class="toCartBoton menos disabled"></div>
                      <div class="toCartCantidad">1</div>
                      <div class="toCartBoton mas"></div>
                    </div>
                    <div class="botonTextoIcono ${!existencia ? 'disabled' : ''}">
                      <label class="labelBoton">Agregar al carrito</label>
                      <div class="icono">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                          <path d="M2 6h10l10 40h32l8-24H16"></path>
                          <circle cx="23" cy="54" r="4"></circle>
                          <circle cx="49" cy="54" r="4"></circle>
                        </svg>
                      </div>
                    </div>
                    <div class="aFavs botonIcono">
                      <div class="icono">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                          <path d="M47 5c-6.5 0-12.9 4.2-15 10-2.1-5.8-8.5-10-15-10A15 15 0 0 0 2 20c0 13 11 26 30 39 19-13 30-26 30-39A15 15 0 0 0 47 5z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <p class="descripcion">${descripcionLarga}</p>
                  <a class="boton" href="#">Ver detalles completos</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      `);
    }
    $('.infoRapidaModal').fadeIn().css('display', 'flex');
    $('.infoRapidaModal .closeModal').click(function(){
        $(this).parent().fadeOut(function(){
            $(this).remove();
        })
    })
}