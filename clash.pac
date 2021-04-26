function FindProxyForURL(url, host) {
  //custom rule

  // connect direct if it is resolvable
  // if (isResolvable(host))
  //   return "DIRECT";

  // var regexpr = /:\/\/172\.[1-3][0-9]\.*/
  // var regexpr = /:\/\/2[23][4-9]\.*/

  // if (shExpMatch(host, "192.168.*")) { return "DIRECT"; }
  // if (isInNet(hostIP, "172.16.0.0", "255.240.0.0")) { return "DIRECT"; }

  //if (isPlainHostName(host)) {return "DIRECT";}


  if (shExpMatch(host, "*.ir*")) { return "DIRECT"; }
  if (shExpMatch(host, "*.zoomit.ir*")) { return "DIRECT"; }
  if (shExpMatch(host, "*.digiato.ir*")) { return "DIRECT"; }
  if (shExpMatch(host, "*.downloadly.ir*")) { return "DIRECT"; }
  if (shExpMatch(host, "*.aparat.com*")) { return "DIRECT"; }
  if (shExpMatch(host, "*.fileniko.com*")) { return "DIRECT"; }
  if (shExpMatch(host, "*.tvniko.com*")) { return "DIRECT"; }
  if (shExpMatch(host, "*.soft98.ir*")) { return "DIRECT"; }
  if (shExpMatch(host, "*.farsroid.com*")) { return "DIRECT"; }
  // if (shExpMatch(host, "*.iranserver.com*")) { return "DIRECT"; }
  // if (shExpMatch(host, "*.ipnumberia.com*")) { return "DIRECT"; }
  // if (shExpMatch(host, "*dls1.comein2uploadcenter.tk*")) { return "DIRECT"; }


  // return "PROXY 127.0.0.1:7890; DIRECT;"


  return "PROXY 127.0.0.1:%mixed-port%; SOCKS5 127.0.0.1:%mixed-port%; DIRECT;"
}

// TODO add iran ip bypass
// add dns?

// helpful: https://developer.mozilla.org/en-US/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file
