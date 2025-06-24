// let angka = [1, 2, 3, 4, 5, 6, ];

// document.write("array before : ");
// document.write(angka);
// document.write('<br>');

// angka.push('seven');
// document.writeln(angka);

// document.write('<br>');

// document.write("array after : ");
// angka.pop();
// angka.shift();
// document.write(angka);

// document.write('<br>');

// angka.unshift("seven");
// document.write(angka);

// let kalidua = angka.map(n => n * 2 );
// document.write(kalidua);

// let genap = angka.filter(n => n % 2);
// document.write(genap);

// angka.forEach(a => {
//     document.write('<br>');
//     document.write(a);
// });



// document.write('<br>');

const user ={
    nama : "Dio",
    umur : 17,
};

// document.write(user.nama, " "+ user.umur, " "+ user.alamat);
// user.umur = 18; //ubah data
// user.alamat = "Bogor";
// delete user.nama;
// document.write('<br>');
// document.write(user.nama, " "+ user.umur, " "+user.alamat);

for (let key in user){
    document.write(key + ": " + user[key]);
}

