let nama, val;
const url_string = document.URL;
const url = new URL(url_string);
let doi;

if (url.searchParams.get('in') != null) {
  doi = url.searchParams.get('in');
} else {
  doi = "Desy";
}

let footer = document.getElementById("credit");
footer.innerHTML = doi;
footer.href = "https://www.instagram.com/dinurmaulanaa_/";

function time() {
  var d = new hours();
  var n = d.getHours();
  console.log(n);
  if (n >= 24 && n <= 10) {
    return "Pagi"
  } else if (n >= 10 && n <= 15) {
    return "Siang"
  } else if (n >= 15 && n <= 18) {
    return "Sore"
  } else if (n >= 18 && n <= 24) {
    return "Malam"
  }
}

function makan() {
  switch (time()) {
    case "Pagi":
      return "sarapan"
      break;
    case "Siang":
      return "makan siang"
      break;
    case "Malam":
      return "makan malam"
      break;
      case "Sore":
      return "makan"
      break;
    default:
      break;
  }
}

function selesai() {
  const teks = document.getElementById('teks');
  const btn = document.querySelector('.tombol');
  teks.innerHTML = `Semangat ${doi} <i
  class="fas fa-heart text-danger animate__animated animate__heartBeat animate__repeat-3"></i>`;
  btn.classList.add('d-none');
  teks.classList.remove('d-none');  
}


document.querySelector(".tombol").addEventListener('click', function () {
  Swal.fire({
    title: 'Halo Desy!',
    html: `Selamat Malam, Kamu udah Makan?`,
    timer: 2500,
    timerProgressBar: true,
    showConfirmButton: false,
  }).then((result) => {
    if (result.dismiss === Swal.DismissReason.timer) {
      Swal.fire('Kalau belum jangan lupa makan yaa').then((result) => {
        Swal.fire({
          title: ' ',
          html: `Aku tau ko kamu lagi sibuk banget`,
          timer: 2000,
          timerProgressBar: true,
          showConfirmButton: false,
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer) {
            Swal.fire({
              title: ' ',
              html: `Lagi pusing banget, cape banget`,
              timer: 2000,
              timerProgressBar: true,
              showConfirmButton: false,
            }).then((result) => {
              if (result.dismiss === Swal.DismissReason.timer) {
                Swal.fire('Semangat terus ya kamu :)').then((result) => {
                  Swal.fire(
                    'Jangan Sering Bergadang atau tidur Larut Malam!',
                    '',
                    'error'
                  ).then((result) => {
                    Swal.fire(
                      'Jangan telat makan!',
                      '',
                      'error'
                    ).then((result) => {
                      Swal.fire('Aku dukung kamu terus ko').then((result) => {
                        Swal.fire({
                          title: 'Oh iya aku mau nanya',
                          text: 'Ada sesuatu yang lagi kamu pingin ga?',
                          showDenyButton: true,
                          confirmButtonText: `Ada sih ka`,
                          denyButtonText: `Ga ada ko`,
                        }).then((result) => {
                          /* Read more about isConfirmed, isDenied below */
                          if (result.isConfirmed) {
                            Swal.fire({
                              title: 'Mau apa?',
                              input: 'text',
                              inputPlaceholder: 'ex: Seblacc, boba, or etc',
                              showCancelButton: false,
                              inputValidator: (value) => {
                                if (!value) {
                                  return 'Isi dulu dong'
                                }
                              }
                            }).then((result) => {
                              Swal.fire('Okey Des', 'Nanti aku kabulin kemauan kamu yaa', 'success').then((result) => {
                                Swal.fire("See ya! Aku Kangen ^^").then((result) => {
                                  selesai()
                                });
                              })
                            })
                          } else if (result.isDenied) {
                            Swal.fire('Oh okedeh kalo ga ada').then((result) => {
                              Swal.fire("See ya! Aku Kangen ^^").then((result) => {
                                selesai()
                              });
                            })
                          }
                        })
                      })
                    })
                  })
                })
              }
            })
          }
        })
      })
    }
  })
});
