import bkn_mra_d from "../icons/bkn_-ra_d.svg"
import bkn_mra_n from "../icons/bkn_-ra_n.svg"
import bkn_msn_d from "../icons/bkn_-sn_d.svg"
import bkn_msn_n from "../icons/bkn_-sn_n.svg"
import bkn_pra_d from "../icons/bkn_+ra_d.svg"
import bkn_pra_n from "../icons/bkn_+ra_n.svg"
import bkn_psn_d from "../icons/bkn_+sn_d.svg"
import bkn_psn_n from "../icons/bkn_+sn_n.svg"
import bkn_d from "../icons/bkn_d.svg"
import bkn_n from "../icons/bkn_n.svg"
import bkn_ra_d from "../icons/bkn_ra_d.svg"
import bkn_ra_n from "../icons/bkn_ra_n.svg"
import blm from "../icons/bl-.svg"
import bl from "../icons/bl.svg"
import bkn_sn_d from "../icons/bkn_sn_d.svg"
import bkn_sn_n from "../icons/bkn_sn_n.svg"
import fct_mra from "../icons/fct_-ra.svg"
import fct_msn from "../icons/fct_-sn.svg"
import fct_pra from "../icons/fct_+ra.svg"
import fct_psn from "../icons/fct_+sn.svg"
import fct_ra_sn from "../icons/fct_ra_sn.svg"
import fct_ra from "../icons/fct_ra.svg"
import fct_sn from "../icons/fct_sn.svg"
import fct_ts_ra from "../icons/fct_ts_ra.svg"
import fct_ts from "../icons/fct_ts.svg"
import fg_d from "../icons/fg_d.svg"
import fg_n from "../icons/fg_n.svg"
import ic_air_q from "../icons/ic_air_q.svg"
import ovc_mra from "../icons/ovc_-ra.svg"
import ovc_msn from "../icons/ovc_-sn.svg"
import ovc_pra from "../icons/ovc_+ra.svg"
import ovc_psn from "../icons/ovc_+sn.svg"
import ovc_h from "../icons/ovc_h.svg"
import ovc_ra_sn from "../icons/ovc_ra_sn.svg"
import ovc_ra from "../icons/ovc_ra.svg"
import ovc_sn from "../icons/ovc_sn.svg"
import ovc_ts_h from "../icons/ovc_ts_h.svg"
import ovc_ts_ra from "../icons/ovc_ts_ra.svg"
import ovc_ts from "../icons/ovc_ts.svg"
import ovc from "../icons/ovc.svg"
import skc_d from "../icons/skc_d.svg"
import skc_n from "../icons/skc_n.svg"


export const getSvg = (icon: string) => {

    switch (icon) {
        case "skc_d":
            return skc_d;
        case "skc_n":
            return skc_n;
        case "ovc":
            return ovc;
        case "ovc_ts":
            return ovc_ts;
        case "ovc_ts_ra":
            return ovc_ts_ra;
        case "ovc_ts_h":
            return ovc_ts_h;
        case "ovc_sn":
            return ovc_sn;
        case "ovc_ra":
            return ovc_ra;
        case "ovc_ra_sn":
            return ovc_ra_sn;
        case "ovc_h":
            return ovc_h;
        case "ovc_+sn":
            return ovc_psn;
        case "ovc_+ra":
            return ovc_pra;
        case "ovc_-sn":
            return ovc_msn;
        case "ovc_-ra":
            return ovc_mra;
        case "ic_air_q":
            return ic_air_q;
        case "fg_n":
            return fg_n;
        case "fg_d":
            return fg_d;
        case "fct_ts":
            return fct_ts;
        case "fct_ts_ra":
            return fct_ts_ra;
        case "bkn_d":
            return bkn_d;
        // case "":
        //     return test;


        default:
            return ovc_mra
    }
}
