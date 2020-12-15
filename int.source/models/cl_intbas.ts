import Axios from "axios";

/** Cuando lleve el signo ? (ls_passwd?: string) , no es obligatoria la propiedad */
export interface ilogin {
    ls_usuari: string
    ls_passwd: string
}

export interface iwesbas {
    uf_get_request: (as_rutwes: string, aob_params: Object) => Promise<any>
    uf_get_request_with_token: (as_rutwes: string, aob_params: Object) => Promise<any>
    uf_post_request: (as_rutwes: string, aob_params: Object) => Promise<any>
    uf_post_request_with_token: (as_rutwes: string, aob_params: Object) => Promise<any>
}