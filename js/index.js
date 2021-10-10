    window.onload = function() {
        console.log(document.getElementById('wrap'));
    }

    document.querySelector('.btn').onclick = function() {
        let wrap = document.getElementById('wrap');
        console.log(wrap);
        wrap.className = 'owrap'
    }
