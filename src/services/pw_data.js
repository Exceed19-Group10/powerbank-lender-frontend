import axios from "axios";

export async function all_powerbank_status() {
    // const powerbanks = await axios.get("http://ecourse.cpe.ku.ac.th/exceed10/powerbank/all-powerbank")
    const powerbanks = await axios.get("http://group10.exceed19.online/powerbank/all-powerbank")
    // const powerbanks = await axios.get("http://localhost:3000/all_powerbank")
    return powerbanks.data
}

export async function borrow_laew(U_ID, U_PW, PB_ID) {
    console.log(U_ID, U_PW, PB_ID)
    // const res = await axios.put(`http://ecourse.cpe.ku.ac.th/exceed10/powerbank/borrow-laew/${U_ID}/${U_PW}/${PB_ID}`)
    const res = await axios.put(
        `http://group10.exceed19.online/powerbank/borrow-laew/${PB_ID}`,
        {
            "user_ID": U_ID,
            "password": U_PW
        })
    return res
}

export async function get_powerbank_status(PB_ID) {
    // const powerbank = await axios.get(`http://ecourse.cpe.ku.ac.th/exceed10/powerbank/get-powerbank/${PB_ID}`)
    const powerbank = await axios.get(`http://group10.exceed19.online/powerbank/get-powerbank/${PB_ID}`)
    // const powerbank = await axios.get("http://localhost:3000/get-powerbank")
    return powerbank.data
}

export async function confirm(PB_ID) {
    // const res = await axios.put(`http://ecourse.cpe.ku.ac.th/exceed10/powerbank/confirm-return/${PB_ID}`)
    const res = await axios.put(`http://group10.exceed19.online/powerbank/confirm-return/${PB_ID}`)
    return res
}