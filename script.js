document.getElementById('lead-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const messageDiv = document.getElementById('form-message');
    const submitBtn = document.getElementById('submit-btn');

    // Visuellt kvitto på att något händer
    submitBtn.innerText = "Sänder...";
    submitBtn.disabled = true;

    try {
        // Detta är din n8n-webhook. Se till att den är aktiv i n8n!
        const webhookUrl = 'https://api.flowforgeai.app/webhook/social-toolkit-lead'; 
        
        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                email: email, 
                source: 'landing_page',
                timestamp: new Date().toISOString()
            })
        });

        if (response.ok) {
            messageDiv.innerHTML = "<p style='color: #4ade80; margin-top: 20px; font-weight: bold;'>Tack! Vi hörs snart.</p>";
            document.getElementById('lead-form').reset();
        } else {
            throw new Error('Network response was not ok');
        }
    } catch (error) {
        messageDiv.innerHTML = "<p style='color: #f87171; margin-top: 20px;'>Hoppsan! Något gick fel. Försök igen eller mejla direkt.</p>";
    } finally {
        submitBtn.innerText = "Hämta Toolkit";
        submitBtn.disabled = false;
    }
});
