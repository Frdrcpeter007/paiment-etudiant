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

const list = () => {
    getDatas('/api/paiement/list', (state, datas) => {
        console.log(datas);
   
        datas.datas.map((item, index, tab) => {
           if(state) {
               $("#listPaiyementStudent").append(`
                <tr>
                    <td>
                        ${item.student.name.toUpperCase()}
                    </td>
                    <td>
                        ${item.student.lastName.toUpperCase()}
                    </td>
                    <td>
                        ${item.student.firstName.toUpperCase()}
                    </td>
                    <td>
                        ${item.student.promotion}
                    </td>
                    <td>
                        ${item.totalAmount} $
                    </td>
                </tr>
               `)
           }
        })
    })
}

export {studentPaiement, list as listPayment}