document.addEventListener('DOMContentLoaded', function() {
    // Create floating hearts
    function createHearts() {
        const container = document.getElementById('hearts-container');
        const colors = ['#d62976', '#e84393', '#fd79a8', '#ff9a9e', '#ffb3c6'];
        
        for (let i = 0; i < 25; i++) {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.innerHTML = '<i class="fas fa-heart"></i>';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.top = Math.random() * 100 + 'vh';
            heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
            heart.style.color = colors[Math.floor(Math.random() * colors.length)];
            heart.style.animationDuration = (Math.random() * 5 + 3) + 's';
            heart.style.animationDelay = (Math.random() * 5) + 's';
            container.appendChild(heart);
        }
    }
    
    createHearts();
    
    // Love letter functionality
    const openLetterBtn = document.getElementById('open-letter-btn');
    const closeLetterBtn = document.getElementById('close-letter-btn');
    const loveLetterContainer = document.getElementById('love-letter-container');
    
    openLetterBtn.addEventListener('click', function() {
        loveLetterContainer.classList.remove('hidden');
    });
    
    closeLetterBtn.addEventListener('click', function() {
        loveLetterContainer.classList.add('hidden');
    });
    
    // Proposal functionality
    const proposalBtn = document.getElementById('proposal-btn');
    const proposalContainer = document.getElementById('proposal-container');
    
    proposalBtn.addEventListener('click', function() {
        proposalContainer.classList.remove('hidden');
        setTimeout(() => {
            document.querySelector('.proposal-box').classList.add('show');
        }, 100);
        
        // Create confetti
        createConfetti();
    });
    
    function createConfetti() {
        const colors = ['#d62976', '#e84393', '#fd79a8', '#ff9a9e', '#ffb3c6'];
        
        for (let i = 0; i < 150; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.width = (Math.random() * 10 + 5) + 'px';
            confetti.style.height = (Math.random() * 10 + 5) + 'px';
            confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
            confetti.style.animationDelay = (Math.random() * 2) + 's';
            document.body.appendChild(confetti);
            
            // Remove confetti after animation
            setTimeout(() => {
                confetti.remove();
            }, 5000);
        }
    }
    
    // Yes/No buttons
    document.getElementById('yes-btn').addEventListener('click', function() {
        const proposalContainer = document.getElementById('proposal-container');
        const finalMessage = document.getElementById('final-message');
        
        proposalContainer.classList.add('hidden');
        document.querySelector('.proposal-box').classList.remove('show');
        finalMessage.classList.remove('hidden');
        
        // Create more confetti
        createConfetti();
        
        // Scroll to final message
        setTimeout(() => {
            finalMessage.scrollIntoView({ behavior: 'smooth' });
        }, 500);
    });
    
    document.getElementById('no-btn').addEventListener('click', function() {
        const noBtn = document.getElementById('no-btn');
        const text = ['Are you sure?', 'Really?', 'Please?', 'Think again!', 'Pretty please?', 'Final answer?'];
        let currentIndex = 0;
        
        noBtn.innerHTML = `<i class="fas fa-question mr-2"></i>${text[currentIndex]}`;
        
        noBtn.addEventListener('click', function() {
            currentIndex = (currentIndex + 1) % text.length;
            noBtn.innerHTML = `<i class="fas fa-question mr-2"></i>${text[currentIndex]}`;
            
            // Make the yes button grow each time no is clicked
            const yesBtn = document.getElementById('yes-btn');
            const currentSize = parseFloat(yesBtn.style.transform.replace('scale(', '').replace(')', '')) || 1;
            yesBtn.style.transform = `scale(${currentSize * 1.1})`;
            yesBtn.style.fontWeight = 'bold';
        });
    });
    
    // Show more reasons button
    let currentReasons = 6;
    const reasons = [
        {icon: 'fa-eye', title: "Your Beautiful Eyes", text: "I could get lost in them forever."},
        {icon: 'fa-music', title: "Your Voice", text: "Whether singing or speaking, it's music to my ears."},
        {icon: 'fa-lightbulb', title: "Your Creativity", text: "The way you see the world is so unique and beautiful."},
        {icon: 'fa-star', title: "Your Ambition", text: "You inspire me with your dreams and determination."},
        {icon: 'fa-hand-holding-heart', title: "Your Generosity", text: "You give so much without expecting anything in return."},
        {icon: 'fa-cookie', title: "Your Baking", text: "The way you make even simple things special."},
        {icon: 'fa-book', title: "Your Intelligence", text: "I love our deep conversations about everything."},
        {icon: 'fa-moon', title: "Your Nighttime Self", text: "How you look when you first wake up is adorable."},
        {icon: 'fa-sun', title: "Your Morning Self", text: "Even before coffee, you're beautiful."},
        {icon: 'fa-heartbeat', title: "Your Compassion", text: "How you care for others inspires me daily."},
        {icon: 'fa-globe-asia', title: "Your Sense of Adventure", text: "You make every day an exciting journey."},
        {icon: 'fa-umbrella-beach', title: "Your Relaxed Side", text: "Watching you unwind is one of my favorite things."}
    ];
    
    document.getElementById('show-more-reasons').addEventListener('click', function() {
        const reasonsContainer = document.querySelector('.grid.grid-cols-1.md\\:grid-cols-3.gap-6');
        
        if (currentReasons < reasons.length) {
            for (let i = 0; i < 3 && currentReasons < reasons.length; i++) {
                const reason = reasons[currentReasons];
                
                const reasonDiv = document.createElement('div');
                reasonDiv.className = 'bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition interactive-card';
                reasonDiv.innerHTML = `
                    <div class="text-pink-600 text-3xl mb-3"><i class="fas ${reason.icon}"></i></div>
                    <h3 class="text-xl font-semibold text-pink-700 mb-2">${reason.title}</h3>
                    <p class="text-gray-700">${reason.text}</p>
                `;
                
                reasonsContainer.appendChild(reasonDiv);
                
                // Add fade-in animation
                setTimeout(() => {
                    reasonDiv.classList.add('fade-in');
                }, 10);
                
                currentReasons++;
            }
            
            if (currentReasons >= reasons.length) {
                this.innerHTML = '<i class="fas fa-heart mr-2"></i>That\'s All For Now!';
                this.disabled = true;
            }
        }
    });
    
    // Secret message functionality
    const secretMessageBtn = document.querySelector('.secret-message');
    const secretMessageBox = document.querySelector('.secret-message-box');
    
    secretMessageBtn.addEventListener('click', function() {
        secretMessageBox.classList.toggle('show');
    });
    
    // Close secret message when clicking outside
    document.addEventListener('click', function(e) {
        if (!secretMessageBtn.contains(e.target) && !secretMessageBox.contains(e.target)) {
            secretMessageBox.classList.remove('show');
        }
    });
    
    // Add floating animation to some elements
    const floatingElements = document.querySelectorAll('.floating');
    floatingElements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.2}s`;
    });
});