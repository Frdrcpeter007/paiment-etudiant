import { postForm, postFormulaire } from './init.js';

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

export {studentSave}