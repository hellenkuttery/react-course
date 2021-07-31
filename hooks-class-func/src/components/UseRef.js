import React, { useRef, useState } from 'react';

function UseReference() {


let kullaniciAdi=useRef();
const [kullanici,setKullanici]=useState();
function kullaniciAdiniGoster(){
    setKullanici(kullaniciAdi.current.value)
}
return (
    <>
        <p>Kullanici Adı:{kullanici}</p>
        <input type="text" ref={kullaniciAdi} />
        <button onClick={kullaniciAdiniGoster}>Kullanıcı Adını Göster</button>
     </>
);
}

export default UseReference;