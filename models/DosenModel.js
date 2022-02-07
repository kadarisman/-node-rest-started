const knex = require("../config/knex");

const GetAllDosen = () =>{
    const dosen = knex.select('*');
    dosen.from('dosen as d');
    return dosen;
}

const InsertDosen = (data) =>{
    return knex('dosen').insert(data);
}

const EditDosen = (data, nid) =>{
    return knex('dosen').where({nid : nid}).update(data);
}

const DeleteDosen = (nid) =>{
    return knex('dosen').where({nid : nid}).delete();
}

const getNidByNid = (nid_params, nid_body) =>{
    const nid_cek = knex.select('d.nid');
    nid_cek.from('dosen as d').where('d.nid', '!=', nid_params).where('d.nid', '=', nid_body);
    return nid_cek.first();
}

const getNidExit = (nid_params) =>{
    const nid_cek = knex.select('d.nid');
    nid_cek.from('dosen as d').where('d.nid', '=', nid_params);
    return nid_cek.first();
}

module.exports = {
    GetAllDosen,
    InsertDosen,
    EditDosen,
    DeleteDosen,
    getNidByNid,
    getNidExit

}