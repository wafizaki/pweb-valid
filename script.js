function validateForm() {
  if (document.forms["formPendaftaran"]["nama"].value == "") {
    alert("Nama Tidak Boleh Kosong");
    document.forms["formPendaftaran"]["nama"].focus();
    return false;
  }
  if (document.forms["formPendaftaran"]["email"].value == "") {
    alert("Email Tidak Boleh Kosong");
    document.forms["formPendaftaran"]["email"].focus();
    return false;
  }
  if (document.forms["formPendaftaran"]["NRP"].value == "") {
    alert("NRP Wajib Diisi!");
    document.forms["formPendaftaran"]["NRP"].focus();
    return false;
  }
  if (document.forms["formPendaftaran"]["matkul"].value == "") {
    alert("Mata Kuliah Wajib Diisi!");
    document.forms["formPendaftaran"]["matkul"].focus();
    return false;
  }
  if (document.forms["formPendaftaran"]["dosen"].value == "") {
    alert("Isi Nama Lengkap Dosen!");
    document.forms["formPendaftaran"]["dosen"].focus();
    return false;
  }
  if (document.forms["formPendaftaran"]["jurusan"].value == "0") {
    alert("Pilih Jurusan");
    document.forms["formPendaftaran"]["jurusan"].focus();
    return false;
  }
}
