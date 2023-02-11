import axios from "axios";

// const default_route = "https://ecourse.cpe.ku.ac.th/exceed10/powerbank"
const default_route = "http://group10.exceed19.online/powerbank"
// const default_route = ""http://localhost:3000"



export async function all_powerbank_status() {
    const powerbanks = await axios.get(default_route + "/all-powerbank")
    return powerbanks.data
}

export async function borrow_laew(U_ID, U_PW, PB_ID) {
    const res = await axios.put(
        default_route + `/borrow-laew/${PB_ID}`,
        {
            "user_ID": U_ID,
            "password": U_PW
        })
    return res
}

export async function get_powerbank_status(PB_ID) {
    const powerbank = await axios.get(default_route + `/get-powerbank/${PB_ID}`)
    return powerbank.data
}

export async function confirm(PB_ID) {
    const res = await axios.put(default_route + `/check-dai-mai/${PB_ID}`)
    return res
}

export async function force_yu_mai(PB_ID) {
    const res = await axios.put(default_route + `/return-laew/${PB_ID}`)
    return res
}

export async function get_fee(PB_ID) {
    const res = await axios.get(default_route + `/fee/${PB_ID}`)
    return res.data
}