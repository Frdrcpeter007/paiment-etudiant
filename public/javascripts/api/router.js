import { router, routerRegex } from "./utils/helpers.js";
import {login} from "./users.js";
import {studentSave, ListStude, StudentPaiementList} from "./student.js";
import { listPayment, studentPaiement } from "./paiment.js";


//Pour desérialiser
$.unserialize = function(serializedString) {
    var str = decodeURI(serializedString);
    var pairs = str.split('&');
    var obj = {},
        p, idx, val;
    for (var i = 0, n = pairs.length; i < n; i++) {
        p = pairs[i].split('=');
        idx = p[0];

        if (idx.indexOf("[]") == (idx.length - 2)) {
            var ind = idx.substring(0, idx.length - 2)
            if (obj[ind] === undefined) {
                obj[ind] = [];
            }
            obj[ind].push(p[1]);
        } else {
            obj[idx] = p[1];
        }
    }
    return obj;
};

router('/', () => {
    login()
});
router('/student', () => {
    studentSave()
});
router('/paiement', ()=> {
    ListStude();
    studentPaiement();
});
router('/list', ()=> {
    listPayment()
});
