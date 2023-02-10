import axios from "axios";

export async function all_powerbank_status() {
    const powerbanks = await axios.get("http://group10.exceed19.online/all-powerbank")
    return powerbanks.data
}

export async function borrow_laew(U_ID, U_PW, PB_ID){
    const res = await axios.put(`http://group10.exceed19.online/borrow-laew/${U_ID}/${U_PW}/${PB_ID}`)
    return res

}