


function coursePrice() {
    
    const courseSelect = document.getElementById('course');
    const selectedCourse = courseSelect.value;

    
    let price = 0;

    
    switch (selectedCourse) {
        case 'maths':
            price = 5000000;
            break;
        case 'english':
            price = 7000000;
            break;
        case 'physics':
            price = 3000000;
            break;
        default:
            price = 0;
            break;
    }

    
    const priceInput = document.querySelector('input[name="course"]');
    priceInput.value = price;
}


document.getElementById('confirm').addEventListener('change', function() {
    const submitButton = document.querySelector('button');
    submitButton.disabled = !this.checked;
});