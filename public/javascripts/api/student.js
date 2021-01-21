import { postForm, postFormulaire, getDatas } from './init.js';

const studentSave = () => {

    postFormulaire("studentForm", "btn-save", "/api/student/save" , "container-student", "pink", (result) => {
        console.log(result);
        if(result.state) {
            swal({
                title: "Success !",
                text: result.message,
                icon: "success",
                button: true
            }).then(ok => {
                window.location.reload();
            })
        }else {
            swal({
                title: "Erreur !",
                text: result.message,
                icon: "warning",
                button: true
            })
        }
    })
}

const getStudent = (url, select) => {
 getDatas(url, (state, datas) => {
     console.log(datas);

     datas.datas.map((item, index, tab) => {
        if(state) {
            $("#" + select).append(`
            <option value='${item._id}' >
              ${item.name}
            </option>
          `);
         }
     })
 })
}

const ListStude = () => {
    getStudent('/api/student/get', 'student')
}
//
const getStudentListe = (url, select) => {
 getDatas(url, (state, datas) => {
     console.log(datas);

     datas.datas.map((item, index, tab) => {
        if(state) {
            $("#" + select).append(`
            
          `);
         }
     })
 })
}

const StudentPaiementList = () => {
    getStudentListe('/api/payments/list', 'list')
}


export {studentSave, ListStude, StudentPaiementList}