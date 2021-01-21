import { postForm, postFormulaire, getDatas } from './init.js';

const studentPaiement = () => {

    postFormulaire("Formpaiement", "Btnpaiement", "/api/paiement" , "Containerpaiement", "pink", (result) => {
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


export {studentPaiement}