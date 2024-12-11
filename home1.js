let hiddenBar = document.getElementById("hidden-bar");
let headerBox = document.getElementById("header-box");
let count = 0;
let x = window.matchMedia("(max-width: 1200px)");
const productUl = document.querySelector(".func");
const productLi = document.querySelectorAll(".size16");

// document
//   .getElementById("downloadButton")
//   .addEventListener("click", function () {
//     const url = "./public/CV NHAT LINH DANG QUANG - CV-BE-midlv-TopCV.vn.pdf";
//     const link = document.createElement("a");
//     link.href = url;
//     link.setAttribute("download", "file.pdf");
//     document.body.appendChild(link);
//     link.click();
//     link.parentNode.removeChild(link);
//   });

// Resize screen
function reszieScreen(x) {
  if (x.matches) {
    headerBox.style.transform = "translate(-260px)";
    hiddenBar.style.display = "block";
  } else {
    headerBox.style.transform = "translate(0px)";
    hiddenBar.style.display = "none";
  }
}
reszieScreen(x);
x.addEventListener("change", reszieScreen);

hiddenBar.addEventListener("click", function (e) {
  //Hide header box when click each nav item
  let navItem = document.getElementsByClassName("nav-item");
  Array.prototype.forEach.call(navItem, function (item) {
    console.log(item);
    item.addEventListener("click", function () {
      headerBox.style.transform = "translateX(-260px)";
      hiddenBar.style.transform = "translateX(0px)";
      hiddenBar.innerHTML = '<div class="fa fa-bars">' + "</div>";
    });
  });

  count++;
  if (count % 2 != 0) {
    headerBox.style.transform = "translateX(0)";
    headerBox.style.zIndex = "100";
    hiddenBar.style.transform = "translateX(260px)";
    hiddenBar.innerHTML = "X";
  } else {
    headerBox.style.transform = "translateX(-260px)";
    hiddenBar.style.transform = "translateX(0px)";
    hiddenBar.innerHTML = '<div class="fa fa-bars">' + "</div>";
  }
});

// Scrollpy
// var scrollSpy = new bootstrap.ScrollSpy(document.body, {
//   target: "#navbar",
// });

// JS choose each page
// let homeButton = document.getElementById("home-button");
// let aboutButton = document.getElementById("about-button");
// let resumeButton = document.getElementById("resume-button");
// let portfolioButton = document.getElementById("portfolio-button");
// let blogButton = document.getElementById("blog-button");
// let contactButton = document.getElementById("contact-button");

// let homePage = document.getElementById("home-page");
// let aboutPage = document.getElementById("about-page");
// let resumePage = document.getElementById("resume-page");
// let portfolioPage = document.getElementById("portfolio-page");
// let blogPage = document.getElementById("blog-page");
// let contactPage = document.getElementById("contact-page");

// // Default of the screen when open CV
// homeButton.style.backgroundColor = "#0f7bff";
// homePage.style.display = "block";

// Invalid input contact
let nameInput = document.getElementById("nameInput");
let emailInput = document.getElementById("emailInput");
let subjectInput = document.getElementById("subjectInput");
let messageInput = document.getElementById("messageInput");

let invalidModel = document.getElementById("invalid-model");
let contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();
  invalidModel.style.display = "flex";
  invalidModel.style.backgroundColor = "#d4edda";
  invalidModel.style.color = "#366540";
  invalidModel.innerText = "Your message has been sent !!!";
});

function invalidInput() {
  if (!nameInput.checkValidity()) {
    invalidModel.style.display = "flex";
    invalidModel.style.backgroundColor = "#f6d7d9";
    invalidModel.style.color = "#722324";
    invalidModel.innerText = "Name is required";
  } else if (!emailInput.checkValidity()) {
    invalidModel.style.display = "flex";
    invalidModel.style.backgroundColor = "#f6d7d9";
    invalidModel.style.color = "#722324";
    invalidModel.innerText = "Email is required";
  } else if (!subjectInput.checkValidity()) {
    invalidModel.style.display = "flex";
    invalidModel.style.backgroundColor = "#f6d7d9";
    invalidModel.style.color = "#722324";
    invalidModel.innerText = "Subject is required";
  } else if (!messageInput.checkValidity()) {
    invalidModel.style.display = "flex";
    invalidModel.style.backgroundColor = "#f6d7d9";
    invalidModel.style.color = "#722324";
    invalidModel.innerText = "Message is required";
  }
}

if (productUl) {
  productUl.addEventListener("click", () => {
    productLi.forEach((item) => {
      if (item.style.display == "none") {
        item.style.display = "";
      } else {
        item.style.display = "none";
      }
      item.style.color = "";
    });
  });
}

productLi.forEach((item) => {
  item.style.display = "none";
  item.addEventListener("click", () => {
    if (item == productLi[0]) {
      item.style.color = "white";
      productLi[1].style.color = "";
      productLi[2].style.color = "";
    } else if (item == productLi[1]) {
      item.style.color = "white";
      productLi[0].style.color = "";
      productLi[2].style.color = "";
    } else if (item == productLi[2]) {
      item.style.color = "white";
      productLi[0].style.color = "";
      productLi[1].style.color = "";
    }
  });
});

//product
const dataVTYT = [
  {
    id: 1,
    img: "Portfolios/Đai nẹp cố định các khớp/Đai bảo vệ cổ chân.jpg",
    name: "Đai bảo vệ cổ chân",
    description: "Giá: Liên hệ",
  },
  {
    id: 2,
    img: "Portfolios/Đai nẹp cố định các khớp/Đai chỉnh ngón chân phải.jpg",
    name: "Đai chỉnh ngón chân phải",
    description: "Giá: Liên hệ",
  },
  {
    id: 3,
    img: "Portfolios/Đai nẹp cố định các khớp/Đai cố định khớp cổ tay.jpg",
    name: "Đai cố định khớp cổ tay",
    description: "Giá: Liên hệ",
  },
  {
    id: 4,
    img: "Portfolios/Đai nẹp cố định các khớp/Đai cố định khớp vai.jpg",
    name: "Đai cố định khớp vai",
    description: "Giá: Liên hệ",
  },
  {
    id: 5,
    img: "Portfolios/Đai nẹp cố định các khớp/Đai cố định lưng bon-bon.jpg",
    name: "Đai cố định lưng bon-bon",
    description: "Giá: Liên hệ",
  },
  {
    id: 6,
    img: "Portfolios/Đai nẹp cố định các khớp/Đai gối.jpg",
    name: "Đai gối",
    description: "Giá: Liên hệ",
  },
  {
    id: 7,
    img: "Portfolios/Đai nẹp cố định các khớp/Đai khuỷu tay.jpg",
    name: "Đai khuỷu tay",
    description: "Giá: Liên hệ",
  },
  {
    id: 8,
    img: "Portfolios/Đai nẹp cố định các khớp/Đai lưng.jpg",
    name: "Đai lưng",
    description: "Giá: Liên hệ",
  },
  {
    id: 9,
    img: "Portfolios/Đai nẹp cố định các khớp/Đai nâng và bảo vệ khớp vai.jpg",
    name: "Đai nâng và bảo vệ khớp vai",
    description: "Giá: Liên hệ",
  },
  {
    id: 10,
    img: "Portfolios/Đai nẹp cố định các khớp/Đai số 8 cố định xương đòn.jpg",
    name: "Đai số 8 cố định xương đòn",
    description: "Giá: Liên hệ",
  },
  {
    id: 11,
    img: "Portfolios/Đai nẹp cố định các khớp/dai-chong-gu-lung-bonbone.webp",
    name: "Đai lưng chống gù lưng bonebone",
    description: "Giá: Liên hệ",
  },
  {
    id: 12,
    img: "Portfolios/Đai nẹp cố định các khớp/Nẹp tay đặt làm theo nhu cầu.jpg",
    name: "Nẹp tay đặt làm theo nhu cầu",
    description: "Giá: Liên hệ",
  },
  {
    id: 13,
    img: "Portfolios/Đai nẹp cố định các khớp/Nẹp khớp gối có khớp động H5.jpg",
    name: "Nẹp khớp gối có khớp động H5",
    description: "Giá: Liên hệ",
  },
  {
    id: 14,
    img: "Portfolios/Đai nẹp cố định các khớp/Nẹp chống co rút bàn tay.jpg",
    name: "Nẹp chống co rút bàn tay",
    description: "Giá: Liên hệ",
  },
  {
    id: 15,
    img: "Portfolios/Đai nẹp cố định các khớp/nẹp cẳng chân ngắn.jpg",
    name: "Nẹp cẳng chân ngắn",
    description: "Giá: Liên hệ",
  },
  {
    id: 16,
    img: "Portfolios/Đai nẹp cố định các khớp/Nẹp cẳng chân dài.jpg",
    name: "Nẹp cẳng chân dài",
    description: "Giá: Liên hệ",
  },
  {
    id: 18,
    img: "Portfolios/Đai nẹp cố định các khớp/Nẹp Alpho cổ chân.jpg",
    name: "Nẹp Alpho cổ chân",
    description: "Giá: Liên hệ",
  },
  //xong
  {
    id: 19,
    img: "Portfolios/Dụng cụ hỗ trợ, chăm sóc và di chuyển bệnh nhân/Gậy 1 chân.jpg",
    name: "Gậy 1 chân",
    description: "Giá: Liên hệ",
  },
  {
    id: 20,
    img: "Portfolios/Dụng cụ hỗ trợ, chăm sóc và di chuyển bệnh nhân/Gậy 4 chân.jpg",
    name: "Gậy 4 chân",
    description: "Giá: Liên hệ",
  },
  {
    id: 21,
    img: "Portfolios/Dụng cụ hỗ trợ, chăm sóc và di chuyển bệnh nhân/Giường y tế 1 tay quay.webp",
    name: "Giường y tế 1 tay quay",
    description: "Giá: Liên hệ",
  },
  {
    id: 22,
    img: "Portfolios/Dụng cụ hỗ trợ, chăm sóc và di chuyển bệnh nhân/Giường tập PHCN.jpg",
    name: "Giường tập PHCN",
    description: "Giá: Liên hệ",
  },
  {
    id: 23,
    img: "Portfolios/Dụng cụ hỗ trợ, chăm sóc và di chuyển bệnh nhân/Giường inox.jpg",
    name: "Giường inox",
    description: "Giá: Liên hệ",
  },
  {
    id: 24,
    img: "Portfolios/Dụng cụ hỗ trợ, chăm sóc và di chuyển bệnh nhân/Giường điều trị.jpg",
    name: "Giường điều trị",
    description: "Giá: Liên hệ",
  },
  {
    id: 25,
    img: "Portfolios/Dụng cụ hỗ trợ, chăm sóc và di chuyển bệnh nhân/Giường đa năng 4 tay quay.webp",
    name: "Giường đa năng 4 tay quay",
    description: "Giá: Liên hệ",
  },
  {
    id: 26,
    img: "Portfolios/Dụng cụ hỗ trợ, chăm sóc và di chuyển bệnh nhân/Giường 2 tay quay.jpg",
    name: "Giường 2 tay quay",
    description: "Giá: Liên hệ",
  },
  {
    id: 27,
    img: "Portfolios/Dụng cụ hỗ trợ, chăm sóc và di chuyển bệnh nhân/Ghế bô gấp gọn.jpg",
    name: "Ghế bô gấp gọn",
    description: "Giá: Liên hệ",
  },
  {
    id: 28,
    img: "Portfolios/Dụng cụ hỗ trợ, chăm sóc và di chuyển bệnh nhân/Ghế bô di chuyển được.jpg",
    name: "Ghế bô di chuyển được",
    description: "Giá: Liên hệ",
  },
  {
    id: 29,
    img: "Portfolios/Dụng cụ hỗ trợ, chăm sóc và di chuyển bệnh nhân/gay-tap-di-4-chan-lucass.jpg",
    name: "Gậy tập đi 4 chân Lucass",
    description: "Giá: Liên hệ",
  },
  {
    id: 30,
    img: "Portfolios/Dụng cụ hỗ trợ, chăm sóc và di chuyển bệnh nhân/Khung tập đi có phanh.jpg",
    name: "Khung tập đi có phanh",
    description: "Giá: Liên hệ",
  },
  {
    id: 31,
    img: "Portfolios/Dụng cụ hỗ trợ, chăm sóc và di chuyển bệnh nhân/Xe tập đi đa năng.jpg",
    name: "Xe tập đi đa năng",
    description: "Giá: Liên hệ",
  },
  {
    id: 32,
    img: "Portfolios/Dụng cụ hỗ trợ, chăm sóc và di chuyển bệnh nhân/Xe nâng và di chuyển bệnh nhân có bô vệ sinh.jpg",
    name: "Xe nâng và di chuyển bệnh nhân có bô vệ sinh",
    description: "Giá: Liên hệ",
  },
  {
    id: 33,
    img: "Portfolios/Dụng cụ hỗ trợ, chăm sóc và di chuyển bệnh nhân/Xe lăn lussca x9.jpg",
    name: "Xe lăn lussca x9",
    description: "Giá: Liên hệ",
  },
  {
    id: 34,
    img: "Portfolios/Dụng cụ hỗ trợ, chăm sóc và di chuyển bệnh nhân/Xe lăn đa năng X7.jpg",
    name: "Xe lăn đa năng X7",
    description: "Giá: Liên hệ",
  },
  {
    id: 35,
    img: "Portfolios/Dụng cụ hỗ trợ, chăm sóc và di chuyển bệnh nhân/Xe lăn có phanh tay.jpg",
    name: "Xe lăn có phanh tay",
    description: "Giá: Liên hệ",
  },
  {
    id: 36,
    img: "Portfolios/Dụng cụ hỗ trợ, chăm sóc và di chuyển bệnh nhân/Xe lăn có bô X8.jpg",
    name: "Xe lăn có bô X8",
    description: "Giá: Liên hệ",
  },
  {
    id: 37,
    img: "Portfolios/Dụng cụ hỗ trợ, chăm sóc và di chuyển bệnh nhân/Nạng nhôm tăng giảm.jpg",
    name: "Nạng nhôm tăng giảm",
    description: "Giá: Liên hệ",
  },
  {
    id: 38,
    img: "Portfolios/Dụng cụ hỗ trợ, chăm sóc và di chuyển bệnh nhân/khung-tap-di-sat-co-ngoi-cho-nguoi-lon-pn42sl-300.jpg",
    name: "Khung tập đi sát có người lớn pn42sl-300",
    description: "Giá: Liên hệ",
  },
  {
    id: 39,
    img: "Portfolios/Dụng cụ hỗ trợ, chăm sóc và di chuyển bệnh nhân/khung-tap-di-cho-nguoi-tai-bien-gbm-034-300.jpg",
    name: "Khung tập đi cho người tai biến gbm-034-300",
    description: "Giá: Liên hệ",
  },
  {
    id: 40,
    img: "Portfolios/Dụng cụ hỗ trợ, chăm sóc và di chuyển bệnh nhân/khung-nhom-tap-di.jpg",
    name: "Khung nhôm tập đi",
    description: "Giá: Liên hệ",
  },
  {
    id: 40,
    img: "Portfolios/Dụng cụ hỗ trợ, chăm sóc và di chuyển bệnh nhân/Khung tập đi.jpg",
    name: "Khung tập đi",
    description: "Giá: Liên hệ",
  },
  {
    id: 41,
    img: "Portfolios/Dụng cụ hỗ trợ, chăm sóc và di chuyển bệnh nhân/Xe lăn lussca x9.jpg",
    name: "Xe lăn lussca x9",
    description: "Giá: Liên hệ",
  },
  {
    id: 42,
    img: "Portfolios/Dụng cụ hỗ trợ, chăm sóc và di chuyển bệnh nhân/Xe nâng và di chuyển bệnh nhân có bô vệ sinh.jpg",
    name: "Xe nâng và di chuyển bệnh nhân có bô vệ sinh",
    description: "Giá: Liên hệ",
  },
  {
    id: 43,
    img: "Portfolios/Dụng cụ hỗ trợ, chăm sóc và di chuyển bệnh nhân/Xe tập đi đa năng.jpg",
    name: "Xe tập đi đa năng",
    description: "Giá: Liên hệ",
  },
  {
    id: 44,
    img: "Portfolios/Đai nẹp cố định các khớp/Đai khớp gối.jpg",
    name: "Đai khớp gối",
    description: "Giá: Liên hệ",
  },
  {
    img: "Portfolios/Dụng cụ hỗ trợ, chăm sóc và di chuyển bệnh nhân/dụng cụ tập luyện hoạt động trị liệu.jpg",
    name: "Dụng cụ tập luyện hoạt động trị liệu",
    description: "Giá: Liên hệ",
  },
  {
    img: "Portfolios/Dụng cụ hỗ trợ, chăm sóc và di chuyển bệnh nhân/dụng cụ tập luyện phòng vận động trị liệu.jpg",
    name: "Dụng cụ tập luyện phòng vận động trị liệu",
    description: "Giá: Liên hệ",
  },
  {
    img: "Portfolios/Dụng cụ hỗ trợ, chăm sóc và di chuyển bệnh nhân/sản xuất dụng cụ trợ giúp cho bệnh nhận theo nhu cầu.jpg",
    name: "Sản xuất dụng cụ trợ giúp cho bệnh nhận theo nhu cầu",
    description: "Giá: Liên hệ",
  },
  {
    img: "Portfolios/Dụng cụ hỗ trợ, chăm sóc và di chuyển bệnh nhân/setup lắp đặt phòng vận động trị liệu.jpg",
    name: "Setup lắp đặt phòng vận động trị liệu",
    description: "Giá: Liên hệ",
  },
  {
    img: "Portfolios/Dụng cụ hỗ trợ, chăm sóc và di chuyển bệnh nhân/VẬT TƯ TIÊU HAO Y TẾ.jpg",
    name: "Vật tư tiêu hao y tế",
    description: "Giá: Liên hệ",
  },
  {
    img: "Portfolios/Dụng cụ hỗ trợ, chăm sóc và di chuyển bệnh nhân/vật tư y té tiêu hao các loại.jpg",
    name: "Vật tư y tế tiêu hao các loại",
    description: "Giá: Liên hệ",
  },
  //Chăm sóc và điều trị bệnh nhân thông thường
  {
    id: 45,
    img: "Portfolios/VTYT chăm sóc và điều trị bệnh nhân thông thường/Đệm hơi chống loét.jpg",
    name: "Đệm hơi chống loét",
    description: "Giá: Liên hệ",
  },
  {
    id: 46,
    img: "Portfolios/VTYT chăm sóc và điều trị bệnh nhân thông thường/Kéo cổ bằng hơi.jpg",
    name: "Kéo cổ bằng hơi",
    description: "Giá: Liên hệ",
  },
  {
    id: 47,
    img: "Portfolios/VTYT chăm sóc và điều trị bệnh nhân thông thường/Máy điện châm, điện xung điều trị.jpg",
    name: "Máy điện châm, điện xung điều trị",
    description: "Giá: Liên hệ",
  },
  {
    id: 48,
    img: "Portfolios/VTYT chăm sóc và điều trị bệnh nhân thông thường/Máy điện xung cá nhân 4 điện cực.jpg",
    name: "Máy điện xung cá nhân 4 điện cực",
    description: "Giá: Liên hệ",
  },
  {
    id: 49,
    img: "Portfolios/VTYT chăm sóc và điều trị bệnh nhân thông thường/Máy điện xung cá nhân 8 cực.jpg",
    name: "Máy điện xung cá nhân 8 cực",
    description: "Giá: Liên hệ",
  },
  {
    id: 50,
    img: "Portfolios/VTYT chăm sóc và điều trị bệnh nhân thông thường/Máy đo huyết áp Amron Nhật Bản.jpg",
    name: "Máy đo huyết áp Amron Nhật Bản",
    description: "Giá: Liên hệ",
  },
  {
    id: 51,
    img: "Portfolios/VTYT chăm sóc và điều trị bệnh nhân thông thường/Máy đo huyết áp cơ.jpg",
    name: "Máy đo huyết áp cơ",
    description: "Giá: Liên hệ",
  },
  {
    id: 52,
    img: "Portfolios/VTYT chăm sóc và điều trị bệnh nhân thông thường/Máy đo huyết áp Thuỵ sỹ BWell.jpg",
    name: "Máy đo huyết áp Thụy Sỹ BWell",
    description: "Giá: Liên hệ",
  },
  {
    id: 53,
    img: "Portfolios/VTYT chăm sóc và điều trị bệnh nhân thông thường/Máy hút dịch.jpg",
    name: "Máy hút dịch",
    description: "Giá: Liên hệ",
  },
  {
    id: 54,
    img: "Portfolios/VTYT chăm sóc và điều trị bệnh nhân thông thường/Máy massage cầm tay.jpg",
    name: "Máy massage cầm tay",
    description: "Giá: Liên hệ",
  },
  {
    id: 55,
    img: "Portfolios/VTYT chăm sóc và điều trị bệnh nhân thông thường/Máy tạo oxy 3l.jpg",
    name: "Máy tạo oxy 3l",
    description: "Giá: Liên hệ",
  },
  {
    id: 56,
    img: "Portfolios/VTYT chăm sóc và điều trị bệnh nhân thông thường/Máy tạo oxy 5l.jpg",
    name: "Máy tạo oxy 5l",
    description: "Giá: Liên hệ",
  },
  {
    id: 57,
    img: "Portfolios/VTYT chăm sóc và điều trị bệnh nhân thông thường/Máy tạo oxy Kaneko.jpg",
    name: "Máy tạo oxy Kaneko",
    description: "Giá: Liên hệ",
  },
  {
    id: 58,
    img: "Portfolios/VTYT chăm sóc và điều trị bệnh nhân thông thường/Nẹp kéo cổ bằng hơi.jpg",
    name: "Nẹp kéo cổ bằng hơi",
    description: "Giá: Liên hệ",
  },
  {
    id: 59,
    img: "Portfolios/VTYT chăm sóc và điều trị bệnh nhân thông thường/Tất bảo vệ suy tĩnh mạch chi.jpg",
    name: "Tất bảo vệ suy tĩnh mạch chi",
    description: "Giá: Liên hệ",
  },
  {
    id: 60,
    img: "Portfolios/VTYT chăm sóc và điều trị bệnh nhân thông thường/Tủ thuốc gia đình.jpg",
    name: "Tủ thuốc gia đình",
    description: "Giá: Liên hệ",
  },
  {
    img: "Portfolios/VTYT chăm sóc và điều trị bệnh nhân thông thường/massage cầm tay đa năng.jpg",
    name: "Massage cầm tay đa năng",
    description: "Giá: Liên hệ",
  },
  {
    img: "Portfolios/VTYT chăm sóc và điều trị bệnh nhân thông thường/máy massage cầm tay.webp",
    name: "Máy massage cầm tay",
    description: "Giá: Liên hệ",
  },
  //Dụng cụ tập luyện PHCN
  {
    id: 61,
    img: "Portfolios/Dụng cụ tập luyện PHCN/Bộ bàn ghế tập PHCN.jpg",
    name: "Bộ bàn ghế tập PHCN",
    description: "Giá: Liên hệ",
  },
  {
    id: 62,
    img: "Portfolios/Dụng cụ tập luyện PHCN/Bóng gia bán nguyệt điều hoà cảm giác.jpg",
    name: "Bóng gia bán nguyệt điều hoà cảm giác",
    description: "Giá: Liên hệ",
  },
  {
    id: 63,
    img: "Portfolios/Dụng cụ tập luyện PHCN/Đạp tập chân, tay bằng điện nhiều cấp độ.jpg",
    name: "Đạp tập chân, tay bằng điện nhiều cấp độ",
    description: "Giá: Liên hệ",
  },
  {
    id: 64,
    img: "Portfolios/Dụng cụ tập luyện PHCN/Đạp tập chân, tay.jpg",
    name: "Đạp tập chân, tay",
    description: "Giá: Liên hệ",
  },
  {
    id: 65,
    img: "Portfolios/Dụng cụ tập luyện PHCN/Dụng cụ tập 3 trong 1.jpg",
    name: "Dụng cụ tập 3 trong 1",
    description: "Giá: Liên hệ",
  },
  {
    id: 66,
    img: "Portfolios/Dụng cụ tập luyện PHCN/Dụng cụ tập đa năng 3 in 1.jpg",
    name: "Dụng cụ tập đa năng 3 in 1",
    description: "Giá: Liên hệ",
  },
  {
    id: 67,
    img: "Portfolios/Dụng cụ tập luyện PHCN/Dụng cụ tập đứng và đi cho trẻ yếu vận động.jpg",
    name: "Dụng cụ tập đứng và đi cho trẻ yếu vận động",
    description: "Giá: Liên hệ",
  },
  {
    id: 68,
    img: "Portfolios/Dụng cụ tập luyện PHCN/Dụng cụ tập tay chân bằng điện có đế lót.jpg",
    name: "Dụng cụ tập tay chân bằng điện có đế lót",
    description: "Giá: Liên hệ",
  },
  {
    id: 69,
    img: "Portfolios/Dụng cụ tập luyện PHCN/Dụng cụ tập tay chân tăng nặng nhẹ.jpg",
    name: "Dụng cụ tập tay chân tăng nặng nhẹ",
    description: "Giá: Liên hệ",
  },
  {
    id: 70,
    img: "Portfolios/Dụng cụ tập luyện PHCN/Găng tay robot tập tay tự động.jpg",
    name: "Găng tay robot tập tay tự động",
    description: "Giá: Liên hệ",
  },
  {
    id: 71,
    img: "Portfolios/Dụng cụ tập luyện PHCN/Ghế tập mạnh cơ chi dưới.jpg",
    name: "Ghế tập mạnh cơ chi dưới",
    description: "Giá: Liên hệ",
  },
  {
    id: 72,
    img: "Portfolios/Dụng cụ tập luyện PHCN/Hệ thống tập đi có khung treo.jpg",
    name: "Hệ thống tập đi có khung treo",
    description: "Giá: Liên hệ",
  },
  {
    id: 73,
    img: "Portfolios/Dụng cụ tập luyện PHCN/Tay robot.jpg",
    name: "Tay robot",
    description: "Giá: Liên hệ",
  },
  {
    id: 74,
    img: "Portfolios/Dụng cụ tập luyện PHCN/Thanh song song tập đi.jpg",
    name: "Thanh song song tập đi",
    description: "Giá: Liên hệ",
  },
  {
    id: 75,
    img: "Portfolios/Dụng cụ tập luyện PHCN/Xe đạp tập tay chân.jpg",
    name: "Xe đạp tập tay chân",
    description: "Giá: Liên hệ",
  },
  {
    img: "Portfolios/Dụng cụ tập luyện PHCN/xe đạp tập.webp",
    name: "Xe đạp tập",
    description: "Giá: Liên hệ",
  },
  {
    img: "Portfolios/Dụng cụ tập luyện PHCN/xe đạp tập cho bệnh nhân tại nhà.webp",
    name: "Xe đạp tập cho bệnh nhân tại nhà",
    description: "Giá: Liên hệ",
  },
  {
    img: "Portfolios/Dụng cụ tập luyện PHCN/máy chạy bộ tại nhà.webp",
    name: "Máy chạy bộ tại nhà",
    description: "Giá: Liên hệ",
  },
  //VTYT, chăm sóc và điều trị bệnh nhân chuyên sâu
  {
    id: 75,
    img: "Portfolios/VTYT, chăm sóc và điều trị bệnh nhân chuyên sâu/máy điện sinh học điều trị thần kinh, cơ.jpg",
    name: "Máy điện sinh học điều trị thần kinh, cơ",
    description: "Giá: Liên hệ",
  },
  {
    id: 76,
    img: "Portfolios/VTYT, chăm sóc và điều trị bệnh nhân chuyên sâu/máy siêu âm trị liệu BTL.jpg",
    name: "Máy siêu âm trị liệu BTL",
    description: "Giá: Liên hệ",
  },
  {
    img: "Portfolios/VTYT, chăm sóc và điều trị bệnh nhân chuyên sâu/máy siêu âm trị liệu BTl.1.jpg",
    name: "Máy siêu âm trị liệu BTL 2",
    description: "Giá: Liên hệ",
  },
  {
    id: 77,
    img: "Portfolios/VTYT, chăm sóc và điều trị bệnh nhân chuyên sâu/máy điện xung trị liệu BTL của Anh.jpg",
    name: "Máy điện xung trị liệu BTL của Anh",
    description: "Giá: Liên hệ",
  },
  {
    id: 78,
    img: "Portfolios/VTYT, chăm sóc và điều trị bệnh nhân chuyên sâu/máy điện xung đièu trị giảm đau.jpg",
    name: "Máy điện xung đièu trị giảm đau",
    description: "Giá: Liên hệ",
  },
  {
    id: 79,
    img: "Portfolios/VTYT, chăm sóc và điều trị bệnh nhân chuyên sâu/máy điện xung 10 cổng.webp",
    name: "Máy điện xung 10 cổng",
    description: "Giá: Liên hệ",
  },
  {
    img: "Portfolios/VTYT, chăm sóc và điều trị bệnh nhân chuyên sâu/máy áp lực hơi hàn quốc.jpg",
    name: "Máy áp lực hơi hàn quốc",
    description: "Giá: Liên hệ",
  },
  {
    img: "Portfolios/VTYT, chăm sóc và điều trị bệnh nhân chuyên sâu/kéo giãn cốt sống lưng bằng hơi.webp",
    name: "Kéo giãn cốt sống lưng bằng hơi",
    description: "Giá: Liên hệ",
  },
  {
    img: "Portfolios/VTYT, chăm sóc và điều trị bệnh nhân chuyên sâu/kéo giãn cốt sống bằng hơi.webp",
    name: "Kéo giãn cốt sống bằng hơi",
    description: "Giá: Liên hệ",
  },
  {
    img: "Portfolios/VTYT, chăm sóc và điều trị bệnh nhân chuyên sâu/ghế massage toàn thân.webp",
    name: "Ghế massage toàn thân",
    description: "Giá: Liên hệ",
  },
  {
    img: "Portfolios/VTYT, chăm sóc và điều trị bệnh nhân chuyên sâu/đèn hồng ngoại lùn.jpg",
    name: "Đèn hồng ngoại lùn",
    description: "Giá: Liên hệ",
  },
  {
    img: "Portfolios/VTYT, chăm sóc và điều trị bệnh nhân chuyên sâu/đèn hồng ngoại chân cao.jpg",
    name: "Đèn hồng ngoại chân cao",
    description: "Giá: Liên hệ",
  },
  {
    img: "Portfolios/VTYT, chăm sóc và điều trị bệnh nhân chuyên sâu/máy hút đờm 2 bình.jpg",
    name: "Máy hút đờm 2 bình",
    description: "Giá: Liên hệ",
  },
  {
    img: "Portfolios/VTYT, chăm sóc và điều trị bệnh nhân chuyên sâu/máy hút đờm.jpg",
    name: "Máy hút đờm",
    description: "Giá: Liên hệ",
  },
  {
    img: "Portfolios/VTYT, chăm sóc và điều trị bệnh nhân chuyên sâu/máy kéo giãn cột sống trung quốc.jpg",
    name: "Máy kéo giãn cột sống trung quốc",
    description: "Giá: Liên hệ",
  },
  {
    img: "Portfolios/VTYT, chăm sóc và điều trị bệnh nhân chuyên sâu/máy kéo giãn cột sông.jpg",
    name: "Máy kéo giãn cột sông",
    description: "Giá: Liên hệ",
  },
  {
    img: "Portfolios/VTYT, chăm sóc và điều trị bệnh nhân chuyên sâu/máy tạo oxy 10l.webp",
    name: "Máy tạo oxy 10l",
    description: "Giá: Liên hệ",
  },
  {
    img: "Portfolios/VTYT, chăm sóc và điều trị bệnh nhân chuyên sâu/máy trị liệu.jpg",
    name: "Máy trị liệu",
    description: "Giá: Liên hệ",
  },
  {
    img: "Portfolios/VTYT, chăm sóc và điều trị bệnh nhân chuyên sâu/máy xung kích trị liệu.jpg",
    name: "Máy xung kích trị liệu",
    description: "Giá: Liên hệ",
  },
  {
    img: "Portfolios/VTYT, chăm sóc và điều trị bệnh nhân chuyên sâu/máy điều trị áp lực hơi trung quốc.jpg",
    name: "Máy điều trị áp lực hơi trung quốc",
    description: "Giá: Liên hệ",
  },

];


const itemPage = 9; // Số lượng mục trên mỗi trang
let currentPage = 1; // Trang hiện tại
const total = dataVTYT.length; // Tổng số mục
const totalPage = Math.ceil(total / itemPage); // Tổng số trang

// Hàm lấy dữ liệu của một trang
function getPageItems(currentPage) {
  const skip = itemPage * (currentPage - 1); // Số mục cần bỏ qua
  return dataVTYT.slice(skip, skip + itemPage); // Trích xuất mục theo trang
}

// Hàm render danh sách mục cho một trang
const renderPortfolio = () => {
  const pageItems = getPageItems(currentPage); // Lấy dữ liệu trang hiện tại
  return pageItems
    .map(
      (item, index) =>
        `<div class="col-sm-12 col-md-6 col-lg-4">
      <div class="photo-box mt-2">
        <img src="${item.img}" alt="" class="card-img" style="width: 400px; height: 300px;">
        <div class="fa fa-search-plus" data-toggle="modal" data-target="#photo${
          index + 1
        }"></div>
        <div class="fa fa-link"></div>
        <!-- Modal photo -->
        <div class="modal fade" id="photo${
          index + 1
        }" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="text-center text-white" style="width: 100%;">${
                  item.name
                }</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              ${
                item.img
                  ? `<div class="modal-body">
                <img class="card-img" src="${item.img}" alt="">
              </div>`
                  : ""
              }
            </div>
          </div>
        </div>
        <!-- Model photo -->
      </div>
      <div class="product">
        <a class="name text-white">${item.name}</a><br>
        <span class="discription">${item.description}</span>
      </div>
    </div>`
    )
    .join("");
};

// Hàm cập nhật nội dung và phân trang
const updatePortfolio = () => {
  const portfolioContainer = document.querySelector("#portfolioContainer"); // ID của container
  portfolioContainer.innerHTML = renderPortfolio(); // Render danh sách mục
  updatePagination(); // Cập nhật thanh phân trang
};

// Hàm cập nhật phân trang
function updatePagination() {
  const paginationContainer = document.querySelector(".pagination");
  paginationContainer.innerHTML = `
    <li class="page-item ${currentPage === 1 ? "disabled" : ""}">
      <a class="page-link bg-transparent border border-primary" href="#VTYT" aria-label="Previous" onclick="prevPage()">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    ${Array.from(
      { length: totalPage },
      (_, i) => `
      <li class="page-item ${currentPage === i + 1 ? "active" : ""}">
        <a class="page-link bg-transparent border border-primary" href="#VTYT" onclick="gotoPage(${
          i + 1
        })">${i + 1}</a>
      </li>
    `
    ).join("")}
    <li class="page-item ${currentPage === totalPage ? "disabled" : ""}">
      <a class="page-link bg-transparent border border-primary" href="#VTYT" aria-label="Next" onclick="nextPage()">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  `;
}

// Chuyển đến trang trước
function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    updatePortfolio();
  }
}

// Chuyển đến trang tiếp theo
function nextPage() {
  if (currentPage < totalPage) {
    currentPage++;
    updatePortfolio();
  }
}

// Chuyển đến một trang cụ thể
function gotoPage(page) {
  if (page >= 1 && page <= totalPage) {
    currentPage = page;
    updatePortfolio();
  }
}

// Khởi tạo giao diện
updatePortfolio();


const dataXSX = [
  {
    img: "Portfolios/XƯỞNG SẢN XUẤT DỤNG CỤ THEO NHU CẦU BỆNH NHẬN/chỉnh biến dạng khơp.jpg",
    name: "Chỉnh biến dạng khơp",
    description: "Giá: Liên hệ",
  },
  {
    img: "Portfolios/XƯỞNG SẢN XUẤT DỤNG CỤ THEO NHU CẦU BỆNH NHẬN/Đai chống xoè các ngón.jpg",
    name: "Đai chống xoè các ngón",
    description: "Giá: Liên hệ",
  },
  {
    img: "Portfolios/XƯỞNG SẢN XUẤT DỤNG CỤ THEO NHU CẦU BỆNH NHẬN/đai nâng chày trước cho chân bị liệt rũ.jpg",
    name: "Đai nâng chày trước cho chân bị liệt rũ",
    description: "Giá: Liên hệ",
  },
  {
    img: "Portfolios/XƯỞNG SẢN XUẤT DỤNG CỤ THEO NHU CẦU BỆNH NHẬN/dép chỉnh hình bàn chân bẹt.jpg",
    name: "Dép chỉnh hình bàn chân bẹt",
    description: "Giá: Liên hệ",
  },
  {
    img: "Portfolios/XƯỞNG SẢN XUẤT DỤNG CỤ THEO NHU CẦU BỆNH NHẬN/điều chỉnh bàn chân bị lật.jpg",
    name: "Điều chỉnh bàn chân bị lật",
    description: "Giá: Liên hệ",
  },
  {
    img: "Portfolios/XƯỞNG SẢN XUẤT DỤNG CỤ THEO NHU CẦU BỆNH NHẬN/giầy chống rũ bàn chân.jpg",
    name: "Giày chống rũ bàn chân",
    description: "Giá: Liên hệ",
  },
  {
    img: "Portfolios/XƯỞNG SẢN XUẤT DỤNG CỤ THEO NHU CẦU BỆNH NHẬN/giường điều trị bệnh nhân tập phcn.jpg",
    name: "Giường điều trị bệnh nhân tập phcn",
    description: "Giá: Liên hệ",
  },
  {
    img: "Portfolios/XƯỞNG SẢN XUẤT DỤNG CỤ THEO NHU CẦU BỆNH NHẬN/giường điều trị bệnh nhân theo nhu cầu kích thước và màu sắc.jpg",
    name: "Giường điều trị bệnh nhân theo nhu cầu kích thước và màu sắc",
    description: "Giá: Liên hệ",
  },
  {
    img: "Portfolios/XƯỞNG SẢN XUẤT DỤNG CỤ THEO NHU CẦU BỆNH NHẬN/nẹp chỉnh lệch trục khớp gối chữ X. O.jpg",
    name: "Nẹp chỉnh lệch trục khớp gối chữ X. O",
    description: "Giá: Liên hệ",
  },
  {
    img: "Portfolios/XƯỞNG SẢN XUẤT DỤNG CỤ THEO NHU CẦU BỆNH NHẬN/nẹp chỉnh ngón chân cái.jpg",
    name: "Nẹp chỉnh ngón chân cái",
    description: "Giá: Liên hệ",
  },
  {
    img: "Portfolios/XƯỞNG SẢN XUẤT DỤNG CỤ THEO NHU CẦU BỆNH NHẬN/nẹp chống co rút bàn tay, cổ tay.jpg",
    name: "Nẹp chống co rút bàn tay, cổ tay",
    description: "Giá: Liên hệ",
  },
  {
    img: "Portfolios/XƯỞNG SẢN XUẤT DỤNG CỤ THEO NHU CẦU BỆNH NHẬN/nẹp chống co rút gân gót và chống rũ bàn chân 1.jpg",
    name: "Nẹp chống co rút gân gót và chống rũ bàn chân 2",
    description: "Giá: Liên hệ",
  },
  {
    img: "Portfolios/XƯỞNG SẢN XUẤT DỤNG CỤ THEO NHU CẦU BỆNH NHẬN/nẹp chống co rút gân gót và chống rũ bàn chân.jpg",
    name: "Nẹp chống co rút gân gót và chống rũ bàn chân",
    description: "Giá: Liên hệ",
  },
  {
    img: "Portfolios/XƯỞNG SẢN XUẤT DỤNG CỤ THEO NHU CẦU BỆNH NHẬN/Nẹp chống ưỡng khớp gối khoá mọi tầm độ.1.jpg",
    name: "Nẹp chống ưỡng khớp gối khoá mọi tầm độ 2",
    description: "Giá: Liên hệ",
  },
  {
    img: "Portfolios/XƯỞNG SẢN XUẤT DỤNG CỤ THEO NHU CẦU BỆNH NHẬN/nẹp chống ưỡng khớp gối khoá mọi tầm độ.jpg",
    name: "nẹp chống ưỡng khớp gối khoá mọi tầm độ",
    description: "Giá: Liên hệ",
  },
  {
    img: "Portfolios/XƯỞNG SẢN XUẤT DỤNG CỤ THEO NHU CẦU BỆNH NHẬN/nẹp chống ưỡng khớp gối khoá mọi tầm độ.jpg1.jpg",
    name: "nẹp chống ưỡng khớp gối khoá mọi tầm độ 3",
    description: "Giá: Liên hệ",
  },
  {
    img: "Portfolios/XƯỞNG SẢN XUẤT DỤNG CỤ THEO NHU CẦU BỆNH NHẬN/Nẹp chống ưỡng khớp gối.jpg",
    name: "Nẹp chống ưỡng khớp gối",
    description: "Giá: Liên hệ",
  },
  {
    img: "Portfolios/XƯỞNG SẢN XUẤT DỤNG CỤ THEO NHU CẦU BỆNH NHẬN/nẹp khớp gối cho trẻ tập phcn khi đứng và đi.jpg",
    name: "Nẹp khớp gối cho trẻ tập phcn khi đứng và đi",
    description: "Giá: Liên hệ",
  },
  {
    img: "Portfolios/XƯỞNG SẢN XUẤT DỤNG CỤ THEO NHU CẦU BỆNH NHẬN/sản xuất máy đo bàn chân bẹt.jpg",
    name: "Sản xuất máy đo bàn chân bẹt",
    description: "Giá: Liên hệ",
  },
  {
    img: "Portfolios/XƯỞNG SẢN XUẤT DỤNG CỤ THEO NHU CẦU BỆNH NHẬN/sx dụng cụ cho phòng vận động.jpg",
    name: "Sản xuất dụng cụ cho phòng vận động",
    description: "Giá: Liên hệ",
  },

]

const itemPageXSX = 9; // Số lượng mục trên mỗi trang
let currentPageXSX = 1; // Trang hiện tại
const totalXSX = dataXSX.length; 
const totalPageXSX = Math.ceil(totalXSX / itemPageXSX); 

function getPageItemsXSX(currentPageXSX) {
  const skipXSX = itemPageXSX * (currentPageXSX - 1); 
  return dataXSX.slice(skipXSX, skipXSX + itemPageXSX); 
}

const renderPortfolioXSX = () => {
  const pageItems = getPageItemsXSX(currentPageXSX); 
  return pageItems
    .map(
      (item, index) =>
        `<div class="col-sm-12 col-md-6 col-lg-4">
      <div class="photo-box mt-2">
        <img src="${item.img}" alt="" class="card-img" style="width: 400px; height: 300px;">
        <div class="fa fa-search-plus" data-toggle="modal" data-target="#photo${
          total + index + 1
        }"></div>
        <div class="fa fa-link"></div>
        <!-- Modal photo -->
        <div class="modal fade" id="photo${
          total + index + 1
          }" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="text-center text-white" style="width: 100%;">${
                  item.name
                }</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              ${  
                item.img
                  ? `<div class="modal-body">
                <img class="card-img" src="${item.img}" alt="">
              </div>`
                  : ""
              }
            </div>
          </div>
        </div>
        <!-- Model photo -->
      </div>
      <div class="product">
        <a class="name text-white">${item.name}</a><br>
        <span class="discription">${item.description}</span>
      </div>
    </div>`
    )
    .join("");
};

const updatePortfolioXSX = () => {
  const portfolioContainerXSX = document.querySelector("#portfolioContainerXSX"); 
  portfolioContainerXSX.innerHTML = renderPortfolioXSX();
  updatePaginationXSX(); 
};

function updatePaginationXSX() {
  const paginationContainer = document.querySelector(".paginationXSX");
  paginationContainer.innerHTML = `
    <li class="page-item ${currentPageXSX === 1 ? "disabled" : ""}">
      <a class="page-link bg-transparent border border-primary" href="#XSX"  aria-label="Previous" onclick="prevPageXSX()">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    ${Array.from(
      { length: totalPageXSX },
      (_, i) => `
      <li class="page-item ${currentPageXSX === i + 1 ? "active" : ""}">
        <a class="page-link bg-transparent border border-primary" href="#XSX" onclick="gotoPageXSX(${
          i + 1
        })">${i + 1}</a>
      </li>
    `
    ).join("")}
    <li class="page-item ${currentPageXSX === totalPageXSX ? "disabled" : ""}">
      <a class="page-link bg-transparent border border-primary" href="#XSX" aria-label="Next" onclick="nextPageXSX()">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  `;
}

function prevPageXSX() {
  if (currentPageXSX > 1) {
    currentPageXSX--;
    updatePortfolioXSX();
  }
}

function nextPageXSX() {
  if (currentPageXSX < totalPageXSX) {
    currentPageXSX++;
    updatePortfolioXSX();
  }
}

function gotoPageXSX(page) {
  if (page >= 1 && page <= totalPageXSX) {
    currentPageXSX = page;
    updatePortfolioXSX();
  }
}

updatePortfolioXSX();