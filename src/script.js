
//Funcion procesDate procesa una cadena de fechas y la convierte en objeto date //
function processDates(datesStr) {
    const datesArray = datesStr.toLowerCase().split(',').map(date => date.trim());
    const dateRegex =  /^\d{2}(ene|jan|feb|mar|abr|apr|may|jun|jul|aug|ago|sep|oct|nov|dec|dic)\d{4}$/; //expr4esion regular para validra que la fecha sea ingresada en el formato correcto

    for (let date of datesArray) {
        if (!dateRegex.test(date)) {
            return null;
        }
    }

    return datesArray.map(dateStr => {
        const [day, month, year] = [parseInt(dateStr.substring(0, 2)), dateStr.substring(2, 5), parseInt(dateStr.substring(5))];
        return new Date(`${month} ${day}, ${year}`);
    });
}

//Valida si la fecha ingresada es un fin de semana (sabado o domingo)
function isWeekend(date) {
    const dayOfWeek = date.getDay(); // Se usa el metodo getDay() para obtener el dia de la semana (0: Sunday, 6: Saturday)
    return dayOfWeek === 0 || dayOfWeek === 6;
}

//Funcion para determinar el hotel mas barato basado en fechas y tiepo de cliente
function calculateTotalPrice(datesArray, customerType) {
    const hotels = [
        {
            name: 'Lakewood',
            rating: 3,
            rates: {
                weekday: customerType === 'Regular' ? 110 : 80,
                weekend: customerType === 'Regular' ? 90 : 80
            }
        },
        {
            name: 'Bridgewood',
            rating: 4,
            rates: {
                weekday: customerType === 'Regular' ? 160 : 110,
                weekend: customerType === 'Regular' ? 60 : 50
            }
        },
        {
            name: 'Ridgewood',
            rating: 5,
            rates: {
                weekday: customerType === 'Regular' ? 220 : 100,
                weekend: customerType === 'Regular' ? 150 : 40
            }
        }
    ];

    hotels.forEach(hotel => {
        hotel.totalPrice = 0;
        datesArray.forEach(date => {
            const isWeekendFlag = isWeekend(date);
            hotel.totalPrice += isWeekendFlag ? hotel.rates.weekend : hotel.rates.weekday;
        });
    });

    let cheapestHotel = hotels[0];
    for (let i = 1; i < hotels.length; i++) {
        const hotel = hotels[i];
        if (hotel.totalPrice < cheapestHotel.totalPrice ||
            (hotel.totalPrice === cheapestHotel.totalPrice && hotel.rating > cheapestHotel.rating)) {
            cheapestHotel = hotel;
        }
    }

    return cheapestHotel;
}

//Se usa para obtener el valor de un campo de entrada(imput)
document.getElementById('reservation-form').addEventListener('submit', function (e) { //controla la logica cuando el formulario de reserva es enviado.
    e.preventDefault();

    const inputDates = document.getElementById('dates').value;
    const validatedDates = processDates(inputDates); //obtiene las fechas ingresadas por el usuario y las valida usando processDates

    if (!validatedDates) {
        alert("Una o más fechas son inválidas. Por favor, ingrese fechas válidas en el formato ddMmmYYYY se debe colocar las 3 primeras letras de cada mes en ingles (ej: 16Mar2009,17Apr2024).");
        return;
    }

    const customerType = document.querySelector('input[name="customer-type"]:checked').value;

    const cheapestHotel = calculateTotalPrice(validatedDates, customerType);

    document.querySelectorAll('.hotel-card').forEach(card => card.classList.remove('highlight'));
    document.getElementById(cheapestHotel.name).classList.add('highlight');
    document.getElementById(`${cheapestHotel.name}-price`).innerText = `Total Price: $${cheapestHotel.totalPrice}`;
});
