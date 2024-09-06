function toReadable(n) {
    const single = [
        '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
        'seventeen', 'eighteen', 'nineteen'
    ];

    const tens = [
        '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
    ];

    if (n === 0) return 'zero';

    if (n < 20) return single[n];

    if (n < 100) {
        return tens[Math.floor(n / 10)] + (n % 10 ? ' ' + single[n % 10] : '');
    }

    if (n < 1000) {
        return single[Math.floor(n / 100)] + ' hundred' + 
               (n % 100 ? ' ' + toReadable(n % 100) : '');
    }

}

