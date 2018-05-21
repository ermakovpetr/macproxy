function FindProxyForURL(url, host)
{
  if (shExpMatch(url, "*.ipify.org/*")) {
    return "SOCKS localhost:9050";
  } else {
    return "DIRECT";
  }
}
