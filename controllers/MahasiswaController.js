const mahasiswa = require('../models/MahasiswaModel');

//read data mahasiswa
const viewMahasiswa = async (req, res) =>{
    try {
        const profil = await mahasiswa.GetAllMahasiswa();
        if(profil){
            res.status(201).json({data : profil});
        }
    } catch (error) {
        res.status(401).json({pesan : error});
    }
}

const createMahasiswa = (req, res) =>{
    try {
        const profil ={
            nim             : req.body.nim,
            nama            : req.body.nama,
            jk              : req.body.jk,
            tgl_lahir       : req.body.tgl_lahir,
            tmp_lahir       : req.body.tmp_lahir,
            no_hp           : req.body.no_hp,
            email           : req.body.email,
            user_created    : req.auth.username
        };
        mahasiswa.InsertMahasiswa(profil)
        .then(row =>{
            res.json(
                {
                    pesan : 'Berhasil input'
                }
            );
        })
        .catch(err =>{
            res.status(400).json({pesan : err});
        })
    } catch (error) {
        //console.log(error);
        res.status(500).json({pesan : error});
    }
}


const updateMahasiswa = async (req, res) => {
    try {
        const nim = req.params.nim;
        const profil ={
            nim             : req.body.nim,
            nama            : req.body.nama,
            jk              : req.body.jk,
            tgl_lahir       : req.body.tgl_lahir,
            tmp_lahir       : req.body.tmp_lahir,
            no_hp           : req.body.no_hp,
            email           : req.body.email,
            user_modify     : req.auth.username
        };
        mahasiswa.EditMahasiswa(profil, nim)
        .then(row =>{
            res.json(
                {
                    profil : req.body
                }
            );
        })
        .catch(err =>{
            res.status(400).json({pesan : err});
        })
    } catch (error) {
        //console.log(error);
        res.status(500).json({pesan : error});
    }
}

const deleteMahasiswa = async (req, res) =>{
    try {
        const nim = req.params.nim;
        mahasiswa.deleteMahasiswa(nim)
        .then(row =>{
            res.json({pesan : "Berhasil hapus"});
        })
        .catch(err =>{
            res.status(400).json({pesan : err});
        })
    } catch (error) {
        res.status(500).json({pesan : error});
    }
}

module.exports= {
    viewMahasiswa,
    createMahasiswa,
    updateMahasiswa,
    deleteMahasiswa
}