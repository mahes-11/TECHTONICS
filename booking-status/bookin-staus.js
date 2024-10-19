document.addEventListener('DOMContentLoaded', function() {
    const bookings = [
        {id: 1, timeSlot: '2024-10-20T10:00:00', status: 'pending'},
        {id: 2, timeSlot: '2024-10-21T11:00:00', status: 'accepted'},
        {id: 3, timeSlot: '2024-10-22T14:00:00', status: 'rejected'},
        {id: 4, timeSlot: '2024-10-23T09:00:00', status: 'pending'}
    ];

    bookings.forEach(booking => {
        const statusMessage = document.getElementById(`statusMessage${booking.id}`);
        const cancelButton = document.getElementById(`cancelButton${booking.id}`);
        const timeSlot = new Date(booking.timeSlot);
        const currentTime = new Date();

        if (timeSlot < currentTime && booking.status === 'pending') {
            statusMessage.className = 'status-message expired';
            statusMessage.innerHTML = '<p>Booking Expired</p>';
        } else {
            statusMessage.className = `status-message ${booking.status}`;
            statusMessage.innerHTML = `<p>Booking ${booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}</p>`;
        }

        cancelButton.addEventListener('click', function() {
            if (confirm('Are you sure you want to cancel this booking?')) {
                statusMessage.className = 'status-message rejected';
                statusMessage.innerHTML = '<p>Booking Cancelled</p>';
            }
        });
    });
});