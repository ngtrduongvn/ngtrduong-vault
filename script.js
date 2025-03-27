// Chặn F12, Ctrl + Shift + I/J/C & Ctrl + U
document.addEventListener("keydown", function (event) {
    if (
        event.key === "F12" || 
        (event.ctrlKey && event.shiftKey && ["I", "J", "C"].includes(event.key)) || 
        (event.ctrlKey && event.key === "U") // Chặn Ctrl + U
    ) {
        event.preventDefault();
    }
});

// Chặn menu chuột phải
document.addEventListener("contextmenu", function (event) {
    event.preventDefault();
});

// Phát hiện DevTools đang mở
setInterval(function () {
    if (window.outerWidth - window.innerWidth > 200) {
        alert("Không được mở DevTools!");
        window.location.reload();
    }
}, 1000);

// Chặn mở DevTools qua Console
(function() {
    function blockDevTools() {
        setInterval(() => {
            (function() {
                debugger;
            })();
        }, 100);
    }
    blockDevTools();
})();

// Chặn kéo thả hình ảnh
document.addEventListener("dragstart", function(event) {
    event.preventDefault();
});
