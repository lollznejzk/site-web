function buyNow(product, price) {
    let url = `https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=aaronnicolas216@gmail.com-@ismaeldejavu&item_name=${product}&amount=${price}&currency_code=EUR`;
    window.location.href = url;
}
