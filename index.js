var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("./views");
var port = process.env.PORT || 6969;
app.listen(port, function (err) {
  if(err){
    console.log('Server start error: '+err);
  }else {
    console.log('Server is running at port: '+port);
  }
});

var mang = [
  new VideoVimeo(1, "187766126_th.jpg", "187766126", "Nhu Phut Ban Dau-Noo Phuoc Thinh", "Vì em anh như người điên mất trí. Vì em anh như chẳng còn biết nghĩ suy. Vì anh đã trót lỡ đắm say em không bận tâm mai sau thế nào..."),
  new VideoVimeo(2, "187759316_th.jpg", "187759316", "Chung Ta Thuoc Ve Nhau-Son Tung MTP", "Niềm tin đã mất, giọt nước mát cuốn kí ức anh chìm sâu. Tìm về nơi đâu, cô đơn đôi chân lạc trôi giữa bầu trời..."),
  new VideoVimeo(3, "187781709_th.jpg", "187781709", "Gui Anh Xa Nho-Bich Phuong", "Anh đi hoài đường xa, em vẫn chờ nơi ấy..."),
  new VideoVimeo(4, "187780178_th.jpg", "187780178", "We Don't Talk Anymore-Charlie-Puth vs Selena Gomez", "We Don't Talk Anymore, We Don't Talk Anymore..."),
  new VideoVimeo(5, "187795671_th.jpg", "187795671", "Talk Love - K.Will", " 케이윌 - 말해! 뭐해...")
];

function VideoVimeo(id, h, i, t, m){
  this.Id = id;
  this.HinhNho = h;
  this.IdVideo = i;
  this.TenVideo = t;
  this.MoTa = m;
}

app.get("/form", function(req, res){
  res.render("formThemVids");
});

app.get("/", function(req, res){
  res.render("index_dark", {danhsach:mang});
});

app.post("/upload", function(req, res){

});
