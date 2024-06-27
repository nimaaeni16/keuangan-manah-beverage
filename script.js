document
  .getElementById("keuangan-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const tanggal = document.getElementById("tanggal").value;
    const namaProduk = document.getElementById("namaProduk").value;
    const harga = parseFloat(document.getElementById("harga").value);
    const jumlah = parseInt(document.getElementById("jumlah").value);
    const jenis = document.getElementById("jenis").value;

    const total = harga * jumlah;

    const newRow = document.createElement("tr");
    newRow.innerHTML = `
    <td>${tanggal}</td>
    <td>${namaProduk}</td>
    <td>${harga.toFixed(2)}</td>
    <td>${jumlah}</td>
    <td>${total.toFixed(2)}</td>
  `;

    document.querySelector("#tabelRiwayat tbody").appendChild(newRow);

    let pemasukan = parseFloat(document.getElementById("pemasukan").innerText);
    let pengeluaran = parseFloat(
      document.getElementById("pengeluaran").innerText
    );

    if (jenis === "pemasukan") {
      pemasukan += total;
    } else {
      pengeluaran += total;
    }

    const saldo = pemasukan - pengeluaran;

    document.getElementById("pemasukan").innerText = pemasukan.toFixed(2);
    document.getElementById("pengeluaran").innerText = pengeluaran.toFixed(2);
    document.getElementById("saldo").innerText = saldo.toFixed(2);

    document.getElementById("keuangan-form").reset();
  });
