function FindProxyForURL(url, host)
{
  if (shExpMatch(url, "*.telegram.org")) {
    return "SOCKS 127.0.0.1:9050; DIRECT";
  }
  if (shExpMatch(url, "*.t.me")) {
    return "SOCKS 127.0.0.1:9050; DIRECT";
  }
  if (shExpMatch(url, "*.slack.com")) {
    return "SOCKS 127.0.0.1:9050; DIRECT";
  }
  if (shExpMatch(url, "*.slack-msgs.com")) {
    return "SOCKS 127.0.0.1:9050; DIRECT";
  }
  if (shExpMatch(url, "*.rutracker.org")) {
    return "SOCKS 127.0.0.1:9050; DIRECT";
  }
  if (shExpMatch(url, "*.linkedin.com")) {
    return "SOCKS 127.0.0.1:9050; DIRECT";
  }
  if (shExpMatch(url, "*.slideshare.net")) {
    return "SOCKS 127.0.0.1:9050; DIRECT";
  }
  return "DIRECT";
}
