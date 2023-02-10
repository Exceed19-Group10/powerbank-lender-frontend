import axios from "axios";

export async function all_powerbank_status() {
    const powerbanks = await axios.get("http://group10.exceed19.online/powerbank/all-powerbank")
    // const powerbanks = await axios.get("http://localhost:3000/all_powerbank")
    return powerbanks.data
}

export async function borrow_laew(U_ID, U_PW, PB_ID) {
    const res = await axios.put(`http://group10.exceed19.online/borrow-laew/${U_ID}/${U_PW}/${PB_ID}`)
    return res
}

export async function get_powerbank_status(PB_ID) {
    const powerbank = await axios.get(`http://group10.exceed19.online/powerbank/get-powerbank/${PB_ID}`)
    // const powerbank = await axios.get("http://localhost:3000/get-powerbank")
    return powerbank.data
}

export async function confirm(PB_ID) {
    const res = await axios.put(`http://group10.exceed19.online/confirm-return/${PB_ID}`)
    return res
}