const res = require('express/lib/response');
const dosen = require('../models/DosenModel');

//read data dosen
const viewDosen = async (req, res) =>{
    try {
        const data_dosen = await dosen.GetAllDosen();
        if(data_dosen){
            res.status(201).json({data : data_dosen});
        }
    } catch (error) {
        res.status(401).json({pesan : error});
        
    }
}

const createDosen = (req, res) =>{
    try {
        const data_dosen = {
            nid             : req.body.nid,
            nama            : req.body.nama,
            jk              : req.body.jk,
            tgl_lahir       : req.body.tgl_lahir,
            tmp_lahir       : req.body.tmp_lahir,
            no_hp           : req.body.no_hp,
            email           : req.body.email,
            user_created    : req.auth.username
        };
        dosen.InsertDosen(data_dosen)
        .then(row =>{
            res.json({pesan : "Berhasil Input"});
        })
        .catch(err =>{
            res.json({pesan : err});
        })
    } catch (error) {
        res.status(500).json({pesan : error});
        
    }
}

const updateDosen = async (req, res) =>{
    try {
        const nid = req.params.nid;
        const data_dosen = {
            nid         : req.body.nid,
            nama        : req.body.nama,
            jk          : req.body.jk,
            tgl_lahir   : req.body.tgl_lahir,
            tmp_lahir   : req.body.tmp_lahir,
            no_hp       : req.body.no_hp,
            email       : req.body.email,
            user_modify : req.auth.username
        };
        dosen.EditDosen(data_dosen, nid)
        .then(row =>{
            res.json({data : req.body});
        })
        .catch(err =>{
            res.status(400).json({pesan : err});
        })
    } catch (error) {
        res.status(500).json({pesan : error});
        
    }
}

const deleteDosen = async (req, res) =>{
    try {
        const nid = req.params.nid;
        dosen.DeleteDosen(nid)
        .then(row =>{
            res.json({pesan : "Berhasi Input"});
        })
        .catch(err =>{
            res.staus(400).json({pesan : err});
        })
    } catch (error) {
        res.status(500).json({pesan : error});
    }
}

module.exports = {
    viewDosen,
    createDosen,
    updateDosen,
    deleteDosen
}






