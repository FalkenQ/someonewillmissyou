"use strict"

const countrySelect = document.querySelector("#country");
const hotlineInfo = document.querySelector("#hotline-info");

const hotlineMessage = document.createElement("li");
hotlineMessage.textContent = "Choose a country.";
hotlineInfo.appendChild(hotlineMessage);

// Eventlyssnare för att visa rätt information efter vilker land användaren väljer
countrySelect.addEventListener("change", function() {
    const selectedCountry = countrySelect.value;
    const hotlineNumberEl = document.createElement("li");
    const hotlineHoursEl = document.createElement("li");
    const hotlineEmergencyEl = document.createElement("li");

    hotlineInfo.textContent = "";

    // if sats för att kolla vilket land som valt och utskrift av rätt information
    if(selectedCountry === "se") {

        hotlineNumberEl.textContent = "Telefon: 90 390.";
        hotlineHoursEl.textContent = "Öppettider: Dygnet runt.";
        hotlineEmergencyEl.textContent = "Akut fara: 112";

        hotlineInfo.append(hotlineNumberEl, hotlineHoursEl, hotlineEmergencyEl);

    } else if(selectedCountry === "no") {
        
        hotlineNumberEl.textContent = "Telefonen: 116 123.";
        hotlineHoursEl.textContent = "Åpningstider: Døgnet rundt.";
        hotlineEmergencyEl.textContent ="Overhengende fare: 113.";

        hotlineInfo.append(hotlineNumberEl, hotlineHoursEl, hotlineEmergencyEl);

    } else if(selectedCountry === "fi") {

        hotlineNumberEl.textContent = "puhelin: 09 2525 0111.";
        hotlineHoursEl.textContent = "aukioloajat: vuorokauden ympäri.";
        hotlineEmergencyEl.textContent = "välitön vaara: 112.";

        hotlineInfo.append(hotlineNumberEl, hotlineHoursEl, hotlineEmergencyEl);

    } else if(selectedCountry === "dk") {

        hotlineNumberEl.textContent = "Telefon: 70 201 201.";
        hotlineHoursEl.textContent = "åbningstider: 11.00 - 05.00.";
        hotlineEmergencyEl.textContent = "overhængende fare: 112.";

        hotlineInfo.append(hotlineNumberEl, hotlineHoursEl, hotlineEmergencyEl);

    } else if(selectedCountry === "is") {

        hotlineNumberEl.textContent = "sími: 1717.";
        hotlineHoursEl.textContent = "opnunartími: allan sólarhringinn.";
        hotlineEmergencyEl.textContent = "yfirvofandi hætta: 112.";

        hotlineInfo.append(hotlineNumberEl, hotlineHoursEl, hotlineEmergencyEl);

    } else {

        // Återställer till start
        const hotlineMessage = document.createElement("li");
        hotlineMessage.textContent = "Choose a country.";
        hotlineInfo.appendChild(hotlineMessage);

    }
});