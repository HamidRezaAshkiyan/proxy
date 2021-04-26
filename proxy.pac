// this pac file will redirect all to to localhost proxy by default
// i will write another one to direct by default

function FindProxyForURL(url, host) {
    let proxy = "PROXY localhost:1080";
    let direct = "DIRECT";


    // If the hostname matches, send direct.
    if (dnsDomainIs(host, "*.ir") ||
        shExpMatch(host, "digiato.com"))
        return direct;

    // If the protocol or URL matches, send direct.
    // if (url.substring(0, 4) == "ftp:" ||
    //     shExpMatch(url, "http://abcdomain.com/folder/*"))
    //     return direct;

    // If the requested website is hosted within the internal network, send direct.
    if (isPlainHostName(host) ||
        shExpMatch(host, "*.local") ||
        isInNet(dnsResolve(host), "10.0.0.0", "255.0.0.0") ||
        isInNet(dnsResolve(host), "172.16.0.0", "255.240.0.0") ||
        isInNet(dnsResolve(host), "192.168.0.0", "255.255.0.0") ||
        isInNet(dnsResolve(host), "127.0.0.0", "255.255.255.0"))
        return direct;

    // If the IP address of the local machine is within a defined
    // subnet, send to a specific proxy.
    if (isInNet(myIpAddress(), "10.10.5.0", "255.255.255.0"))
        return proxy;

    // DEFAULT RULE: All other traffic, use below proxies, in fail-over order.
    return proxy;

}