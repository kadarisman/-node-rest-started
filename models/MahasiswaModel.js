const knex = require ('./../config/knex');

const GetAllMahasiswa = () => {
    const mahasiswa = knex.select('*');
    mahasiswa.from('mahasiswa as m');
    return mahasiswa;
}

const InsertMahasiswa = (data) =>{
    return knex('mahasiswa').insert(data);
}

const EditMahasiswa = (data, nim) =>{
    return knex('mahasiswa').where({nim : nim}).update(data);
}

const deleteMahasiswa = (nim) =>{
    return knex('mahasiswa').where({nim : nim}).delete();
} 

const getNimByNim = (nim_params, nim_body) =>{
    const nim_cek = knex.select('m.nim');
    nim_cek.from('mahasiswa as m').where('m.nim', '!=', nim_params ).where('m.nim', '=', nim_body);
    return nim_cek.first();
}

const getNimExit = (nim_params) => {
    const nim_cek = knex.select('m.nim');
    nim_cek.from('mahasiswa as m').where('m.nim', '=', nim_params );
    return nim_cek.first();
}



module.exports = {
    GetAllMahasiswa,
    InsertMahasiswa,
    EditMahasiswa,
    deleteMahasiswa,
    getNimByNim,
    getNimExit
}