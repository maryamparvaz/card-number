let _h1 = document.querySelectorAll('.cart2 div:nth-of-type(2)>h1')
        let _inp = document.querySelectorAll('#num div>input')
        let hold = document.getElementById('hold')
        let h_hold = document.querySelector('#but>div:nth-of-type(2)>h3')
        let expires = document.querySelector('#but>div:nth-of-type(2)>h4')
        let exx = document.getElementById('ex').children
        let ziro = document.getElementById('ziro').children
        let ccv = document.querySelectorAll('#ccv>input')
        let rot = document.getElementById('rot')
        let cv = document.getElementById('cv')

        _inp.forEach((element, i) => {
                element.addEventListener('input', (e) => {
                        let z = e.target.value
                        if ((z.length >= 4) && i <= 2) {
                                e.target.nextElementSibling.focus()

                        } else if ((i == 3) && (z.length >= 4)) {

                                hold.focus()
                        }
                        if (i == 0) {
                                _h1[0].innerText = z
                        } else if (i == 1) {
                                _h1[1].innerText = z
                        } else if (i == 2) {
                                _h1[2].innerText = z
                        } else {
                                _h1[3].innerText = z
                        }
                })
        });
        hold.addEventListener('input', (e) => {
                h_hold.innerHTML = e.target.value
        })

        function ex(g) {
                if (g.target.getAttribute('id') == 'dat') {
                        ziro[1].innerHTML = g.target.value
                }
                if (g.target.getAttribute('id') == 'year') {
                        ziro[0].innerHTML = g.target.value.slice(2, 4) + '/'
                }
        }
        window.addEventListener('click', () => {

                rot.style.transform = 'perspective(800px) rotatey(0deg)'
                rot.children[0].style.zIndex = '0'
                rot.children[1].style.zIndex = '0'
        })
        function rota(e) {
                rot.style.transform = 'perspective(800px) rotatey(180deg)'
                rot.children[0].style.zIndex = '1'
                rot.children[1].style.zIndex = '-1'
                e.stopImmediatePropagation()
                e.target.addEventListener('input', (e) => {
                        cv.innerHTML = e.target.value
                })


        }