---
layout: post
title: "Menampilkan File dan Folder yang Hilang Gara-Gara Virus Shortcut (Untuk Pengguna Windows)"
date: 2017-06-07 13:18:31
gambar: "http://img12.deviantart.net/1b57/i/2013/266/5/5/look_for_the_bare_necessities_of_life_by_ineedchemicalx-d6nhvy1.jpg"
file: 2017-06-07-menampilkan-file-dan-folder-yang-hilang-garagara-virus-shortcut.md
---

1. Pada folder yang mau dibersihkan (biasanya _flash disk_), tekan `Ctrl` + `Shift` + `Klik kanan` lalu pilih `Open Command Windows Here`
2. Masukkan skrip di bawah ini:

    ```batch
    attrib -s -h /s /d
    ```

3. Tekan `Enter`