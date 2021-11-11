class relogio {
    pointer_h;
    pointer_m;
    pointer_s;
    r_tel;
    constructor(ph, pm, ps, r) {
        this.pointer_h = document.getElementById(ph);
        this.pointer_m = document.getElementById(pm)
        this.pointer_s = document.getElementById(ps)
        this.r_tel = document.getElementById(r)

    }


    check = function () {
        console.log(this.pointer_h)
        console.log(this.pointer_m)
        console.log(this.pointer_s)
    }

    initialize = function () {
        let p1 = this.pointer_h.style
        let p2 = this.pointer_m.style
        let p3 = this.pointer_s.style
        let x=0;
        const interval = setInterval(function () {
            let date = new Date()

            
            if (date.getMinutes() == 0) {

                p2.transform = `rotate(${180}deg)`
            }
            else {
                p2.transform = `rotate(${(new Date().getMinutes() + 270) * 6}deg)`
            }
            p3.transform = `rotate(${new Date().getSeconds() * 6}deg)`
          
           p1.transform=`rotate( ${((new Date().getHours()+270))*30}deg)`
       x++
        }, 1000)

    }
}

const relo = new relogio('hours', 'min', 'sec', 'relogio')

window.onload = relo.initialize()
