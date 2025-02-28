function domainName(url) {
    url = url.replace(/^https?:\/\//, '');
    url = url.replace(/^www\./, '');
    let match = url.match(/[^./]+/);
    return match ? match[0] : '';
}
console.log(domainName("http://github.com/carbonfive/raygun")); 
                    
