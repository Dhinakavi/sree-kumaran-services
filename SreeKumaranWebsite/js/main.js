document.addEventListener("DOMContentLoaded", () => {
    // Mobile Navigation Toggle
    const hamburger = document.getElementById("hamburger");
    const navbar = document.getElementById("navbar");

    if (hamburger) {
        hamburger.addEventListener("click", () => {
            navbar.classList.toggle("active");
        });
    }

    // Smooth Scrolling for Navigation Links
    const navLinks = document.querySelectorAll('.nav-link, .btn-more, .footer-col a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});

const serviceDetailsData = {
    electrical: {
        title: "Electrical Services & Rate Card (Ambattur Market)",
        description: "Professional electrical repair, wiring, and installation services carried out by licensed technicians in Ambattur and surrounding areas.",
        packages: [
            {
                tier: "Normal",
                price: "₹149 - ₹299",
                type: "Basic / Inspection",
                features: [
                    "<i class='fa-solid fa-check'></i> Labor charges for simple repairs",
                    "<i class='fa-solid fa-check'></i> Single fixture fix (Fan/Light/Switch)",
                    "<i class='fa-solid fa-xmark' style='color:#e74c3c;'></i> Spare parts excluded",
                    "<i class='fa-solid fa-check'></i> Standard 24-48 hr slot"
                ]
            },
            {
                tier: "Premium",
                price: "₹499 - ₹999",
                type: "Standard Installation",
                recommended: true,
                features: [
                    "<i class='fa-solid fa-check'></i> Complete setup / MCB replacement",
                    "<i class='fa-solid fa-check'></i> Includes basic consumables (tape, clips)",
                    "<i class='fa-solid fa-check'></i> 30-Day Service Warranty",
                    "<i class='fa-solid fa-check'></i> Same-day service in Ambattur"
                ]
            },
            {
                tier: "Pro",
                price: "₹1,499 - ₹4,999+",
                type: "Full Rewiring / Heavy Work",
                features: [
                    "<i class='fa-solid fa-check'></i> Inverter setup / Main DB box wiring",
                    "<i class='fa-solid fa-check'></i> Branded, safety-certified wiring & parts",
                    "<i class='fa-solid fa-check'></i> 90-Day Extended Warranty",
                    "<i class='fa-solid fa-check'></i> Priority emergency visit (< 2 hrs)"
                ]
            }
        ],
        operations: [
            { name: "Fan Installation / Repair", normal: "₹149", premium: "₹299", pro: "₹499" },
            { name: "Switch & Socket Board Replacement", normal: "₹99", premium: "₹249", pro: "₹450" },
            { name: "MCB / Fuse Box Repairs", normal: "₹199", premium: "₹449", pro: "₹899" },
            { name: "Inverter Unit & Battery Setup", normal: "₹399", premium: "₹799", pro: "₹1,499" },
            { name: "Full Room Rewiring (Per Point)", normal: "₹250/point", premium: "₹400/point", pro: "₹650/point" }
        ]
    },
    plumbing: {
        title: "Plumbing Services & Rate Card (Ambattur Market)",
        description: "Reliable plumbing, drainage blockage removal, and pipe line repairs across residential and commercial buildings.",
        packages: [
            {
                tier: "Normal",
                price: "₹129 - ₹249",
                type: "Minor Fixes",
                features: [
                    "<i class='fa-solid fa-check'></i> Tap repair / Washer change",
                    "<i class='fa-solid fa-check'></i> Basic issue inspection",
                    "<i class='fa-solid fa-xmark' style='color:#e74c3c;'></i> Spare parts extra",
                    "<i class='fa-solid fa-check'></i> Standard scheduling"
                ]
            },
            {
                tier: "Premium",
                price: "₹449 - ₹899",
                type: "Standard Plumbing",
                recommended: true,
                features: [
                    "<i class='fa-solid fa-check'></i> Drain blockage / Jet spray fixes",
                    "<i class='fa-solid fa-check'></i> High-grade PVC sealant & fittings included",
                    "<i class='fa-solid fa-check'></i> 30-Day Leakage Warranty",
                    "<i class='fa-solid fa-check'></i> On-time service commitment"
                ]
            },
            {
                tier: "Pro",
                price: "₹1,299 - ₹3,500+",
                type: "Overhaul / Heavy Fittings",
                features: [
                    "<i class='fa-solid fa-check'></i> Water tank / Motor pump repair & setup",
                    "<i class='fa-solid fa-check'></i> Complete sanitary & bathroom fitting installation",
                    "<i class='fa-solid fa-check'></i> 90-Day Guarantee",
                    "<i class='fa-solid fa-check'></i> Immediate emergency dispatch"
                ]
            }
        ],
        operations: [
            { name: "Tap Repair & Replacement", normal: "₹129", premium: "₹249", pro: "₹449" },
            { name: "Drainage Blockage Removal", normal: "₹199", premium: "₹499", pro: "₹999" },
            { name: "Water Tank Cleaning & Repair", normal: "₹499", premium: "₹899", pro: "₹1,499" },
            { name: "Motor Pump Repair / Installation", normal: "₹299", premium: "₹699", pro: "₹1,299" },
            { name: "Bathroom Fitting & Sanitary Works", normal: "₹349", premium: "₹749", pro: "₹1,899" }
        ]
    },
    cleaning: {
        title: "Home Cleaning Services & Rate Card (Ambattur Market)",
        description: "Professional deep cleaning services for apartments, independent houses, kitchens, and upholstery.",
        packages: [
            {
                tier: "Normal",
                price: "₹299 - ₹799",
                type: "Basic / Spot Cleaning",
                features: [
                    "<i class='fa-solid fa-check'></i> Single room or spot cleaning",
                    "<i class='fa-solid fa-check'></i> Standard cleaning solutions",
                    "<i class='fa-solid fa-check'></i> Manual scrubbing",
                    "<i class='fa-solid fa-check'></i> Standard duration (1-2 hrs)"
                ]
            },
            {
                tier: "Premium",
                price: "₹1,299 - ₹2,499",
                type: "Deep Cleaning (1-2 BHK)",
                recommended: true,
                features: [
                    "<i class='fa-solid fa-check'></i> Deep kitchen or bathroom cleaning",
                    "<i class='fa-solid fa-check'></i> Machine scrubbing & degreasing chemicals",
                    "<i class='fa-solid fa-check'></i> Stain & hard water mark removal",
                    "<i class='fa-solid fa-check'></i> Thorough quality check"
                ]
            },
            {
                tier: "Pro",
                price: "₹3,499 - ₹5,999+",
                type: "Full Villa / 3+ BHK Deep Clean",
                features: [
                    "<i class='fa-solid fa-check'></i> Full home deep cleaning + Sofa/Carpet shampooing",
                    "<i class='fa-solid fa-check'></i> High-pressure steam cleaning & sanitization",
                    "<i class='fa-solid fa-check'></i> Eco-friendly, non-hazardous materials",
                    "<i class='fa-solid fa-check'></i> Multi-crew team for rapid delivery"
                ]
            }
        ],
        operations: [
            { name: "Bathroom Deep Cleaning", normal: "₹299", premium: "₹499", pro: "₹799" },
            { name: "Kitchen Degreasing & Deep Clean", normal: "₹499", premium: "₹899", pro: "₹1,399" },
            { name: "Sofa & Carpet Shampooing", normal: "₹399", premium: "₹699", pro: "₹1,199" },
            { name: "1 BHK / 2 BHK Full House Clean", normal: "₹1,499", premium: "₹2,499", pro: "₹3,999" },
            { name: "Independent House / Villa Clean", normal: "₹2,999", premium: "₹4,499", pro: "₹6,499" }
        ]
    }
};

function openModal(serviceKey) {
    const data = serviceDetailsData[serviceKey];
    if (!data) return;

    let modalHTML = `
        <h2 style="color: #00468b; margin-bottom: 5px;">${data.title}</h2>
        <p style="color: #666; font-size: 0.95rem;">${data.description}</p>
        
        <h3 style="margin-top: 20px; color: #333;">Package Tiers</h3>
        <div class="pricing-grid">
    `;

    data.packages.forEach(pkg => {
        modalHTML += `
            <div class="pricing-card ${pkg.recommended ? 'recommended' : ''}">
                <div class="pricing-header">
                    <h4>${pkg.tier} Tier</h4>
                    <p style="font-size: 0.85rem; color: #777;">${pkg.type}</p>
                    <div class="pricing-price">${pkg.price}</div>
                </div>
                <ul class="pricing-features">
                    ${pkg.features.map(f => `<li>${f}</li>`).join('')}
                </ul>
               <!-- <a href="tel:9940764694" class="btn btn-book" style="margin-top:10px; width:100%; text-align:center;">Book Now</a> -->
               <button type="button" class="btn btn-book" onclick="openBookingModal('${data.title.split(' ')[0]}', '${pkg.tier}')" style="margin-top:10px; width:100%; text-align:center;">Book Now</button>
            </div>
        `;
    });

    modalHTML += `
        </div>
        <h3 style="margin-top: 30px; color: #333;">Itemized Operation Costs</h3>
        <div style="overflow-x: auto;">
            <table style="width:100%; border-collapse: collapse; margin-top:10px; font-size:0.9rem;">
                <thead>
                    <tr style="background:#00468b; color:#fff; text-align:left;">
                        <th style="padding:10px;">Operation / Job Type</th>
                        <th style="padding:10px;">Normal</th>
                        <th style="padding:10px;">Premium</th>
                        <th style="padding:10px;">Pro</th>
                    </tr>
                </thead>
                <tbody>
    `;

    data.operations.forEach((op, idx) => {
        const bg = idx % 2 === 0 ? '#f8f9fa' : '#ffffff';
        modalHTML += `
            <tr style="background:${bg}; border-bottom:1px solid #ddd;">
                <td style="padding:10px; font-weight:500;">${op.name}</td>
                <td style="padding:10px; color:#555;">${op.normal}</td>
                <td style="padding:10px; color:#00468b; font-weight:600;">${op.premium}</td>
                <td style="padding:10px; color:#27ae60; font-weight:600;">${op.pro}</td>
            </tr>
        `;
    });

    modalHTML += `
                </tbody>
            </table>
        </div>
    `;

    document.getElementById('modalBody').innerHTML = modalHTML;
    document.getElementById('serviceModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('serviceModal').style.display = 'none';
}

// Close modal when clicking outside the content box
window.onclick = function(event) {
    const modal = document.getElementById('serviceModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

// Open Booking Modal
function openBookingModal(serviceName = '', tier = 'Premium') {
    // If opened from a details modal, close it first
    closeModal();

    const bookingModal = document.getElementById('bookingModal');
    bookingModal.style.display = 'flex';

    // Pre-select options if passed
    if (serviceName) {
        const categorySelect = document.getElementById('serviceCategory');
        categorySelect.value = serviceName;
    }

    if (tier) {
        const tierSelect = document.getElementById('serviceTier');
        tierSelect.value = tier;
    }
}

// Close Booking Modal
function closeBookingModal() {
    document.getElementById('bookingModal').style.display = 'none';
}



// Helper utility function to align text inside the table
function padRight(str, length) {
    if (str.length >= length) {
        return str.substring(0, length - 3) + '...';
    }
    return str + ' '.repeat(length - str.length);
}

// Close modals when clicking outside the box
window.addEventListener('click', function(event) {
    const serviceModal = document.getElementById('serviceModal');
    const bookingModal = document.getElementById('bookingModal');
    
    if (event.target === serviceModal) {
        serviceModal.style.display = 'none';
    }
    if (event.target === bookingModal) {
        bookingModal.style.display = 'none';
    }
});

// Variable to store detected coordinates
let autoLocationUrl = '';

// Function to fetch device GPS coordinates
// Function to fetch device GPS coordinates and populate the URL text box
function getCurrentLocation() {
    const statusText = document.getElementById('locationStatus');
    const locBtn = document.getElementById('locationBtn');
    const urlInput = document.getElementById('googleMapsUrl');

    if (!navigator.geolocation) {
        statusText.style.color = '#e74c3c';
        statusText.innerText = 'Geolocation is not supported by your browser.';
        return;
    }

    locBtn.disabled = true;
    locBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Detecting location...`;
    statusText.style.color = '#555';
    statusText.innerText = 'Requesting GPS position...';

    navigator.geolocation.getCurrentPosition(
        (position) => {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            
            // 1. Generate Google Maps URL
            autoLocationUrl = `https://maps.google.com/?q=${lat},${lng}`;

            // 2. Insert the generated URL directly into the text box
            if (urlInput) {
                urlInput.value = autoLocationUrl;
            }

            // 3. Update button & status state
            locBtn.style.backgroundColor = '#27ae60';
            locBtn.style.color = '#ffffff';
            locBtn.style.borderColor = '#27ae60';
            locBtn.innerHTML = `<i class="fa-solid fa-circle-check"></i> Location Captured`;
            
            statusText.style.color = '#27ae60';
            statusText.innerText = `GPS Location saved and link entered into text box!`;
        },
        (error) => {
            locBtn.disabled = false;
            locBtn.innerHTML = `<i class="fa-solid fa-location-crosshairs"></i> Use My Current Location`;
            statusText.style.color = '#e74c3c';
            
            switch (error.code) {
                case error.PERMISSION_DENIED:
                    statusText.innerText = 'Location access denied. Please paste link manually or allow permissions.';
                    break;
                case error.POSITION_UNAVAILABLE:
                    statusText.innerText = 'Location information unavailable.';
                    break;
                case error.TIMEOUT:
                    statusText.innerText = 'Location request timed out.';
                    break;
                default:
                    statusText.innerText = 'An unknown error occurred.';
            }
        },
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
}

function handleBookingSubmit(event) {
    event.preventDefault();

    // 1. Extract values
    const name = document.getElementById('custName').value.trim();
    const phone = document.getElementById('custPhone').value.trim();
    const service = document.getElementById('serviceCategory').value;
    const tier = document.getElementById('serviceTier').value;
    const area = document.getElementById('custArea').value;
    const timeSlot = document.getElementById('prefTime').value;
    const address = document.getElementById('custAddress').value.trim();
    const userPastedUrl = document.getElementById('googleMapsUrl').value.trim();
    const details = document.getElementById('issueDetails').value.trim() || 'N/A';
    const finalMapLink = autoLocationUrl || userPastedUrl || 'Not Provided';

    // 2. Build WhatsApp Message
    let message = `*SREE KUMARAN ELECTRICAL & PLUMBING*\n`;
    message += `-----------------------------------\n`;
    message += `*NEW SERVICE BOOKING REQUEST*\n\n`;
    message += `\`\`\`\n`;
    message += `+---------------------------------+\n`;
    message += `| BOOKING SUMMARY                 |\n`;
    message += `+---------------------------------+\n`;
    message += `| Customer : ${padRight(name, 20)} |\n`;
    message += `| Phone    : ${padRight(phone, 20)} |\n`;
    message += `| Service  : ${padRight(service, 20)} |\n`;
    message += `| Tier     : ${padRight(tier, 20)} |\n`;
    message += `| Area     : ${padRight(area, 20)} |\n`;
    message += `| Time     : ${padRight(timeSlot.substring(0, 20), 20)} |\n`;
    message += `+---------------------------------+\n`;
    message += `\`\`\`\n\n`;
    message += `🏠 *Address:* ${address}\n`;
    message += `📍 *Google Location:* ${finalMapLink}\n`;
    message += `📝 *Notes:* ${details}\n\n`;
    message += `_Sent via Sree Kumaran Online Booking_`;

    const whatsappPhone = '919940764694';
    const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(message)}`;

    // 3. Open WhatsApp
    window.open(whatsappUrl, '_blank');

    // 4. Display On-Screen Success Confirmation inside the Modal
    const modalContent = document.querySelector('.booking-modal-content');
    modalContent.innerHTML = `
        <div style="text-align: center; padding: 30px 10px;">
            <i class="fa-solid fa-circle-check" style="font-size: 50px; color: #27ae60; margin-bottom: 15px;"></i>
            <h2 style="color: #00468b; margin-bottom: 10px;">Thank You, ${name}!</h2>
            <p style="font-size: 1rem; color: #333; margin-bottom: 15px;">Your service request for <strong>${service} (${tier} Tier)</strong> has been initiated via WhatsApp.</p>
            <div style="background: #f8f9fa; border: 1px solid #e0e0e0; border-radius: 6px; padding: 15px; margin: 20px 0; text-align: left;">
                <p style="margin: 5px 0;"><strong>Location:</strong> ${area}</p>
                <p style="margin: 5px 0;"><strong>Slot:</strong> ${timeSlot}</p>
                <p style="margin: 5px 0;"><strong>Contact Phone:</strong> ${phone}</p>
            </div>
            <p style="font-size: 0.9rem; color: #666; margin-bottom: 20px;">Our team in Ambattur will call you shortly to confirm the technician assignment.</p>
            <button onclick="location.reload()" class="btn btn-book" style="margin: 0 auto;">Done</button>
        </div>
    `;
}

// Utility to align table text
function padRight(str, length) {
    if (str.length >= length) {
        return str.substring(0, length - 3) + '...';
    }
    return str + ' '.repeat(length - str.length);
}