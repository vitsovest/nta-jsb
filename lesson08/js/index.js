import data from './data.js'

// console.log(data);

//Render product cards from data array
pintCards('.cards .containerCards', data);



//Fill the container with data, create elements
function pintCards(containerCards, data){
    data.map(card => {
        let clases = 'card';
        if (!card.priceDiscount) clases += ' discount';
        if (!card.existence) clases += ' out';
        // console.log('exist',!card.existence);
        console.log('exist',clases);
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

// function quickDetails(data){
//     const { productCode, descriptionLarge, existence, image, name, price, priceDiscount } = data;
//     if (!('.quickInfoModal').length) {
//         ('body').append(`
//         <div class="quickInfoModal">
//           <div class="closeModal"></div>
//           <div class="modalContainer">
//             <div class="topContent">
//               <div class="imageContainer zoom_section">
//                 <div class="zoom_launcher zoomWatch" title="Zoom in">
//                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
//                     <path d="M2.002 40h22v22h-22z"></path>
//                     <path d="M2 28V2h60v60H36"></path>
//                     <path d="M30 34l22-22m-16 0h16v16"></path>
//                   </svg>
//                 </div>
//                 <div class="zoom_imgOrigin wrapperImg">
//                   <div class="zoom_imgSource imagen" style="background-image: url(${image});"></div>
//                 </div>
//               </div>
//               <div class="text">
//                 <div class="wrapper">
//                   <p class="name">${name}</p>
//                   <div class="price">
//                     <p class="price">${priceDiscount || price}</p>
//                     ${priceDiscount ? `<p class="precioOferta">${price}</p>` :''}
//                   </div>
//                   <p class="stock ${existence ?'':'out'} bold">${existence ? 'Available in store and ready to ship' : 'Out of stock'}</p>
//                   <p class="code"><span class="bold">Product code: </span>${productCode}</p>
//                   <div class="actions">
//                     <div class="component_toCartCantidate ${!existence ? 'disabled':''}">
//                       <div class="toCartButton less disabled"></div>
//                       <div class="toCartCantidate">1</div>
//                       <div class="toCartButton more"></div>
//                     </div>
//                     <div class="buttonTextIcon ${!existence ? 'disabled' : ''}">
//                       <label class="labelButton">Add to cart</label>
//                       <div class="icono">
//                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
//                           <path d="M2 6h10l10 40h32l8-24H16"></path>
//                           <circle cx="23" cy="54" r="4"></circle>
//                           <circle cx="49" cy="54" r="4"></circle>
//                         </svg>
//                       </div>
//                     </div>
//                     <div class="aFavs buttonIcono">
//                       <div class="icono">
//                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
//                           <path d="M47 5c-6.5 0-12.9 4.2-15 10-2.1-5.8-8.5-10-15-10A15 15 0 0 0 2 20c0 13 11 26 30 39 19-13 30-26 30-39A15 15 0 0 0 47 5z"></path>
//                         </svg>
//                       </div>
//                     </div>
//                   </div>
//                   <p class="description">${descriptionLarge}</p>
//                   <a class="button" href="#">See full details</a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       `);
//     }
//     $('.quickInfoModal').fadeIn().css('display', 'flex');
//     $('.quickInfoModal .closeModal').click(function(){
//         $(this).parent().fadeOut(function(){
//             $(this).remove();
//         })
//     })
// }