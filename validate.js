const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  const eventId = document.getElementById('event-id');
  const eventName = document.getElementById('event-name');
  const eventDate = document.getElementById('event-date');
  const organizerEmail = document.getElementById('organizer-email');
  const organizerPhone = document.getElementById('organizer-phone');
  const eventDescription = document.getElementById('event-description');
  const eventType = document.getElementById('event-type');
  const eventLocation = document.getElementById('event-location');
  const eventStatus = document.getElementById('event-status');
  const maxSeats = document.getElementById('max-seats');

  let errors = [];

  if (eventId.value.trim() === '') {
    errors.push('Event ID is required');
  }

  if (eventName.value.trim() === '') {
    errors.push('Event Name is required');
  }

  if (eventDate.value === '') {
    errors.push('Event Date is required');
  } else {
    const today = new Date();
    const inputDate = new Date(eventDate.value);

    if (inputDate < today) {
      errors.push('Event Date must be in the future');
    }
  }

  if (organizerEmail.value.trim() === '') {
    errors.push('Organizer Email is required');
  } else if (!/^\S+@\S+\.\S+$/.test(organizerEmail.value)) {
    errors.push('Organizer Email is invalid');
  }

  if (organizerPhone.value.trim() === '') {
    errors.push('Organizer Phone is required');
  } else if (!/^\d{10}$/.test(organizerPhone.value)) {
    errors.push('Organizer Phone is invalid');
  }

  if (eventDescription.value.trim() === '') {
    errors.push('Event Description is required');
  }

  if (eventType.value === '') {
    errors.push('Event Type is required');
  }

  if (eventLocation.value.trim() === '') {
    errors.push('Event Location is required');
  }

  if (eventStatus.value === '') {
    errors.push('Event Status is required');
  }

  if (maxSeats.value === '' || isNaN(maxSeats.value) || maxSeats.value < 1 || !Number.isInteger(Number(maxSeats.value))) {
    errors.push('Max Seats must be a positive integer');
  }

  if (errors.length > 0) {
    event.preventDefault();
    const errorMessage = errors.join('\n');
    alert(errorMessage);
  }
});
