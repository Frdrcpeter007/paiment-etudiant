import { postForm, postFormulaire } from './init.js';

const login = () => {
    postFormulaire("loginForm", "btn-login", "/api/login", "container-login", "pink", (result) => {
        console.log(result)
        if (result.state) {
            window.location.href = '/student'
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