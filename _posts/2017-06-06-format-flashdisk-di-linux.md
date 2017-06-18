---
layout: post
title: "Format Flashdisk di Linux"
date: 2017-06-06 08:59:54
gambar: "http://img07.deviantart.net/26e0/i/2013/109/f/e/just_smile_by_leejun35-d629j5x.jpg"
file: 2017-06-06-format-flashdisk-di-linux.md
---

Berikut ini adalah langkah-langkah memformat _flash disk_ menggunakan Terminal di Linux. Mengapa menggunakan Terminal? Kalau untuk distro-distro Linux versi terbaru, biasanya sudah ada menu format di klik kanan. Namun, untuk Linux versi lawas kayak yang kupakai sekarang ini, Kali Linux 1.0, nggak ada menu itu. Makanya, kita harus menggunakan Terminal.

Berikut ini adalah langkah-langkahnya:

1. Cek lokasi _flash disk_ di laptop dengan perintah `fdisk -l`
2. Kemudian, aku mendapatkan bahwa letaknya di `/dev/sdb1`. Maka, aku gunakan perintah `umount /dev/sdb1` untuk _mengunmount flash disk_
3. Setelah itu ketik `mkfs.vfat /dev/sdb1` untuk mulai memformatnya