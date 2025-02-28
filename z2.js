function ipv4Parser(ip, mask){
    let ip_oct = ip.split('.');
    let mask_oct = mask.split('.');
    let net_ad1=[];
    let host=[];
    for(let i=0; i<4;i++){
        net_ad1.push(ip_oct[i] & mask_oct[i]);
        host.push(ip_oct[i] - net_ad1[i]);
    }
    return [net_ad1.join('.'), host.join('.')];
}
console.log(ipv4Parser('192.168.50.1', '255.255.255.0'));