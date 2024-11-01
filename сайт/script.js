document.querySelectorAll('.tab-link').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelectorAll('.tab-link').forEach(link => link.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
        
        this.classList.add('active');
        const targetContent = document.querySelector(this.getAttribute('href'));
        targetContent.classList.add('active');
    });
});

document.getElementById('add-event-btn').addEventListener('click', function() {
    document.getElementById('add-event-form').style.display = 'block';
});

document.getElementById('save-event-btn').addEventListener('click', function() {
    const eventTitle = document.getElementById('event-title').value;
    const eventDescription = document.getElementById('event-description').value;
    if (eventTitle && eventDescription) {
        const newEvent = document.createElement('div');
        newEvent.className = 'event-item';
        newEvent.innerHTML = `
            <h3>${eventTitle}</h3>
            <p>${eventDescription}</p>
            <div class="event-actions">
                <button class="like-btn">👍 Лайк</button>
                <button class="dislike-btn">👎 Дизлайк</button>
            </div>
        `;
        document.getElementById('event-list').appendChild(newEvent);
        document.getElementById('event-title').value = '';
        document.getElementById('event-description').value = '';
        document.getElementById('add-event-form').style.display = 'none';
    }
});



document.getElementById('submit-feedback').addEventListener('click', function() {
    const feedbackText = document.getElementById('feedback-text').value;
    if (feedbackText) {
        const newFeedback = document.createElement('div');
        newFeedback.className = 'feedback-item';
        newFeedback.textContent = feedbackText;
        document.getElementById('feedback-list').appendChild(newFeedback);
        document.getElementById('feedback-text').value = '';
    }
});

document.getElementById('emergency-call').addEventListener('click', function() {
    alert('Экстренные службы вызваны!');
});
