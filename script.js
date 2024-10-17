document.addEventListener("DOMContentLoaded", function () {
    const dateSelector = document.getElementById('date-selector');
    const openSelectorButton = document.getElementById('open-selector');
    const numberInputContainer = document.getElementById('number-input-container');
    const numberInput = document.getElementById('number-of-people'); // Update this line
    const forwardbtn = document.getElementById("forwardbtn");

    let dateSelected = false; // Track if a date has been selected
    let selectedDate = ""; // Store the selected date

    openSelectorButton.addEventListener('click', (event) => {
        event.stopPropagation();
        dateSelector.classList.toggle('hidden');
        generateWeekDates();
    });

    document.addEventListener('click', (event) => {
        if (!dateSelector.contains(event.target) && event.target !== openSelectorButton) {
            dateSelector.classList.add('hidden');
        }
    });

    function generateWeekDates() {
        dateSelector.innerHTML = ''; // Clear previous dates
        const today = new Date();
        const dayOfWeek = today.getDay(); // Get the current day
    
        // Array of Spanish weekday abbreviations
        const weekdays = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
        
        // Array of Spanish month abbreviations
        const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    
        const diffToMonday = (dayOfWeek + 6) % 7; // Calculate the difference to get to the previous Monday
        const startOfWeek = new Date(today);
        startOfWeek.setDate(today.getDate() - diffToMonday); // Set to Monday
    
        // Generate dates from today to the end of the week (Sunday)
        for (let i = 0; i < 7 - (dayOfWeek === 0 ? 0 : diffToMonday); i++) {
            const date = new Date(today);
            date.setDate(today.getDate() + i); // Set to today + i
    
            // Create a date div
            const dateDiv = document.createElement('div');
            dateDiv.className = 'date';
            
            // Get the abbreviated weekday and month in Spanish
            const dayAbbreviation = weekdays[date.getDay()]; // Get the abbreviation
            const monthAbbreviation = months[date.getMonth()]; // Get the month abbreviation
            const year = date.getFullYear(); // Get the year
    
            // Format: "Lun Ene 1, 2024"
            dateDiv.textContent = `${dayAbbreviation} ${monthAbbreviation} ${date.getDate()}, ${year}`;
    
            // Add click event for date selection
            dateDiv.addEventListener('click', () => {
                document.querySelectorAll('.date').forEach(d => d.classList.remove('selected'));
                dateDiv.classList.add('selected');
            
                // Format the selected date in Spanish
                const dayAbbreviation = weekdays[date.getDay()];
                const monthAbbreviation = months[date.getMonth()];
                const year = date.getFullYear();
                
                selectedDate = `${dayAbbreviation} ${monthAbbreviation} ${date.getDate()}, ${year}`; // Format in Spanish
            
                openSelectorButton.textContent = selectedDate; // Update button text
                dateSelector.classList.add('hidden'); // Close the selector
                numberInputContainer.style.display = 'block'; // Show input after selection
                dateSelected = true; // Set date selected to true
                forwardbtn.disabled = false; // Enable the forward button
            });
    
            dateSelector.appendChild(dateDiv);
        }
    }
    

    forwardbtn.onclick = function() {
        if (dateSelected) {
            const numberOfPeople = numberInput.value; // Get the number of people
            const url = `registration.html?date=${encodeURIComponent(selectedDate)}&number=${encodeURIComponent(numberOfPeople)}`;
            window.open(url, "_blank");
        }
    };

    // Initially disable the forward button
    forwardbtn.disabled = true;
});



document.addEventListener("DOMContentLoaded", function () {
    const numberInput = document.getElementById('number-of-people');

    numberInput.addEventListener('input', function () {
        // Parse the current value as a number
        const value = Number(this.value);
        
        // Check if the value exceeds the maximum limit
        if (value > 15) {
            this.value = 15; // Set it back to 15 if it exceeds
        }
    });
});

const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
  });



