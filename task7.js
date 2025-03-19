function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculatePercentage() {
    const display = document.getElementById('display');
    display.value = eval(display.value) / 100;
}

function calculateSquareRoot() {
    const display = document.getElementById('display');
    display.value = Math.sqrt(eval(display.value));
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        // Replace square root symbol with Math.sqrt
        const expression = display.value.replace(/√/g, 'Math.sqrt');
        const result = eval(expression);
        display.value = result;
        
        // Update recent searches
        updateRecentSearches(result);
    } catch (error) {
        display.value = 'Error';
    }
    
    // Handle percentage calculations
    if (display.value.includes('%')) {
        calculatePercentage();
    }
}

function updateRecentSearches(value) {
    const recentSearchesDiv = document.getElementById('recent-searches');
    const newSearch = document.createElement('div');
    newSearch.textContent = value;
    recentSearchesDiv.appendChild(newSearch);
}
