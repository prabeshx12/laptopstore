const counters = document.querySelectorAll('.value');
const speed = 800;

counters.forEach(value => {
    const updateCount = () => {
        const target = +value.getAttribute('data-target');
        const count = +value.innerText;

        const inc = target / speed;

        if(count < target) {
            value.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, 1)
        } else {
            count.innerText = target;
        }
    }
    updateCount();
});