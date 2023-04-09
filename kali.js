// Get all elements with the "kali" class
const kaliElements = document.querySelectorAll('.kali');

// Loop through the elements and add an event listener for a random trigger
kaliElements.forEach(element => {
const randomTrigger = Math.random();
if (randomTrigger < 0.5) {
element.addEventListener('mouseover', () => {
element.classList.add('kali-effect');
setTimeout(() => {
element.classList.remove('kali-effect');
}, 1000);
});
}
});
