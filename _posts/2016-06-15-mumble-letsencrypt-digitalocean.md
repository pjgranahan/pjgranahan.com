---
layout: post
title: Installing a Let's Encrypt certificate on a Digital Ocean One-Click Mumble server
tags: [mumble server, murmur, let's encrypt, digital ocean, certificate]
comments: true
---

To set up a signed certificate from [Let's Encrypt][3] on a [Mumble][1] server (Murmur) running on a [Digital Ocean][2] [One-Click App][6] droplet: 

* Log in to your droplet

* Git clone Let's Encrypt and install a cert (adapted from [this reddit thread][4]):
```console
git clone https://github.com/letsencrypt/letsencrypt
letsencrypt/letsencrypt-auto certonly --standalone
# Then follow the instructions
```

* Open the Mumble Server (murmur) config file and change the SSL options to point to your newly generated certs:
```console
~/letsencrypt# nano /etc/mumble-server.ini
```
```console
sslCert=/etc/letsencrypt/live/<your.domain.here>/fullchain.pem
sslKey=/etc/letsencrypt/live/<your.domain.here>/privkey.pem
```

* "In order for mumble-server to read the LetsEncrypt certificates you must have granted mumble-server 'higher priority' during the initial wizard setup" [source][5]. So, run:
```console
dpkg-reconfigure mumble-server
# Follow instructions, setting mumble with high priority
```

* Restart:
```console
service mumble-server restart
```

* Done! Now, when users connect to your server, they should not be warned that your certs are self-signed.

[1]: https://wiki.mumble.info/wiki/Main_Page
[2]: https://www.digitalocean.com/
[3]: https://letsencrypt.org/
[4]: https://www.reddit.com/r/mumble/comments/3x55al/lets_encrypt_free_sslcertificate_for_your/
[5]: http://docs.silasjelley.com/Packages/Mumble/
[6]: https://www.digitalocean.com/features/one-click-apps/
