import { postForm, postFormulaire } from './init.js';

const login = () => {
    postFormulaire("loginForm", "btn-login", "/api/login", "container-login", "pink", (result) => {
        console.log(result)
        if (result.state) {
            window.location.href = '/list'
        } else {
            swal({
                title: "Erreur !",
                text: result.message,
                icon: "warning",
                button: true
            })
        }
    })
}

export {login}