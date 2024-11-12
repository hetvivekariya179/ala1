const canvas = document.getElementById("solarSystemCanvas");
const ctx = canvas.getContext("2d");

// Set canvas dimensions
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Define the Sun (center of the system)
const sun = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: 50,
    color: 'yellow'
};

// Define the planets with their orbital radius, size, and color
const planets = [
    { name: 'Mercury', radius: 10, orbitRadius: 100, speed: 0.02, color: 'gray' },
    { name: 'Venus', radius: 15, orbitRadius: 150, speed: 0.015, color: 'orange' },
    { name: 'Earth', radius: 20, orbitRadius: 200, speed: 0.01, color: 'blue' },
    { name: 'Mars', radius: 18, orbitRadius: 250, speed: 0.008, color: 'red' }
];

// Animation function to update positions of planets
function animate() {
    // Clear the canvas for the new frame
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the Sun (central star)
    ctx.beginPath();
    ctx.arc(sun.x, sun.y, sun.radius, 0, 2 * Math.PI);
    ctx.fillStyle = sun.color;
    ctx.fill();

    // Loop through each planet and draw it
    planets.forEach(planet => {
        // Calculate the new position of the planet using its orbit radius and speed
        planet.angle = (planet.angle || 0) + planet.speed;

        const x = sun.x + Math.cos(planet.angle) * planet.orbitRadius;
        const y = sun.y + Math.sin(planet.angle) * planet.orbitRadius;

        // Draw the planet
        ctx.beginPath();
        ctx.arc(x, y, planet.radius, 0, 2 * Math.PI);
        ctx.fillStyle = planet.color;
        ctx.fill();
    });

    // Request the next frame of the animation
    requestAnimationFrame(animate);
}

// Start the animation
animate();
