let passangerName = prompt("What is Your Name?");
let age = prompt("Enter your age?");
let destination = prompt("Where are you headed?");
let walletBalance = prompt("Enter your wallet balance");

passangerName = passangerName.trim().toLowerCase();
age = Number(age);
destination = destination.trim().toUpperCase();
walletBalance = parseFloat(walletBalance);

switch (destination) {
    case "ENUGU":
        alert(`${passangerName}, Bus to Enugu Booked. proceed to pay for the ticket.`);
        break;

    case "ONITSHA":
        alert(`${passangerName}, Bus to Onitsha Booked. proceed to pay for the ticket.`);    
        break;

    case "OWERRI":
        alert(`${passangerName}, Bus to Owerri Booked. proceed to pay for the ticket.`);
        break;

    case "ABUJA":
        alert(`${passangerName}, Bus to Abuja Booked. proceed to pay for the ticket.`);
        break;

    case "LAGOS":
    alert(`${passangerName}, Bus to Lagos Booked. proceed to pay for the ticket.`); 
    break;

    default:
      alert("Sorry, we only go to: Enugu, Onitsha, Owerri, Lagos, Abuja");
        break;
}

 let ticketPrice = 0;
 if (destination === "ENUGU") {
    ticketPrice = 1000;

 } else if (destination === "ONITSHA") {
    ticketPrice = 3500;

 } else if (destination === "OWERRI") {
    ticketPrice = 5000;

 } else if (destination === "ABUJA") {
    ticketPrice = 12000;

 } else if (destination === "LAGOS") {
    ticketPrice = 15000;

 }

 ticketPrice = parseFloat(ticketPrice);

if (passangerName === "") {
    alert(`Please input your Name.`);

} else if (Number.isNaN(age)) {
     alert(`Enter a valid age number`);

} else if (age < 5) {
    alert(`You Must Be Atleast Five To Board A Destination.`);

} else if (destination === "") {
    alert(`Please Enter a Valid destination.`);

} else if (Number.isNaN(walletBalance)) {
    alert(`Please, wallet balance should be in digits or number`);

} else if (Number.isNaN(ticketPrice)) {
   alert(`PLease, enter price in numbers.`);   

} else if (ticketPrice >= walletBalance) {
    alert(`You Don't have enough money to book your destination, kindly top-up your ${walletBalance}.`);

} else {
    let busTransaction = walletBalance - ticketPrice;
   alert(`Payment successful!\nTicket: ₦${ticketPrice.toFixed(2)}\nNew Balance: ₦${busTransaction.toFixed(2)}`);
    console.log(`New Balance: ${busTransaction.toFixed(2)}`);
}
