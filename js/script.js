// //buat aray untuk huruf

// //pilih kata dengan random
    const words = ['BANDA-ACEH', 'MEDAN', 'PADANG', 'PEKANBARU', 'TANJUNGPINANG', 'JAMBI', 'BENGKULU', 'PALEMBANG', 'PANGKALPINANG', 'BANDAR-LAMPUNG', 'SERANG', 'BANDUNG', 'JAKARTA', 'SEMARANG', 'YOGYAKARTA', 'SURABAYA', 'DENPASAR', 'MATARAM', 'KUPANG', 'POINTIANAK', 'BANJARMASIN', 'PALANGKARAYA', 'SAMARINDA', 'TANJUNG-SELOR', 'GORONTALO', 'MAMUJU', 'MAKASSAR', 'PALU', 'KENDARI', 'MANADO', 'AMBON', 'SOFIFI', 'MANOKWARI', 'JAYAPURA'];

    const hints = ['Ibu Kota Provinsi Aceh', 'Ibu Kota Provinsi Sumatera Utara', 'Ibu Kota Sumatera Barat', 'Ibu Kota Riau', 'Ibu Kota Kepulauan Riau', 'Ibu Kota Jambi', 'Ibu Kota Bengkulu', 'Ibu Kota Sumatera Selatan', 'Ibu Kota Bangka Belitung', 'Ibu Kota Lampung', 'Ibu Kota Banten', 'Ibu Kota Jawa Barat', 'Ibu Kota Jakarta','Ibu Kota Jawa Tengah', 'Ibu Kota Yogyakarta', 'Ibu Kota Jawa Timur', 'Ibu Kota Bali', 'Ibu Kota Nusa Tenggara Barat', 'Ibu Kota Nusa Tenggara Timur', 'Ibu Kota Kalimantan Barat', 'Ibu Kota Kalimantan Selatan', 'Ibu Kota Kalimantan Tengah', 'Ibu Kota Kalimantan Timur', 'Ibu Kota Kalimantan Utara', 'Ibu Kota Gorontalo', 'Ibu Kota Sulawesi Barat', 'Ibu Kota Sulawesi Selatan', 'Ibu Kota Sulawesi Tengah', 'Ibu Kota Sulawesi Tenggara', 'Ibu Kota Sulawesi Utara', 'Ibu Kota Maluku', 'Ibu Kota Maluku Utara', 'Ibu Kota Papua Barat', 'Ibu Kota Papua']

    let randomNum = Math.floor(Math.random() * words.length);

    let kataSoal = words[randomNum];
    let kesempatan = document.getElementById('live')
    let nyawa = 6
    let hint = hints[randomNum]
    let hintss = document.getElementById('hint')
    let underscore = document.getElementById('underscores')
    let testUnder = []
    let buttons = document.querySelectorAll('.buttons')
    let counter = 0
    let temp = ''

    live(nyawa)
    bikinUnderscore(kataSoal)


    function live (number){
        kesempatan.innerHTML = `Sisa kesempatan menebak anda adalah ${number} kali`
        if(number == 1){
            hintss.innerHTML = `Hint - ${hint}`
        }
    }

    document.addEventListener('keypress', (event) => {
        for(let i = 0; i < kataSoal.length; i++){
            temp = ''
            if(event.key !== kataSoal[i].toLowerCase){
                counter++
            }
            
            console.log(testUnder[i])
            if(event.key === kataSoal[i].toLowerCase()) {
                testUnder[`${i}`] = event.key.toUpperCase()
                counter = 0
            }
        }
            
            if(counter === kataSoal.length || counter > kataSoal.length){
                nyawa--
                live(nyawa)
            } else {
                counter = 0
            }

            if(nyawa === 0){
                underscore.innerHTML = `${kataSoal}`
                alert('Play Again ?')
                location.reload()
            } else if (nyawa !== -1){
                underscore.innerHTML = testUnder
            }
            checker(testUnder)
        })
        
    function bikinUnderscore (str) {
        for(let i = 0; i < str.length; i++){
            if(str[i] === '-'){
                testUnder.push('-')
            } else {
                testUnder.push('_')
            }
        }
        underscore.innerHTML = testUnder
    }

    function checker (str) {
        for(let i = 0; i < str.length; i++){
            if(str[i] === '_'){
                temp += str[i]
            }
            
        }
        if(!temp){
            alert('You Win!')
            location.reload()
        }
    }

    //test 123