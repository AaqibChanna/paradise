
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".booking-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent page reload

    // Get form values
    const name = form.querySelector('input[type="text"]').value.trim();
    const email = form.querySelector('input[type="email"]').value.trim();
    const checkIn = new Date(form.querySelectorAll('input[type="date"]')[0].value);
    const checkOut = new Date(form.querySelectorAll('input[type="date"]')[1].value);
    const roomType = form.querySelector("select").value;

    const today = new Date();
    today.setHours(0, 0, 0, 0); // Remove time part for accurate comparison

    // Validate that check-in is not in the past
    if (checkIn < today) {
      alert("Check-in date cannot be in the past. Please select a valid date.");
      return;
    }

    // Validate that check-out is after check-in
    if (checkOut <= checkIn) {
      alert("Check-out date must be after check-in date.");
      return;
    }

    // Create booking object
    const booking = {
      name,
      email,
      checkIn: checkIn.toISOString().split('T')[0],
      checkOut: checkOut.toISOString().split('T')[0],
      roomType,
    };

    // Save to localStorage (optional)
    let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    bookings.push(booking);
    localStorage.setItem("bookings", JSON.stringify(bookings));

    // Show confirmation message
    alert(
      `Thank you, ${name}!\nYour booking for a ${roomType} is confirmed from ${booking.checkIn} to ${booking.checkOut}.\nA confirmation email will be sent to ${email}.`
    );

    // Reset form after successful booking
    form.reset();
  });
});
