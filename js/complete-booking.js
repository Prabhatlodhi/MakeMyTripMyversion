let bookingTicketDetails = JSON.parse(localStorage.getItem("booking"));

let totalPassengers = localStorage.getItem("sum") ?? 0;
let totalAdults = localStorage.getItem("adults") ?? 0;
let totalChildren = localStorage.getItem("children") ?? 0;
let totalInfants = localStorage.getItem("infants") ?? 0;


console.log(totalAdults)
console.log(totalChildren)
console.log(totalInfants)




let bookingDetails = bookingTicketDetails[bookingTicketDetails.length-1];


const ticketPrice1 = document.querySelector('.basefare-price1');
const ticketPrice2 = document.querySelector('.basefare-price2');
const ticketPrice3 = document.querySelector('.basefare-price3');;
const ticketPrice4 = document.querySelector('.basefare-price4');;
const ticketPrice5 = document.querySelector('.basefare-price5');;
const ticketPriceAdultsTotal = document.querySelector('.basefare-price_adults_total');
const ticketPriceChildrenTotal = document.querySelector('.basefare-price_children_total');
const ticketPriceInfantsTotal = document.querySelector('.basefare-price_infants_total');
const totalNumberAdults =  document.querySelector('.total_no_adults');
const totalNumberChildren =  document.querySelector('.total_no_children');
const totalNumberInfants =  document.querySelector('.total_no_infants');


const numberOfPassenger = document.querySelector('.total_passenger');




console.log(totalNumberAdults.innerText)
let price = bookingDetails.ticket_price;
let price2=Number(price.slice(-4));





// numberOfPassenger.innerText = totalPassengers;

totalNumberAdults.innerText = totalAdults;
totalNumberChildren.innerText = totalChildren;
totalNumberInfants.innerText = totalInfants;



let totalAmountOfAdults = totalAdults * price2;
let totalAmountOfChildren = totalChildren * price2;
let totalAmountOfInfants = totalInfants * Math.floor(price2/2);
let discount;

let basePrice = totalAmountOfAdults + totalAmountOfChildren + totalAmountOfInfants;

ticketPriceAdultsTotal.innerText = totalAmountOfAdults;
ticketPriceChildrenTotal.innerText = totalAmountOfChildren;
ticketPriceInfantsTotal.innerText = totalAmountOfInfants;


ticketPrice1.innerText = basePrice;
ticketPrice2.innerText = price2;
ticketPrice3.innerText = price2;
ticketPrice4.innerText = Math.floor(price2/2);
ticketPrice5.innerText = basePrice + 973;

const discountSection = document.querySelector('.fee--surcharge1');
const promoCodeMessage = document.querySelector('.promo_message');



const discountAmount1 = document.querySelector('.surcharge-price1');
const discountAmount2 = document.querySelector('.surcharge-price2');




document.getElementById('promo_code_1').addEventListener('click', ()=>{
    discount=550;
    discountSection.classList.remove('displayn');
      if(discount!==undefined){
      promoCodeMessage.style.display="block";
      setTimeout(()=>{
          promoCodeMessage.style.display="none";
      },2000)
    }
    console.log(discount)
    console.log("helloooooooo")
      discountAmount1.innerText = discount;
    discountAmount2.innerText = discount;
    ticketPrice5.innerText = basePrice + 973-discount;
  
    localStorage.setItem("total_amount", ticketPrice5.innerText )
   })
  
  
   document.getElementById('promo_code_2').addEventListener('click', ()=>{
    discount=850;
    discountSection.classList.remove('displayn');
      if(discount!==undefined){
      promoCodeMessage.style.display="block";
      setTimeout(()=>{
          promoCodeMessage.style.display="none";
      },2000)
    }
      discountAmount1.innerText = discount;
    discountAmount2.innerText = discount;
    ticketPrice5.innerText = basePrice + 973-discount;
  
    localStorage.setItem("total_amount", ticketPrice5.innerText )
   })
  
   document.getElementById('promo_code_3').addEventListener('click', ()=>{
    discount=1050;
    discountSection.classList.remove('displayn');
      if(discount!==undefined){
      promoCodeMessage.style.display="block";
      setTimeout(()=>{
          promoCodeMessage.style.display="none";
      },2000)
    }
      discountAmount1.innerText = discount;
    discountAmount2.innerText = discount;
    ticketPrice5.innerText = basePrice + 973-discount;
  
    localStorage.setItem("total_amount", ticketPrice5.innerText )
   })
  
   document.getElementById('promo_code_4').addEventListener('click', ()=>{
    discount=1250;
    discountSection.classList.remove('displayn');
      if(discount!==undefined){
      promoCodeMessage.style.display="block";
      setTimeout(()=>{
          promoCodeMessage.style.display="none";
      },2000)
    }
      discountAmount1.innerText = discount;
    discountAmount2.innerText = discount;
    ticketPrice5.innerText = basePrice + 973-discount;
  
    localStorage.setItem("total_amount", ticketPrice5.innerText )
   })


const airDepartCity = document.querySelector('.air_depart_city');
const airArriveCity = document.querySelector('.air_arrive_city');

const airDepartCity1 = document.querySelector('.air_depart_city1');
const airArriveCity1 = document.querySelector('.air_arrive_city1');

const airDepartCity2 = document.querySelector('.air_depart_city2');
const airArriveCity2 = document.querySelector('.air_arrive_city2');

const departAirport = document.querySelector('.depart_airport_cb');
const arriveAirport = document.querySelector('.arrive_airport_cb');


airDepartCity.innerText = bookingDetails.departure_city;
airArriveCity.innerText = bookingDetails.arrival_city;
airDepartCity1.innerText = bookingDetails.departure_city;
airArriveCity1.innerText = bookingDetails.arrival_city;
airDepartCity2.innerText = bookingDetails.departure_city;
airArriveCity2.innerText = bookingDetails.arrival_city;
departAirport.innerText = bookingDetails.departure_airport;
arriveAirport.innerText = bookingDetails.arrival_airport;

